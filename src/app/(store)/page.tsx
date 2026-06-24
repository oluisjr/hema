import Image from "next/image";
import Link from "next/link";
import { CreditCard, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { StoreNav } from "@/components/store/StoreNav";
import { ProductCard } from "@/components/store/ProductCard";
import { Footer } from "@/components/store/Footer";
import { WhatsAppLeadButton } from "@/components/store/WhatsAppLeadButton";
import { ProductModelViewer } from "@/components/store/ProductModelViewer";
import { getProducts } from "@/lib/db";
import { currencyFromCents } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = (await getProducts({ activeOnly: true, featuredOnly: true })).slice(0, 5);
  const hero = products[1] || products[0];
  const heroImage = "/hema-street-ui-v2-assets/products-cutout/dunk-preto-branco-dourado-cutout.png";

  return (
    <div className="street-shell">
      <StoreNav active="inicio" />

      <main>
        <section className="street-hero container">
          <div className="hero-copy">
            <div className="brush-label">ESTILO • CONFORTO • ATITUDE</div>
            <h1>Os pares mais quentes<span>.</span></h1>
            <p>Selecionamos os sneakers mais desejados do momento. Escolha seu próximo par e eleve seu estilo.</p>

            <div className="hero-buttons">
              {hero ? <WhatsAppLeadButton productId={hero.id} productName={hero.name} className="hero-whatsapp" label="Compre pelo WhatsApp" /> : null}
              <Link href="/catalogo" className="hero-outline">Ver lançamentos ↗</Link>
            </div>

            <div className="benefit-strip">
              <span><ShieldCheck size={22} /> Produtos 100% originais</span>
              <span><CreditCard size={22} /> Parcelamento em até 12x</span>
              <span><Truck size={22} /> Entrega rápida para todo Brasil</span>
              <span><RefreshCw size={22} /> Troca fácil e garantida</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="black-splash" />
            <div className="city-silhouette" />
            <Image className="hero-sneaker" src={heroImage} alt={hero?.name || "Sneaker HeMa"} width={760} height={460} priority />
            <div className="crown-mark" />
            <div className="graffiti-logo">HeMa<br />Footwear</div>
            <div className="price-tag">
              <small>{hero?.name || "Nike Dunk Low Retro"}</small>
              <strong>{hero ? currencyFromCents(hero.salePriceCents ?? hero.priceCents) : "R$ 699,90"}</strong>
            </div>
          </div>

          <aside className="social-rail">
            <span>Siga nosso estilo</span>
            <b>◎</b><b>♪</b><b>◔</b>
          </aside>
        </section>

        <section className="container weekly-section">
          <div className="weekly-title">
            <span>Seleção premium</span>
            <h2>Destaques<br />da semana</h2>
            <div className="week-arrows"><button>←</button><button>→</button></div>
          </div>

          <div className="weekly-products">
            {products.map((product) => <ProductCard key={product.id} product={product} compact />)}
          </div>
        </section>

        <section className="container immersive-banner">
          <div>
            <span>Experiência imersiva</span>
            <h2>Veja. Gire. Sinta.</h2>
            <p>Explore nossos sneakers em 360° e descubra cada detalhe como se estivesse com eles nas mãos.</p>
          </div>
          <div style={{ width: "100%", maxWidth: 400, height: 300, position: "relative", margin: "0 auto" }}>
            <ProductModelViewer 
              src="https://modelviewer.dev/shared-assets/models/Shoe.glb" 
              poster="/hema-street-ui-v2-assets/studio/asset-360-vitrine-tenis.png" 
              alt="Visualização 3D Sneaker" 
            />
          </div>
          <Link href="/catalogo" className="gold-cta">Explorar em 3D ⬡</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
