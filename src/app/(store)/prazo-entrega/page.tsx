import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prazo de Entrega | HeMa Footwear",
  description: "Confira os prazos de entrega da HeMa Footwear para todo o Brasil.",
};

export default function PrazoEntregaPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Logística</span>
        <h1>Prazo de <span>Entrega</span></h1>
        <p className="inst-lead">Entregamos para todo o Brasil. Rastreamento incluso em todos os pedidos.</p>

        <div className="inst-table-wrap">
          <table className="inst-table">
            <thead>
              <tr><th>Destino</th><th>Prazo estimado</th><th>Frete</th></tr>
            </thead>
            <tbody>
              <tr><td>Capitais</td><td>2 a 4 dias úteis</td><td>A partir de R$ 18</td></tr>
              <tr><td>Interior SP / RJ</td><td>3 a 5 dias úteis</td><td>A partir de R$ 22</td></tr>
              <tr><td>Sul e Sudeste</td><td>3 a 6 dias úteis</td><td>A partir de R$ 25</td></tr>
              <tr><td>Norte e Nordeste</td><td>6 a 10 dias úteis</td><td>A partir de R$ 30</td></tr>
              <tr><td>Pedidos acima R$ 800</td><td>Conforme região</td><td>🚚 Frete grátis (capitais)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="inst-highlight">
          <blockquote>Os prazos começam a contar após a confirmação do pagamento.</blockquote>
        </div>

        <h2>Como funciona</h2>
        <p>Após a confirmação do pagamento, seu pedido é separado e postado em até 1 dia útil. Você recebe o código de rastreamento diretamente no WhatsApp assim que o pacote é postado.</p>

        <h2>Transportadoras</h2>
        <p>Utilizamos Correios (PAC e SEDEX) e transportadoras parceiras para garantir a melhor combinação de prazo e custo para a sua região.</p>

        <h2>Atrasos</h2>
        <p>Em caso de atraso além do prazo estimado, entre em contato via WhatsApp. Nossa equipe acompanha o envio e aciona a transportadora se necessário.</p>
      </main>
      <Footer />
    </div>
  );
}
