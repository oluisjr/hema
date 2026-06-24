import Image from "next/image";
import Link from "next/link";
import { CreditCard, MessageCircle, PackageCheck, ShoppingBag, TrendingUp } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatCard } from "@/components/admin/StatCard";
import { getAdminStats, getProducts } from "@/lib/db";
import { currencyFromCents } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [stats, products] = await Promise.all([getAdminStats(), getProducts()]);
  const recent = products.slice(0, 5);

  return (
    <div className="street-admin-shell">
      <AdminSidebar active="dashboard" />

      <main className="street-admin-main">
        <header className="dashboard-header">
          <div>
            <p>Bem-vindo(a) de volta, Luis Developer 👑</p>
            <h1>Dashboard<span>.</span></h1>
            <small>Visão geral da sua loja.</small>
          </div>
          <div className="admin-header-actions">
            <input placeholder="Buscar pedidos, produtos, clientes..." />
            <span>🔔</span>
            <span>☏</span>
            <Link href="/admin/login">Sair ↗</Link>
          </div>
          <div className="admin-black-sticker">Bora fazer acontecer ×</div>
        </header>

        <section className="street-stats-grid">
          <StatCard icon={<CreditCard size={28} />} label="Faturamento" value="R$ 124.890,90" delta="▲ 18,6% vs. período anterior" />
          <StatCard icon={<ShoppingBag size={28} />} label="Pedidos" value="320" delta="▲ 12,4% vs. período anterior" />
          <StatCard icon={<TrendingUp size={28} />} label="Conversão" value="2,48%" delta="▲ 8,7% vs. período anterior" />
          <StatCard icon={<MessageCircle size={28} />} label="Leads / WhatsApp" value={stats.leads || 218} delta="▲ 22,1% vs. período anterior" />
          <StatCard icon={<PackageCheck size={28} />} label="Ticket médio" value="R$ 390,28" delta="▲ 5,3% vs. período anterior" />
        </section>

        <section className="admin-dashboard-grid-v2">
          <article className="admin-panel large">
            <div className="panel-head"><h2>Faturamento</h2><select><option>Diário</option></select></div>
            <div className="line-chart-fake"><span className="tooltip-fake">18/05/2024<br />R$ 78.634,80</span></div>
          </article>

          <article className="admin-panel large">
            <div className="panel-head"><h2>Tráfego & Leads</h2><select><option>Diário</option></select></div>
            <div className="line-chart-fake black" />
          </article>
        </section>

        <section className="admin-dashboard-grid-v2 bottom">
          <article className="admin-panel">
            <div className="panel-head"><h2>Produtos recentes</h2><Link href="/admin#produtos">Ver todos</Link></div>
            <div className="admin-recent-products">
              {recent.map((product) => (
                <div key={product.id}>
                  <Image src={product.images[0]} alt={product.name} width={150} height={90} />
                  <strong>{product.name}</strong>
                  <span>{product.colorway}</span>
                  <b>{currencyFromCents(product.salePriceCents ?? product.priceCents)}</b>
                  <small>● Ativo</small>
                </div>
              ))}
            </div>
          </article>

          <article className="admin-panel">
            <div className="panel-head"><h2>Atividades recentes</h2><Link href="/admin/leads">Ver todas</Link></div>
            <ul className="activity-list">
              <li><MessageCircle /> <span>Novo lead via WhatsApp<br /><small>Nome: Lucas Ferreira • Produto: Air Jordan 4 Retro</small></span><time>09:42</time></li>
              <li><ShoppingBag /> <span>Novo pedido #12587<br /><small>Valor: R$ 899,90 • Cliente: Mariana Souza</small></span><time>09:15</time></li>
              <li><PackageCheck /> <span>Modelo 3D publicado<br /><small>Nike Dunk Low Retro</small></span><time>Ontem</time></li>
              <li><PackageCheck /> <span>Produto atualizado<br /><small>Adidas Samba OG</small></span><time>Ontem</time></li>
            </ul>
          </article>
        </section>

        <section className="admin-panel" id="produtos">
          <div className="panel-head"><h2>Ações rápidas</h2></div>
          <div className="quick-actions">
            <Link href="/admin/produtos/novo">Adicionar produto<span>Cadastre um novo produto</span></Link>
            <Link href="/admin/leads">Ver leads WhatsApp<span>Acesse e responda seus leads</span></Link>
            <Link href="/admin#colecoes">Gerenciar coleções<span>Organize suas coleções</span></Link>
            <Link href="/admin/produtos/novo">Visualizador 3D<span>Veja seus modelos em 3D</span></Link>
          </div>
        </section>

        <footer className="admin-dev-credit">
          <Image className="dev-hema-logo" src="/hema-street-ui-v2-assets/brand/hema-logo.svg" alt="HeMa" width={96} height={34} />
          <span />
          <small>Desenvolvido por</small>
          <Image className="dev-signature" src="/hema-street-ui-v2-assets/brand/luis-signature-white.png" alt="A Luis Development" width={42} height={42} />
        </footer>
      </main>
    </div>
  );
}
