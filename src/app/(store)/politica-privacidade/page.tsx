import { StoreNav } from "@/components/store/StoreNav";
import { Footer } from "@/components/store/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | HeMa Footwear",
  description: "Saiba como a HeMa Footwear coleta e protege seus dados.",
};

export default function PoliticaPage() {
  return (
    <div className="street-shell">
      <StoreNav />
      <main className="inst-page container">
        <span className="page-eyebrow">Transparência</span>
        <h1>Política de <span>Privacidade</span></h1>
        <p className="inst-lead">Última atualização: junho de 2025.</p>

        <h2>1. Informações coletadas</h2>
        <p>Coletamos apenas as informações necessárias para processar seu pedido: nome, telefone (via WhatsApp), endereço de entrega e dados de pagamento. Não armazenamos dados de cartão de crédito.</p>

        <h2>2. Uso das informações</h2>
        <p>Suas informações são usadas exclusivamente para processar pedidos, realizar entregas e melhorar a experiência de compra. Não compartilhamos seus dados com terceiros para fins de marketing.</p>

        <h2>3. WhatsApp e comunicação</h2>
        <p>Ao entrar em contato pelo WhatsApp, você concorda em receber mensagens relacionadas ao seu pedido. Não enviamos spam nem mensagens não solicitadas.</p>

        <h2>4. Cookies</h2>
        <p>Este site utiliza cookies essenciais para funcionamento. Não utilizamos cookies de rastreamento de terceiros para publicidade.</p>

        <h2>5. Seus direitos</h2>
        <p>Você pode solicitar a exclusão de seus dados a qualquer momento entrando em contato via WhatsApp ou pelo e-mail indicado na página de contato. Respondemos em até 72 horas.</p>

        <h2>6. Segurança</h2>
        <p>Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.</p>

        <h2>7. Contato</h2>
        <p>Dúvidas sobre privacidade? Fale conosco em <a href="/contato" style={{color:"var(--gold-2)"}}>nossa página de contato</a>.</p>
      </main>
      <Footer />
    </div>
  );
}
