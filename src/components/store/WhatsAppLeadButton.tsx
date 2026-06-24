"use client";

import { MessageCircle } from "lucide-react";

type Props = {
  productId?: string;
  productName?: string;
  className?: string;
  label?: string;
};

export function WhatsAppLeadButton({ productId, productName, className = "whatsapp-btn", label = "Falar no WhatsApp" }: Props) {
  async function handleClick() {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521999999999";
    const message = productName
      ? `Olá! Tenho interesse no ${productName}. Pode me passar disponibilidade, tamanhos e formas de pagamento?`
      : "Olá! Quero conhecer os tênis disponíveis na HeMa Footwear.";

    try {
      await fetch("/api/whatsapp-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, message })
      });
    } catch {
      // Não bloqueia o cliente caso o banco esteja indisponível.
    }

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <button className={className} onClick={handleClick} type="button">
      <MessageCircle size={18} />
      {label}
    </button>
  );
}
