"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Menu, X, Home, PackageSearch, User, Shirt, Package, Info } from "lucide-react";
import { studioAssets } from "@/data/assets";

type Active = "inicio" | "catalogo" | "marcas" | "sobre";

const links = [
  { href: "/", label: "Início", id: "inicio" as Active, Icon: Home },
  { href: "/catalogo", label: "Lançamentos", id: "catalogo" as Active, Icon: PackageSearch },
  { href: "/catalogo?categoria=Masculino", label: "Masculino", Icon: User },
  { href: "/catalogo?categoria=Feminino", label: "Feminino", Icon: Shirt },
  { href: "/catalogo?categoria=Acessórios", label: "Acessórios", Icon: Package },
  { href: "/sobre", label: "Sobre nós", id: "sobre" as Active, Icon: Info },
];

export function StoreNav({ active }: { active?: Active }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="store-nav">
        {/* Logo zone — angular cut separator handled by CSS */}
        <div className="store-logo-zone">
          <Link href="/" className="store-logo" aria-label="HeMa Footwear">
            <Image
              src={studioAssets.logoAlpha}
              alt="HeMa Footwear"
              width={160}
              height={58}
              priority
            />
          </Link>
        </div>

        {/* Desktop menu — perfectly centered via flex:1 on parent */}
        <nav className="store-menu" aria-label="Navegação principal">
          {links.map(({ href, label, id }) => (
            <Link key={href} href={href} className={active === id ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop bag */}
        <div className="store-actions">
          <span className="bag-wrap">
            <ShoppingBag size={22} />
            <small>0</small>
          </span>
        </div>

        {/* Mobile hamburger — visible only on small screens */}
        <button
          className="mobile-menu-btn"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`mobile-drawer${open ? " open" : ""}`}>
        <div className="mobile-drawer-header">
          <Image src={studioAssets.logoAlpha} alt="HeMa" width={110} height={40} />
          <button className="mobile-drawer-close" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X size={26} />
          </button>
        </div>
        <nav>
          {links.map(({ href, label, id, Icon }) => (
            <Link
              key={href}
              href={href}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer-footer">
          <Link href="/contato" className="drawer-whatsapp-cta" onClick={() => setOpen(false)}>
            💬 Fale pelo WhatsApp
          </Link>
        </div>
      </aside>
    </>
  );
}
