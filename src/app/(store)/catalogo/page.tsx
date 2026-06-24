import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { StoreNav } from "@/components/store/StoreNav";
import { ProductCard } from "@/components/store/ProductCard";
import { Footer } from "@/components/store/Footer";
import { getProducts } from "@/lib/db";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ q?: string; marca?: string; categoria?: string }>;
};

export default async function CatalogPage({ searchParams }: Props) {
  const params = await searchParams;
  const products = await getProducts({ activeOnly: true, query: params.q, brand: params.marca });

  return (
    <div className="street-shell">
      <StoreNav active="catalogo" />

      <main>
        <section className="catalog-stage container">
          <div className="catalog-copy">
            <div className="brush-label">Catálogo</div>
            <h1>Os pares<br />mais quentes<span>.</span></h1>
            <p>Selecionamos os sneakers mais desejados do momento. Escolha seu próximo par e eleve seu estilo.</p>
          </div>

          <div className="catalog-art">
            <div className="black-splash" />
            <div className="city-silhouette" />
            <Image src="/hema-street-ui-v2-assets/products-cutout/dunk-preto-branco-dourado-cutout.png" alt="Sneaker destaque" width={680} height={410} />
            <div className="crown-mark" />
            <div className="graffiti-logo">HeMa<br />Footwear</div>
          </div>

          <aside className="social-rail">
            <span>Siga nosso estilo</span>
            <b>◎</b><b>♪</b><b>◔</b>
          </aside>
        </section>

        <section className="container catalog-controls">
          <form className="catalog-search">
            <Search size={22} />
            <input name="q" defaultValue={params.q || ""} placeholder="Buscar modelo, marca ou referência..." />
            <button type="submit"><Search size={20} /></button>
          </form>
          <select name="marca" defaultValue={params.marca || ""}><option value="">Marca - Todas</option><option>Nike</option><option>Jordan</option><option>Adidas</option><option>Puma</option></select>
          <select name="categoria" defaultValue={params.categoria || ""}><option value="">Categoria - Todas</option><option>Masculino</option><option>Feminino</option><option>Streetwear</option></select>
          <select><option>Tamanho - Todos</option><option>39</option><option>40</option><option>41</option><option>42</option></select>
          <select><option>Preço - Todos</option><option>Até R$ 700</option><option>R$ 700 a R$ 1000</option></select>
          <select><option>Ordenar por - Mais vendidos</option><option>Menor preço</option><option>Maior preço</option></select>
          <Link className="clear-filters" href="/catalogo"><X size={16} /> Limpar filtros</Link>
        </section>

        <section className="container">
          <p className="result-count">{products.length} produtos encontrados</p>
          <div className="catalog-grid">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        <section className="container immersive-banner">
          <div>
            <span>Experiência imersiva</span>
            <h2>Veja. Gire. Sinta.</h2>
            <p>Veja cada detalhe como se estivesse com eles nas mãos.</p>
          </div>
          <Image src="/hema-street-ui-v2-assets/studio/asset-360-vitrine-tenis.png" alt="Visualização 3D" width={320} height={180} />
          <Link href="/catalogo" className="gold-cta"><SlidersHorizontal size={18} /> Explorar em 3D</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
