"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteProduct, upsertProduct } from "@/lib/db";
import { slugify, splitList, toCents } from "@/lib/format";
import type { ProductInput } from "@/lib/types";

function checkbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function productFromForm(formData: FormData): ProductInput {
  const name = String(formData.get("name") || "").trim();
  const explicitSlug = String(formData.get("slug") || "").trim();

  const images = splitList(formData.get("images"));
  const details = splitList(formData.get("details"));
  const sizes = splitList(formData.get("sizes"));
  const colors = splitList(formData.get("colors"));
  const tags = splitList(formData.get("tags"));
  const salePrice = String(formData.get("salePrice") || "").trim();

  return {
    slug: explicitSlug || slugify(name),
    name,
    brand: String(formData.get("brand") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    collection: String(formData.get("collection") || "").trim(),
    colorway: String(formData.get("colorway") || "").trim(),
    priceCents: toCents(formData.get("price")),
    salePriceCents: salePrice ? toCents(salePrice) : null,
    descriptionShort: String(formData.get("descriptionShort") || "").trim(),
    descriptionLong: String(formData.get("descriptionLong") || "").trim(),
    details,
    sizes,
    colors,
    tags,
    images,
    model3dUrl: String(formData.get("model3dUrl") || "").trim(),
    has3d: checkbox(formData, "has3d"),
    featured: checkbox(formData, "featured"),
    active: checkbox(formData, "active"),
    stock: Number.parseInt(String(formData.get("stock") || "0"), 10) || 0,
    status: checkbox(formData, "active") ? "published" : "draft"
  };
}

export async function createProductAction(formData: FormData) {
  const input = productFromForm(formData);
  if (!input.name || !input.slug || !input.brand || !input.category || input.images.length === 0) {
    redirect("/admin/produtos/novo?erro=campos");
  }

  await upsertProduct(input);
  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateProductAction(id: string, formData: FormData) {
  const input = productFromForm(formData);
  await upsertProduct(input, id);
  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath("/admin");
  revalidatePath(`/produto/${input.slug}`);
  redirect("/admin");
}

export async function deleteProductAction(id: string) {
  await deleteProduct(id);
  revalidatePath("/");
  revalidatePath("/catalogo");
  revalidatePath("/admin");
}
