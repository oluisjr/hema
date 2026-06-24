import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, ShieldCheck, Star, Truck, RotateCw, PackageCheck } from "lucide-react";
import { StoreNav } from "@/components/store/StoreNav";
import { WhatsAppLeadButton } from "@/components/store/WhatsAppLeadButton";
import { Footer } from "@/components/store/Footer";
import { ProductCard } from "@/components/store/ProductCard";
import { getProductBySlug, getProducts } from "@/lib/db";
import { currencyFromCents } from "@/lib/format";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || !product.active) notFound();
  const related = (await getProducts({ activeOnly: true })).filter((item) => item.id !== product.id).slice(0, 4);
  const images = product.images.length ? product.images : ["/hema-street-ui-v2-assets/products-cutout/hero-branco-preto-dourado-cutout.png"];

  return (
    <div className="street-shell">
      <StoreNav active="catalogo" />

      <main className="container street-product-page">
        <div className="breadcrumbs">Início <span>›</span> Tênis <span>›</span> {product.name}</div>

        <section className="product-hero-layout">
          <aside className="thumb-rail">
            {images.concat(images).slice(0, 5).map((image, index) => (
              <button key={`${image}-${index}`} className={index === 0 ? "active" : ""}>
                <Image src={image} alt="" width={90} height={70} />
              </button>
            ))}
          </aside>

          <div className="product-art-panel">
            <button className="gallery-arrow left"><ChevronLeft size={18} /></button>
            <button className="gallery-arrow right"><ChevronRight size={18} /></button>
            <span className="street-badge">Novo</span>
            <div className="black-splash" />
            <div className="city-silhouette" />
            <div className="crown-mark" />
            <Image src={images[0]} alt={product.name} width={820} height={520} priority />
            <div className="brush-sticker">Estilo que impacta.</div>
          </div>

          <aside className="product-buy-panel">
            <span className="mini-brand">{product.brand}</span>
            <h1>{product.name.replace("Air Jordan 4 Retro", "Air Jordan 4\nRetro")}</h1>
            <div className="rating-line">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)} <span>4,9 (128 avaliações)</span></div>

            <label>Cor: <strong>{product.colorway}</strong></label>
            <div className="color-options">
              {images.slice(0, 4).map((image, index) => <button key={image} className={index === 0 ? "active" : ""}><Image src={image} alt="" width={72} height={48} /></button>)}
            </div>

            <div className="product-price">{currencyFromCents(product.salePriceCents ?? product.priceCents)}</div>
            <small>ou 12x de R$ {((product.salePriceCents ?? product.priceCents) / 1200).toFixed(2).replace(".", ",")} sem juros</small>
            <p>{product.descriptionShort}</p>

            <label>Tamanho:</label>
            <div className="size-pills">{product.sizes.map((size) => <button key={size} className={size === "41" ? "active" : ""}>{size}</button>)}</div>
            <div className="stock-line">● Disponibilidade: <strong>Em estoque</strong></div>

            <WhatsAppLeadButton productId={product.id} productName={product.name} className="buy-whatsapp" label="Pedir no WhatsApp" />
            <div className="safe-line">🔒 Atendimento rápido e seguro</div>
          </aside>
        </section>

        <section className="product-360-panel">
          <div>
            <span><RotateCw size={18} /> Veja em <b>360°</b></span>
            <p>Explore todos os ângulos do seu próximo par.</p>
          </div>
          <Image src="/hema-street-ui-v2-assets/studio/asset-360-vitrine-tenis.png" alt="Visualização em 360 graus" width={420} height={190} />
        </section>

        <section className="detail-benefits">
          <article><Truck size={34} /><div><h3>Frete grátis</h3><p>Para todo o Brasil em compras acima de R$ 499,90</p></div></article>
          <article><ShieldCheck size={34} /><div><h3>Produto 100% original</h3><p>Trabalhamos apenas com produtos originais e autenticados.</p></div></article>
          <article><RotateCw size={34} /><div><h3>Troca fácil</h3><p>Troca garantida em até 7 dias após o recebimento.</p></div></article>
          <article><PackageCheck size={34} /><div><h3>Garantia HeMa</h3><p>Atendimento seguro do início ao fim.</p></div></article>
        </section>

        <section className="related-section">
          <div className="section-title-row">
            <h2>Você também pode curtir</h2>
            <Link href="/catalogo">Ver todos ↗</Link>
          </div>
          <div className="related-grid">
            {related.map((item) => <ProductCard key={item.id} product={item} compact />)}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
