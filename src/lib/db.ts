import { neon } from "@neondatabase/serverless";
import type { Lead, Product, ProductInput, StoreStats } from "@/lib/types";
import { demoLeads, demoProducts } from "@/data/demoProducts";

type SqlClient = ReturnType<typeof neon>;

let cachedSql: SqlClient | null = null;

function getClient(): SqlClient | null {
  if (!process.env.DATABASE_URL) return null;
  if (!cachedSql) cachedSql = neon(process.env.DATABASE_URL);
  return cachedSql;
}

function mapProduct(row: Record<string, unknown>): Product {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    brand: String(row.brand),
    category: String(row.category),
    collection: (row.collection as string | null) ?? null,
    colorway: (row.colorway as string | null) ?? null,
    priceCents: Number(row.price_cents),
    salePriceCents: row.sale_price_cents === null ? null : Number(row.sale_price_cents),
    descriptionShort: (row.description_short as string | null) ?? null,
    descriptionLong: (row.description_long as string | null) ?? null,
    details: Array.isArray(row.details) ? (row.details as string[]) : [],
    sizes: Array.isArray(row.sizes) ? (row.sizes as string[]) : [],
    colors: Array.isArray(row.colors) ? (row.colors as string[]) : [],
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    images: Array.isArray(row.images) ? (row.images as string[]) : [],
    model3dUrl: (row.model_3d_url as string | null) ?? null,
    has3d: Boolean(row.has_3d),
    featured: Boolean(row.featured),
    active: Boolean(row.active),
    stock: Number(row.stock ?? 0),
    status: String(row.status ?? "published"),
    createdAt: row.created_at ? new Date(String(row.created_at)).toISOString() : undefined,
    updatedAt: row.updated_at ? new Date(String(row.updated_at)).toISOString() : undefined
  };
}

function mapLead(row: Record<string, unknown>): Lead {
  return {
    id: String(row.id),
    productId: (row.product_id as string | null) ?? null,
    productName: (row.product_name as string | null) ?? null,
    productImage: (row.product_image as string | null) ?? null,
    customerName: (row.customer_name as string | null) ?? null,
    customerPhone: (row.customer_phone as string | null) ?? null,
    source: String(row.source ?? "WhatsApp"),
    status: String(row.status ?? "new"),
    message: (row.message as string | null) ?? null,
    notes: (row.notes as string | null) ?? null,
    createdAt: row.created_at ? new Date(String(row.created_at)).toISOString() : new Date().toISOString(),
    updatedAt: row.updated_at ? new Date(String(row.updated_at)).toISOString() : undefined
  };
}

export async function getProducts(options?: {
  activeOnly?: boolean;
  featuredOnly?: boolean;
  query?: string;
  brand?: string;
}): Promise<Product[]> {
  const sql = getClient();
  if (!sql) {
    let data = [...demoProducts];
    if (options?.activeOnly) data = data.filter((p) => p.active);
    if (options?.featuredOnly) data = data.filter((p) => p.featured);
    if (options?.brand) data = data.filter((p) => p.brand === options.brand);
    if (options?.query) {
      const q = options.query.toLowerCase();
      data = data.filter((p) => [p.name, p.brand, p.category, p.colorway].join(" ").toLowerCase().includes(q));
    }
    return data;
  }

  const query = `%${options?.query ?? ""}%`;
  const brand = options?.brand ?? "";
  const rows = await sql`
    select *
    from products
    where (${!options?.activeOnly} or active = true)
      and (${!options?.featuredOnly} or featured = true)
      and (${brand === ""} or brand = ${brand})
      and (${!options?.query} or (name ilike ${query} or brand ilike ${query} or category ilike ${query} or colorway ilike ${query}))
    order by featured desc, created_at desc
  `;

  return (rows as Record<string, unknown>[]).map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const sql = getClient();
  if (!sql) return demoProducts.find((p) => p.slug === slug) ?? null;

  const rows = await sql`select * from products where slug = ${slug} limit 1` as Record<string, unknown>[];
  return rows[0] ? mapProduct(rows[0]) : null;
}

export async function getProductById(id: string): Promise<Product | null> {
  const sql = getClient();
  if (!sql) return demoProducts.find((p) => p.id === id) ?? null;

  const rows = await sql`select * from products where id = ${id} limit 1` as Record<string, unknown>[];
  return rows[0] ? mapProduct(rows[0]) : null;
}

export async function getAdminStats(): Promise<StoreStats> {
  const sql = getClient();
  if (!sql) {
    return {
      totalProducts: demoProducts.length,
      productsWith3d: demoProducts.filter((p) => p.has3d).length,
      activeFeatured: demoProducts.filter((p) => p.featured).length,
      leads: demoLeads.length
    };
  }

  const rows = await sql`
    select
      (select count(*)::int from products) as total_products,
      (select count(*)::int from products where has_3d = true) as products_with_3d,
      (select count(*)::int from products where featured = true and active = true) as active_featured,
      (select count(*)::int from leads) as leads
  `;

  const row = (rows as Record<string, unknown>[])[0];
  return {
    totalProducts: Number(row.total_products),
    productsWith3d: Number(row.products_with_3d),
    activeFeatured: Number(row.active_featured),
    leads: Number(row.leads)
  };
}

export async function upsertProduct(input: ProductInput, id?: string) {
  const sql = getClient();
  if (!sql) {
    throw new Error("DATABASE_URL não configurada. Configure o Neon para salvar produtos.");
  }

  if (id) {
    await sql`
      update products set
        slug = ${input.slug},
        name = ${input.name},
        brand = ${input.brand},
        category = ${input.category},
        collection = ${input.collection || null},
        colorway = ${input.colorway || null},
        price_cents = ${input.priceCents},
        sale_price_cents = ${input.salePriceCents ?? null},
        description_short = ${input.descriptionShort || null},
        description_long = ${input.descriptionLong || null},
        details = ${JSON.stringify(input.details)}::jsonb,
        sizes = ${input.sizes},
        colors = ${input.colors},
        tags = ${input.tags},
        images = ${input.images},
        model_3d_url = ${input.model3dUrl || null},
        has_3d = ${input.has3d},
        featured = ${input.featured},
        active = ${input.active},
        stock = ${input.stock},
        status = ${input.status}
      where id = ${id}
    `;
    return id;
  }

  const rows = await sql`
    insert into products (
      slug, name, brand, category, collection, colorway, price_cents, sale_price_cents,
      description_short, description_long, details, sizes, colors, tags, images,
      model_3d_url, has_3d, featured, active, stock, status
    ) values (
      ${input.slug}, ${input.name}, ${input.brand}, ${input.category}, ${input.collection || null},
      ${input.colorway || null}, ${input.priceCents}, ${input.salePriceCents ?? null},
      ${input.descriptionShort || null}, ${input.descriptionLong || null}, ${JSON.stringify(input.details)}::jsonb,
      ${input.sizes}, ${input.colors}, ${input.tags}, ${input.images}, ${input.model3dUrl || null},
      ${input.has3d}, ${input.featured}, ${input.active}, ${input.stock}, ${input.status}
    )
    returning id
  `;
  return String((rows as Record<string, unknown>[])[0].id);
}

export async function deleteProduct(id: string) {
  const sql = getClient();
  if (!sql) throw new Error("DATABASE_URL não configurada.");
  await sql`delete from products where id = ${id}`;
}

export async function getLeads(): Promise<Lead[]> {
  const sql = getClient();
  if (!sql) return demoLeads;

  const rows = await sql`
    select
      leads.*,
      products.name as product_name,
      products.images[1] as product_image
    from leads
    left join products on products.id = leads.product_id
    order by leads.created_at desc
    limit 100
  `;
  return (rows as Record<string, unknown>[]).map(mapLead);
}

export async function createLead(input: { productId?: string | null; message?: string; source?: string }) {
  const sql = getClient();
  if (!sql) return { ok: true, demo: true };

  await sql`
    insert into leads (product_id, source, status, message)
    values (${input.productId || null}, ${input.source || "whatsapp"}, 'new', ${input.message || null})
  `;
  return { ok: true };
}
