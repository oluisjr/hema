import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale Conosco | HeMa Footwear",
  description: "Entre em contato com a HeMa Footwear pelo WhatsApp ou e-mail.",
};

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511987654321";

export default function ContatoPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Atendimento</span>
        <h1>Fale <span>Conosco</span></h1>
        <p className="inst-lead">
          Atendimento humano, rápido e personalizado. Sem robôs, sem scripts — só a equipe HeMa.
        </p>

        <div className="contato-grid">
          {/* WhatsApp CTA — destaque */}
          <div className="contato-card destaque">
            <span className="inst-icon">💬</span>
            <h2>WhatsApp</h2>
            <p>
              Canal principal de atendimento. Resposta em até 30 minutos durante o horário comercial.
            </p>
            <p className="contato-horario">Seg–Sex: 09h às 18h · Sáb: 10h às 14h</p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Olá!%20Vim%20pelo%20catálogo%20HeMa%20Footwear%20e%20gostaria%20de%20mais%20informações.`}
              target="_blank"
              rel="noreferrer"
              className="inst-cta-btn whatsapp-btn"
            >
              Abrir WhatsApp →
            </a>
          </div>

          {/* Informações adicionais */}
          <div className="contato-info-col">
            <div className="contato-card">
              <span className="inst-icon">📍</span>
              <h2>Localização</h2>
              <p>Operamos 100% online, atendendo todo o Brasil. Sem loja física no momento.</p>
            </div>

            <div className="contato-card">
              <span className="inst-icon">⏱️</span>
              <h2>Tempo de resposta</h2>
              <p>Via WhatsApp: até 30 min em horário comercial.<br />Fins de semana: até 4 horas.</p>
            </div>

            <div className="contato-card">
              <span className="inst-icon">🔧</span>
              <h2>Suporte pós-venda</h2>
              <p>Dúvidas sobre pedido, rastreamento ou troca? Fale direto pelo mesmo WhatsApp.</p>
            </div>
          </div>
        </div>

        <div className="inst-highlight" style={{marginTop: 48}}>
          <blockquote>
            Prefere ver primeiro? Acesse o <a href="/catalogo" style={{color:"var(--gold-2)"}}>catálogo</a> e depois fale com a gente.
          </blockquote>
        </div>
      </main>
      <Footer />
    </div>
  );
}
