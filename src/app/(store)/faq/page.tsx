import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | HeMa Footwear",
  description: "Tire suas dúvidas sobre compras, entrega e atendimento da HeMa Footwear.",
};

export default function FaqPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="container inst-page">
        <span className="page-eyebrow">Suporte</span>
        <h1>Perguntas <span>Frequentes</span></h1>
        <p>As dúvidas mais comuns dos nossos clientes — respondidas com sinceridade.</p>

        <details className="faq-item">
          <summary>Os produtos são originais?</summary>
          <p>100% sim. Trabalhamos exclusivamente com produtos originais e de procedência verificada. Cada par passa por conferência antes de ser enviado.</p>
        </details>

        <details className="faq-item">
          <summary>Como faço meu pedido?</summary>
          <p>Simples: escolha o produto no catálogo, clique em "Comprar pelo WhatsApp" e nossa equipe fará o atendimento completo diretamente pelo chat. Rápido, seguro e personalizado.</p>
        </details>

        <details className="faq-item">
          <summary>Quais formas de pagamento aceitas?</summary>
          <p>Aceitamos Pix (com desconto especial), cartões de crédito (Visa, Mastercard, Amex, Elo) parcelados em até 12x, e cartão de débito.</p>
        </details>

        <details className="faq-item">
          <summary>Quanto tempo leva para entregar?</summary>
          <p>Após confirmação do pagamento: capitais em 2–4 dias úteis, interior em 5–8 dias úteis. Enviamos o código de rastreamento assim que o pedido é postado.</p>
        </details>

        <details className="faq-item">
          <summary>Entregam para todo Brasil?</summary>
          <p>Sim! Entregamos via Correios e transportadoras parceiras para todo o território nacional.</p>
        </details>

        <details className="faq-item">
          <summary>Posso trocar o tamanho?</summary>
          <p>Claro! Você tem 7 dias corridos após o recebimento para solicitar troca de tamanho, desde que o produto esteja sem uso e na caixa original. Veja nossa <a href="/trocas" style={{color:"var(--gold-2)"}}>política de trocas</a> completa.</p>
        </details>

        <details className="faq-item">
          <summary>Os preços incluem frete?</summary>
          <p>Os preços exibidos no catálogo são do produto. O frete é calculado no momento do pedido via WhatsApp conforme seu CEP. Pedidos acima de R$800 têm frete grátis para capitais.</p>
        </details>

        <details className="faq-item">
          <summary>Vocês têm loja física?</summary>
          <p>No momento operamos 100% online com atendimento via WhatsApp. Isso nos permite oferecer preços melhores e atendimento personalizado!</p>
        </details>
      </main>
      <Footer />
    </div>
  );
}
