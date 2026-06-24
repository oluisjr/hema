import Image from "next/image";
import { RotateCcw, Search, Maximize2 } from "lucide-react";
import type { Product } from "@/lib/types";
import { ProductModelViewer } from "@/components/store/ProductModelViewer";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images.length ? product.images : ["/hema-street-ui-v2-assets/products-cutout/hero-branco-preto-dourado-cutout.png"];
  const main = images[0];

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images.map((image) => (
          <div className="thumb" key={image}>
            <Image src={image} alt={product.name} width={120} height={90} />
          </div>
        ))}
      </div>

      <div>
        <div className="main-product-visual">
          {product.model3dUrl ? (
            <ProductModelViewer src={product.model3dUrl} poster={main} alt={product.name} />
          ) : (
            <Image src={main} alt={product.name} width={900} height={700} priority />
          )}
        </div>

        <div className="filter-pills" style={{ justifyContent: "center", marginTop: 16 }}>
          <span className="ghost-btn"><RotateCcw size={16} /> Girar</span>
          <span className="ghost-btn"><Search size={16} /> Zoom</span>
          <span className="ghost-btn"><Maximize2 size={16} /> Tela cheia</span>
        </div>
      </div>
    </div>
  );
}
