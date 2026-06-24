import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { currencyFromCents } from "@/lib/format";
import { WhatsAppLeadButton } from "@/components/store/WhatsAppLeadButton";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const image = product.images[0] || "/hema-street-ui-v2-assets/products-cutout/hero-branco-preto-dourado-cutout.png";
  const badge = product.collection || (product.featured ? "Novo" : "Drop");

  return (
    <article className={`street-product-card ${compact ? "compact" : ""}`}>
      <span className="street-badge">{badge}</span>
      <Heart className="street-heart" size={21} />

      <Link href={`/produto/${product.slug}`} className="street-product-media">
        <Image src={image} alt={product.name} width={480} height={320} />
      </Link>

      <h3><Link href={`/produto/${product.slug}`}>{product.name}</Link></h3>
      <p>{product.colorway || product.brand}</p>
      <strong className="street-price">{currencyFromCents(product.salePriceCents ?? product.priceCents)}</strong>
      <span className="installments">12x de R$ {((product.salePriceCents ?? product.priceCents) / 1200).toFixed(2).replace(".", ",")}</span>

      <div className="street-card-actions">
        <WhatsAppLeadButton productId={product.id} productName={product.name} className="whatsapp-link" label="Comprar pelo WhatsApp" />
        <Link className="outline-mini" href={`/produto/${product.slug}`}>Ver detalhes <span>→</span></Link>
      </div>
    </article>
  );
}
