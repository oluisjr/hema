import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { ProductForm } from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/db";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <div className="street-admin-shell">
      <AdminSidebar active="produtos" />
      <main className="street-admin-main product-edit-main">
        <AdminTopbar />
        <div className="product-edit-header">
          <div>
            <span className="brush-label">Editar produto</span>
            <h1>{product.name}<span>.</span></h1>
            <p>Ajuste as informações do produto e publique no catálogo.</p>
          </div>
          <div className="edit-actions">
            <Link href="/admin#produtos">← Voltar para produtos</Link>
          </div>
        </div>
        <ProductForm product={product} />
      </main>
    </div>
  );
}
