import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trocas e Devoluções | HeMa Footwear",
  description: "Política de trocas e devoluções da HeMa Footwear. 7 dias de garantia.",
};

export default function TrocasPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Garantia</span>
        <h1>Trocas e <span>Devoluções</span></h1>
        <p className="inst-lead">Sua satisfação é nossa prioridade. Trocas sem complicação.</p>

        <div className="inst-highlight">
          <blockquote>7 dias para solicitar troca após o recebimento.</blockquote>
        </div>

        <h2>Quando posso trocar?</h2>
        <p>Você pode solicitar troca ou devolução nas seguintes situações:</p>
        <ul className="inst-list">
          <li>Produto com defeito de fabricação</li>
          <li>Tamanho incorreto (diferente do solicitado)</li>
          <li>Produto diferente do pedido</li>
          <li>Arrependimento de compra (prazo: 7 dias corridos após recebimento)</li>
        </ul>

        <h2>Condições do produto para troca</h2>
        <ul className="inst-list">
          <li>Produto sem uso e sem marcas</li>
          <li>Na caixa original e com todos os acessórios</li>
          <li>Embalagem externa intacta</li>
        </ul>

        <h2>Como solicitar</h2>
        <p>Entre em contato pelo WhatsApp informando seu nome, número do pedido e o motivo da troca. Nossa equipe responde em até 24 horas úteis com as instruções de envio.</p>

        <h2>Frete de troca</h2>
        <p>Em casos de defeito ou erro nosso, o frete de retorno é por nossa conta. Em casos de arrependimento, o frete de retorno é por conta do cliente.</p>

        <h2>Reembolso</h2>
        <p>Devoluções aprovadas são reembolsadas em até 10 dias úteis via Pix ou estorno no cartão de crédito, conforme a forma de pagamento original.</p>

        <div className="inst-cta-row">
          <a href="/contato" className="inst-cta-btn">💬 Iniciar solicitação de troca</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
