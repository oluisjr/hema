import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Music2 } from "lucide-react";
import { studioAssets } from "@/data/assets";

export function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521999999999";

  return (
    <footer className="street-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Image src={studioAssets.logoAlpha} alt="HeMa Footwear" width={160} height={56} />
          <p>Mais que sneakers.<br />É sobre estilo, é sobre você.</p>
          <div className="social-row">
            <Instagram size={18} />
            <Music2 size={18} />
            <MessageCircle size={18} />
          </div>
        </div>

        <div>
          <h4>Institucional</h4>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="/politica-privacidade">Política de Privacidade</Link>
          <Link href="/termos">Termos de Uso</Link>
          <Link href="/trocas">Trocas e Devoluções</Link>
        </div>

        <div>
          <h4>Ajuda</h4>
          <Link href="/faq">Perguntas Frequentes</Link>
          <Link href="/como-comprar">Como Comprar</Link>
          <Link href="/formas-pagamento">Formas de Pagamento</Link>
          <Link href="/prazo-entrega">Prazo de Entrega</Link>
        </div>

        <div>
          <h4>Atendimento</h4>
          <Link href="/contato">Fale Conosco</Link>
          <span>(11) 98765-4321</span>
          <span>Seg à Sex: 09h às 18h</span>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
            Atendimento via WhatsApp
          </a>
        </div>

        <div>
          <h4>Formas de pagamento</h4>
          <div className="payment-grid">
            <span>pix</span><span>visa</span><span>master</span>
            <span>amex</span><span>elo</span>
          </div>
          <div className="secure-box">
            Compra 100% segura<br />
            <small>Seus dados protegidos</small>
          </div>
        </div>
      </div>

      {/* Developer credit — single alpha image */}
      <div className="developer-credit" aria-label="Crédito de desenvolvimento">
        <Image
          className="footer-credit-full"
          src={studioAssets.assinaturaAlpha}
          alt="HeMa Footwear | Desenvolvido por Luis Development"
          width={480}
          height={90}
        />
      </div>
    </footer>
  );
}
