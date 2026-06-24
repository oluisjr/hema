import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | HeMa Footwear",
  description: "Termos e condições de uso da HeMa Footwear.",
};

export default function TermosPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Legal</span>
        <h1>Termos de <span>Uso</span></h1>
        <p className="inst-lead">Última atualização: junho de 2025.</p>

        <h2>1. Aceitação</h2>
        <p>Ao acessar o catálogo da HeMa Footwear e realizar uma compra via WhatsApp, você concorda com os presentes termos de uso.</p>

        <h2>2. Serviços oferecidos</h2>
        <p>A HeMa Footwear é um catálogo virtual de sneakers com atendimento e venda realizados exclusivamente via WhatsApp. Este site tem caráter informativo e de vitrine.</p>

        <h2>3. Produtos e preços</h2>
        <p>Todos os produtos exibidos são originais e com procedência verificada. Os preços podem ser alterados sem aviso prévio. O preço válido é o confirmado no momento do pedido via WhatsApp.</p>

        <h2>4. Pagamentos</h2>
        <p>Aceitamos Pix, cartão de crédito e débito. A confirmação do pagamento é necessária antes do envio. Pedidos não pagos em 24h são cancelados automaticamente.</p>

        <h2>5. Entregas</h2>
        <p>Enviamos para todo o Brasil. O prazo começa após a confirmação do pagamento. Consulte nossa <a href="/prazo-entrega" style={{color:"var(--gold-2)"}}>política de prazos</a> completa.</p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>A HeMa Footwear não se responsabiliza por atrasos causados pelos Correios ou transportadoras, nem por informações incorretas fornecidas pelo cliente no momento do pedido.</p>

        <h2>7. Modificações</h2>
        <p>Estes termos podem ser atualizados a qualquer momento. A versão em vigor é sempre a publicada nesta página.</p>
      </main>
      <Footer />
    </div>
  );
}
