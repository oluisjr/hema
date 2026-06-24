import Image from "next/image";
import Link from "next/link";
import { BarChart3, Box, Boxes, LayoutDashboard, MessageCircle, PlusCircle, Settings, ShoppingBag, Star, Users } from "lucide-react";
import { studioAssets } from "@/data/assets";

export function AdminSidebar({ active }: { active?: "dashboard" | "produtos" | "novo" | "leads" }) {
  const itemClass = (key: string) => (active === key ? "active" : "");

  return (
    <aside className="street-admin-sidebar">
      <Link href="/admin" className="admin-brand">
        <Image src={studioAssets.logo} alt="HeMa Footwear" width={170} height={62} priority />
      </Link>

      <nav className="street-admin-nav">
        <small>Painel</small>
        <Link className={itemClass("dashboard")} href="/admin"><LayoutDashboard size={18} /> Dashboard</Link>
        <Link href="/admin/leads"><ShoppingBag size={18} /> Pedidos <b>12</b></Link>

        <small>Catálogo</small>
        <Link className={itemClass("produtos")} href="/admin#produtos"><Box size={18} /> Produtos</Link>
        <Link className={itemClass("novo")} href="/admin/produtos/novo"><PlusCircle size={18} /> Adicionar produto</Link>
        <Link href="/admin#categorias"><Boxes size={18} /> Categorias</Link>
        <Link href="/admin#reviews"><Star size={18} /> Avaliações</Link>

        <small>Clientes</small>
        <Link className={itemClass("leads")} href="/admin/leads"><MessageCircle size={18} /> Leads WhatsApp</Link>
        <Link href="/admin#clientes"><Users size={18} /> Clientes</Link>

        <small>Relatórios</small>
        <Link href="/admin#relatorios"><BarChart3 size={18} /> Relatórios</Link>
        <Link href="/admin#configuracoes"><Settings size={18} /> Configurações</Link>
      </nav>

      <div className="admin-side-art">
        <div className="crown-mark" />
        <strong>Gerencie<br />com atitude</strong>
      </div>
    </aside>
  );
}
