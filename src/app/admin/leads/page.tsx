import Image from "next/image";
import { Calendar, CheckCircle, Download, MessageCircle, TrendingUp, Clock } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { StatCard } from "@/components/admin/StatCard";
import { getLeads } from "@/lib/db";
import { formatDateTime } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getLeads();
  const firstLead = leads[0];

  return (
    <div className="admin-shell">
      <AdminSidebar active="leads" />

      <main className="admin-main">
        <AdminTopbar />

        <div className="admin-title">
          <h1>Leads e atendimentos</h1>
          <p>Acompanhe cliques e conversas iniciadas pelo WhatsApp.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, margin: "22px 0", flexWrap: "wrap" }}>
          <button className="ghost-btn"><Calendar size={18} /> Hoje</button>
          <button className="gold-btn"><Download size={18} /> Exportar</button>
        </div>

        <section className="stats-grid">
          <StatCard icon={<MessageCircle size={28} />} label="Leads registrados" value={leads.length} delta="↑ 24% vs ontem" />
          <StatCard icon={<TrendingUp size={28} />} label="Taxa estimada" value="35,4%" delta="↑ 8% vs ontem" />
          <StatCard icon={<Clock size={28} />} label="Aguardando resposta" value={leads.filter((l) => l.status !== "closed").length} />
          <StatCard icon={<CheckCircle size={28} />} label="Atendimentos fechados" value={leads.filter((l) => l.status === "closed").length} />
        </section>

        <section className="admin-dashboard-grid">
          <div className="table-card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Produto desejado</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>
                      <div className="product-cell">
                        {lead.productImage ? <Image src={lead.productImage} alt="" width={64} height={48} /> : null}
                        <div>
                          <strong>{lead.productName || "Catálogo geral"}</strong>
                          <br />
                          <small style={{ color: "var(--muted)" }}>{lead.customerName || "Visitante"}</small>
                        </div>
                      </div>
                    </td>
                    <td>{formatDateTime(lead.createdAt)}</td>
                    <td><span className={`status-pill ${lead.status}`}>{lead.status === "new" ? "Novo" : lead.status}</span></td>
                    <td><a className="ghost-btn" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521999999999"}`} target="_blank" rel="noreferrer">Abrir</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="admin-card">
            <h2>Último lead</h2>
            {firstLead ? (
              <>
                <div className="product-cell" style={{ margin: "18px 0" }}>
                  {firstLead.productImage ? <Image src={firstLead.productImage} alt="" width={88} height={70} /> : null}
                  <div>
                    <strong>{firstLead.productName || "Catálogo geral"}</strong>
                    <p style={{ color: "var(--muted)", margin: 0 }}>{formatDateTime(firstLead.createdAt)}</p>
                  </div>
                </div>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{firstLead.message || "Lead registrado ao clicar no WhatsApp."}</p>
                <a className="whatsapp-btn" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521999999999"}`} target="_blank" rel="noreferrer" style={{ width: "100%" }}>
                  <MessageCircle size={18} /> Abrir no WhatsApp
                </a>
              </>
            ) : (
              <p style={{ color: "var(--muted)" }}>Nenhum lead registrado ainda.</p>
            )}
          </aside>
        </section>
      </main>
    </div>
  );
}
