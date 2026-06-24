import Image from "next/image";
import type { Product } from "@/lib/types";

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
          <Image src={main} alt={product.name} width={900} height={700} priority />
        </div>
      </div>
    </div>
  );
}
