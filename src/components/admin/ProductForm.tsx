import Image from "next/image";
import { Box, Eye, ImagePlus, Save, Send } from "lucide-react";
import type { Product } from "@/lib/types";
import { brandOptions, categoryOptions, productAssetOptions } from "@/data/assets";
import { createProductAction, updateProductAction } from "@/app/actions/products";
import { currencyFromCents } from "@/lib/format";

function valueOrEmpty(value: unknown) {
  return typeof value === "string" ? value : "";
}

function priceValue(cents?: number | null) {
  if (!cents) return "";
  return (cents / 100).toFixed(2).replace(".", ",");
}

export function ProductForm({ product }: { product?: Product | null }) {
  const action = product ? updateProductAction.bind(null, product.id) : createProductAction;
  const selectedImages = product?.images?.join("\n") || productAssetOptions.slice(0, 3).join("\n");
  const previewImage = product?.images?.[0] || productAssetOptions[0];
  const name = valueOrEmpty(product?.name) || "Air Jordan 1 Low Metallic Gold";
  const price = product ? currencyFromCents(product.salePriceCents ?? product.priceCents) : "R$ 799,90";

  return (
    <form action={action} className="street-product-form">
      <section className="form-board basics">
        <h2><Box size={20} /> Informações básicas</h2>
        <div className="form-grid-v2">
          <label>Nome do Produto <input name="name" defaultValue={name} required /></label>
          <label>Marca
            <select name="brand" defaultValue={valueOrEmpty(product?.brand) || "Nike"}>
              {brandOptions.map((brand) => <option key={brand}>{brand}</option>)}
            </select>
          </label>
          <label>Categoria
            <select name="category" defaultValue={valueOrEmpty(product?.category) || "Tênis"}>
              {categoryOptions.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <label>Slug (URL) <input name="slug" defaultValue={valueOrEmpty(product?.slug) || "air-jordan-1-low-metallic-gold"} /></label>
          <label>Preço Regular (R$) <input name="price" defaultValue={priceValue(product?.priceCents) || "899,90"} required /></label>
          <label>Preço Promocional (R$) <input name="salePrice" defaultValue={priceValue(product?.salePriceCents) || "799,90"} /></label>
          <label>Estoque <input name="stock" type="number" defaultValue={product?.stock ?? 25} /></label>
          <label>SKU <input defaultValue="AJ1-LOW-METGOLD" /></label>
        </div>

        <div className="pill-editor">
          <strong>Tamanhos disponíveis</strong>
          {["37","38","39","40","41","42","43","44","45","46"].map((size) => <span key={size} className={["40","41","42"].includes(size) ? "active" : ""}>{size}</span>)}
        </div>
        <input type="hidden" name="sizes" defaultValue={(product?.sizes || ["37","38","39","40","41","42","43","44"]).join(",")} />

        <div className="color-editor">
          <strong>Cores disponíveis</strong>
          {["#111", "#fff", "#d49a32", "#9ca3af"].map((color) => <span key={color} style={{ background: color }} />)}
        </div>
        <input type="hidden" name="colors" defaultValue={(product?.colors || ["Black", "White", "Gold"]).join(",")} />

        <label className="full-field">Tags <input name="tags" defaultValue={(product?.tags || ["jordan", "low", "metallic", "gold", "streetwear"]).join(", ")} /></label>
        <label className="full-field">Descrição curta <textarea name="descriptionShort" defaultValue={valueOrEmpty(product?.descriptionShort) || "Ícone da cultura sneakers. Design atemporal com acabamento Metallic Gold que destaca qualquer look."} /></label>
        <label className="full-field rich">Descrição completa <textarea name="descriptionLong" defaultValue={valueOrEmpty(product?.descriptionLong) || "O Air Jordan 1 Low Metallic Gold traz o DNA lendário da linha Jordan com um visual premium e sofisticado. Seu cabedal em couro legítimo oferece durabilidade e conforto, enquanto os detalhes em dourado metálico elevam o estilo a outro nível."} /></label>
        <input type="hidden" name="details" defaultValue={(product?.details || ["Couro premium", "Solado de borracha", "Design streetwear", "Acabamento metálico"]).join("\n")} />
      </section>

      <section className="form-board media">
        <h2><ImagePlus size={20} /> Galeria de imagens</h2>
        <label className="upload-box">
          <span>↥</span>
          Clique ou arraste imagens para enviar
          <small>Formatos: JPG, PNG, WEBP</small>
        </label>
        <div className="image-grid-admin">
          {productAssetOptions.slice(0, 6).map((asset, index) => (
            <button type="button" key={asset} className={index === 0 ? "active" : ""}>
              <Image src={asset} alt="" width={130} height={90} />
            </button>
          ))}
        </div>
        <label className="full-field">Paths das imagens
          <textarea name="images" defaultValue={selectedImages} />
        </label>

        <h2><Box size={20} /> Modelo 3D / Visualização</h2>
        <div className="model-upload">
          <span>⬡</span>
          <p>Clique para enviar ou arraste o arquivo 3D aqui<br /><small>Formatos aceitos: .glb, .gltf, .usdz</small></p>
        </div>
        <input name="model3dUrl" defaultValue={valueOrEmpty(product?.model3dUrl) || "/assets/3d/air-jordan-1-low.glb"} />
        <input type="hidden" name="collection" defaultValue={valueOrEmpty(product?.collection) || "Novo"} />
        <input type="hidden" name="colorway" defaultValue={valueOrEmpty(product?.colorway) || "Metallic Gold"} />
        <input type="hidden" name="has3d" value="on" />
        <input type="hidden" name="featured" value="on" />
        <input type="hidden" name="active" value="on" />
        <input type="hidden" name="status" value="published" />
      </section>

      <aside className="form-board live-preview">
        <h2><Eye size={20} /> Pré-visualização ao vivo</h2>
        <div className="preview-tabs"><strong>Card do catálogo</strong><span>Página do produto</span></div>
        <div className="preview-card-v2">
          <span className="street-badge">Novo</span>
          <Image src={previewImage} alt="" width={360} height={220} />
          <h3>{name}</h3>
          <p>Metallic Gold</p>
          <b>{price}</b>
          <small>12x de R$ 66,66</small>
          <button type="button">🛒</button>
        </div>

        <div className="preview-product-mini">
          <Image src={previewImage} alt="" width={240} height={150} />
          <div>
            <h3>{name}</h3>
            <span>★★★★★ (128 avaliações)</span>
            <b>{price}</b>
          </div>
        </div>
      </aside>

      <div className="form-submit-bar">
        <button type="button" className="ghost-admin"><Save size={20} /> Salvar rascunho</button>
        <button type="button" className="ghost-admin"><Eye size={20} /> Visualizar</button>
        <button type="submit" className="publish-admin"><Send size={20} /> Publicar produto</button>
      </div>
    </form>
  );
}
