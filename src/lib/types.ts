export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  collection?: string | null;
  colorway?: string | null;
  priceCents: number;
  salePriceCents?: number | null;
  descriptionShort?: string | null;
  descriptionLong?: string | null;
  details: string[];
  sizes: string[];
  colors: string[];
  tags: string[];
  images: string[];
  model3dUrl?: string | null;
  has3d: boolean;
  featured: boolean;
  active: boolean;
  stock: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Lead = {
  id: string;
  productId?: string | null;
  productName?: string | null;
  productImage?: string | null;
  customerName?: string | null;
  customerPhone?: string | null;
  source: string;
  status: string;
  message?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt?: string;
};

export type ProductInput = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  collection?: string;
  colorway?: string;
  priceCents: number;
  salePriceCents?: number | null;
  descriptionShort?: string;
  descriptionLong?: string;
  details: string[];
  sizes: string[];
  colors: string[];
  tags: string[];
  images: string[];
  model3dUrl?: string;
  has3d: boolean;
  featured: boolean;
  active: boolean;
  stock: number;
  status: string;
};

export type StoreStats = {
  totalProducts: number;
  productsWith3d: number;
  activeFeatured: number;
  leads: number;
};
