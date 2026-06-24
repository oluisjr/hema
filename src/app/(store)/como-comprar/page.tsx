import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Comprar | HeMa Footwear",
  description: "Veja como é fácil comprar na HeMa Footwear via WhatsApp.",
};

export default function ComoComprarPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Guia de compra</span>
        <h1>Como <span>Comprar</span></h1>
        <p className="inst-lead">Processo simples, rápido e 100% pelo WhatsApp.</p>

        <div className="inst-steps">
          <div className="inst-step">
            <span className="inst-step-num">01</span>
            <div>
              <h2>Escolha seu produto</h2>
              <p>Navegue pelo catálogo e encontre o sneaker que você quer. Use os filtros de marca, categoria e tamanho para facilitar.</p>
            </div>
          </div>
          <div className="inst-step">
            <span className="inst-step-num">02</span>
            <div>
              <h2>Clique em "Comprar pelo WhatsApp"</h2>
              <p>Ao clicar no botão, você será direcionado diretamente para nossa equipe no WhatsApp com o produto pré-selecionado na mensagem.</p>
            </div>
          </div>
          <div className="inst-step">
            <span className="inst-step-num">03</span>
            <div>
              <h2>Atendimento personalizado</h2>
              <p>Nossa equipe confirma disponibilidade, tamanho, cor e todas as dúvidas que você tiver. Sem robôs, atendimento humano real.</p>
            </div>
          </div>
          <div className="inst-step">
            <span className="inst-step-num">04</span>
            <div>
              <h2>Pagamento seguro</h2>
              <p>Pix com desconto especial ou parcelamento em até 12x no cartão. Você escolhe a forma mais conveniente.</p>
            </div>
          </div>
          <div className="inst-step">
            <span className="inst-step-num">05</span>
            <div>
              <h2>Envio e rastreamento</h2>
              <p>Confirmado o pagamento, seu pedido é separado e enviado. Você recebe o código de rastreamento direto no WhatsApp.</p>
            </div>
          </div>
        </div>

        <div className="inst-cta-row">
          <a href="/catalogo" className="inst-cta-btn">Ver catálogo →</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
