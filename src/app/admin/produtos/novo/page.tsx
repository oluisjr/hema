import Link from "next/link";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="street-admin-shell">
      <AdminSidebar active="novo" />
      <main className="street-admin-main product-edit-main">
        <AdminTopbar />
        <div className="product-edit-header">
          <div>
            <span className="brush-label">Criar produto</span>
            <h1>Novo produto<span>.</span></h1>
            <p>Crie e configure seu produto com estilo.</p>
          </div>
          <div className="edit-actions">
            <Link href="/admin#produtos">← Voltar para produtos</Link>
            <button>Duplicar produto</button>
          </div>
        </div>
        <ProductForm />
        <footer className="admin-dev-credit">
          <img className="dev-hema-logo" src="/hema-street-ui-v2-assets/brand/hema-logo.svg" alt="HeMa" />
          <span />
          <small>Desenvolvido por</small>
          <img className="dev-signature" src="/hema-street-ui-v2-assets/brand/luis-signature-white.png" alt="A Luis Development" />
        </footer>
      </main>
    </div>
  );
}
