import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formas de Pagamento | HeMa Footwear",
  description: "Veja todas as formas de pagamento aceitas pela HeMa Footwear.",
};

export default function FormasPagamentoPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Pagamento</span>
        <h1>Formas de <span>Pagamento</span></h1>
        <p className="inst-lead">Opções flexíveis para você comprar do seu jeito.</p>

        <div className="inst-grid">
          <div className="inst-card">
            <span className="inst-icon">⚡</span>
            <h2>Pix</h2>
            <p>Aprovação instantânea. Desconto especial de 5% para pagamentos via Pix. Chave Pix informada no momento do pedido via WhatsApp.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">💳</span>
            <h2>Cartão de Crédito</h2>
            <p>Parcelamento em até 12x sem juros no cartão. Aceitamos Visa, Mastercard, American Express e Elo.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">🏦</span>
            <h2>Cartão de Débito</h2>
            <p>Pagamento à vista no débito. Aceitamos as principais bandeiras: Visa, Mastercard e Elo.</p>
          </div>
          <div className="inst-card">
            <span className="inst-icon">🔒</span>
            <h2>Segurança</h2>
            <p>Todas as transações são 100% seguras. Não armazenamos dados de cartão. Compra protegida e dados criptografados.</p>
          </div>
        </div>

        <h2>Parcelamento disponível</h2>
        <div className="inst-table-wrap">
          <table className="inst-table">
            <thead>
              <tr><th>Parcelas</th><th>Taxa</th><th>Acréscimo</th></tr>
            </thead>
            <tbody>
              <tr><td>1x (à vista)</td><td>0%</td><td>Sem acréscimo</td></tr>
              <tr><td>2x a 6x</td><td>0%</td><td>Sem acréscimo</td></tr>
              <tr><td>7x a 12x</td><td>0%</td><td>Sem acréscimo</td></tr>
            </tbody>
          </table>
        </div>

        <p style={{fontSize: 13, color: "rgba(255,255,255,.45)", marginTop: 12}}>
          * Parcelamento disponível via link de pagamento enviado pelo WhatsApp.
        </p>
      </main>
      <Footer />
    </div>
  );
}
