import Image from "next/image";
import { Lock } from "lucide-react";
import { loginAction } from "@/app/actions/auth";
import { studioAssets } from "@/data/assets";

type Props = {
  searchParams: Promise<{ erro?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <main className="login-page">
      <section className="login-card">
        <Image src={studioAssets.logo} alt="HeMa Footwear" width={180} height={63} priority />
        <span className="eyebrow"><Lock size={14} /> Área administrativa</span>
        <h1>Painel HeMa</h1>
        <p>Entre para gerenciar produtos, preços, modelos 3D e leads recebidos via WhatsApp.</p>

        {params.erro ? (
          <div style={{ border: "1px solid rgba(218,91,71,.28)", background: "rgba(218,91,71,.08)", padding: 12, borderRadius: 14, color: "var(--red)", marginBottom: 14, fontWeight: 800 }}>
            E-mail ou senha inválidos.
          </div>
        ) : null}

        <form action={loginAction}>
          <div className="field">
            <label>E-mail</label>
            <input name="email" type="email" placeholder="admin@hema.com.br" required />
          </div>
          <div className="field">
            <label>Senha</label>
            <input name="password" type="password" placeholder="••••••••" required />
          </div>
          <button className="gold-btn" type="submit" style={{ width: "100%", marginTop: 8 }}>Entrar no painel</button>
        </form>
      </section>
    </main>
  );
}
