import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | HeMa Footwear",
  description: "Conheça a HeMa Footwear — mais que tênis, é sobre estilo, conforto e atitude.",
};

export default function SobrePage() {
  return (
    <div className="street-shell">
      <StoreNav active="sobre" />
      <main className="inst-page container">
        <span className="page-eyebrow">Nossa história</span>
        <h1>Mais que tênis.<br /><span>Presença.</span></h1>
        <p className="inst-lead">
          A HeMa Footwear nasceu para transformar a compra de sneakers em uma experiência visual premium: catálogo bonito, atendimento direto e decisão rápida pelo WhatsApp.
        </p>

        <div className="inst-grid">
          <div className="inst-card">
            <span className="inst-icon">👟</span>
            <h2>Autenticidade</h2>
            <p>Trabalhamos apenas com produtos 100% originais e de procedência verificada. Cada par é conferido antes de chegar até você.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">⚡</span>
            <h2>Agilidade</h2>
            <p>Atendimento via WhatsApp com resposta rápida. Sem filas, sem burocracia — direto ao ponto, do jeito que você merece.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">🏆</span>
            <h2>Curadoria</h2>
            <p>Nosso catálogo é selecionado a dedo: só os drops mais quentes, as colabs mais desejadas e os clássicos que nunca saem de moda.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">🔒</span>
            <h2>Segurança</h2>
            <p>Parcelamento em até 12x, Pix com desconto, entrega rastreada e política de trocas transparente. Compra 100% protegida.</p>
          </div>
        </div>

        <div className="inst-highlight">
          <blockquote>
            "Estilo não é o que você veste. É como você aparece."
          </blockquote>
          <cite>— HeMa Footwear</cite>
        </div>
      </main>
      <Footer />
    </div>
  );
}
