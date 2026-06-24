# HeMa Footwear WebApp

Webapp premium para catálogo de tênis com vitrine pública, detalhe de produto, botão de WhatsApp com rastreamento de lead, painel administrativo e integração com Neon Postgres.

## Stack

- Next.js App Router
- TypeScript
- Neon Postgres
- CSS responsivo sem dependência pesada de UI
- Assets locais em `public/assets`
- Suporte a arquivos 3D `.glb/.gltf` via `<model-viewer>`

## Observação importante sobre imagens no Vercel

As imagens deste projeto ficam em `public/assets`, conforme solicitado. Isso significa que o painel salva no banco apenas o **caminho da imagem**, por exemplo:

```txt
/assets/products/airmax97-branco-prata.png
```

Em produção na Vercel, o sistema de arquivos é imutável depois do deploy. Portanto, para adicionar novas imagens reais ao diretório `public/assets`, você precisa colocar os arquivos no projeto e fazer novo deploy.  
Se quiser upload dinâmico pelo admin sem redeploy, use Vercel Blob, Cloudinary ou Supabase Storage. O banco continuaria guardando apenas a URL/caminho, não o arquivo.

## Como rodar localmente

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse:

- Loja: `http://localhost:3000`
- Catálogo: `http://localhost:3000/catalogo`
- Admin: `http://localhost:3000/admin/login`

## Banco de dados Neon

1. Crie um projeto no Neon.
2. Copie a connection string para `DATABASE_URL`.
3. Execute o SQL de `sql/schema.sql` no SQL Editor do Neon.
4. Execute o SQL de `sql/seed.sql` para popular produtos iniciais.

## Variáveis na Vercel

Configure em **Project Settings > Environment Variables**:

```txt
DATABASE_URL
ADMIN_EMAIL
ADMIN_PASSWORD
ADMIN_SESSION_TOKEN
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_STORE_NAME
NEXT_PUBLIC_STORE_INSTAGRAM
```

Gere um token seguro para `ADMIN_SESSION_TOKEN`, por exemplo:

```bash
openssl rand -base64 48
```

## Modelos 3D

Coloque seus arquivos `.glb` ou `.gltf` em:

```txt
public/assets/3d
```

No admin, informe o caminho:

```txt
/assets/3d/nike-air-max-97.glb
```

Quando o produto tiver modelo 3D, a página de detalhe exibe o visualizador interativo. Se não tiver, exibe a imagem premium do produto.


## Novo asset hero
- `public/assets/studio/hero-street-panel.png`: bloco/asset principal da dobra inicial, com o tênis gigante para a home.



# HeMa Footwear — Exact Street UI

Esta versão reformula o webapp inteiro para a interface street/suburb aprovada:

- Home com hero gigante, grafismos, textura de papel, brush art e produto protagonista.
- Catálogo com filtros horizontais, grid de produtos e banner 3D.
- Página de produto com galeria lateral, painel visual grande, compra via WhatsApp e assinatura discreta no rodapé.
- Dashboard admin com sidebar escura, cards, gráficos visuais e identidade urbana.
- Tela de novo produto com formulário em 3 colunas e pré-visualização ao vivo.
- Assinatura do desenvolvedor aplicada no rodapé de forma visível, mas secundária.

Assets adicionados:
- `public/assets/brand/hema-logo-original.png`
- `public/assets/brand/luis-development-icon.png`
- `public/assets/brand/luis-development-full.png`
- `public/assets/brand/footer-credit-hema-luis.png`
- `public/assets/reference/*` com as telas de referência.
- `public/assets/ui/*` com textura, brush, coroa e rabiscos.

Observação:
As imagens de produto continuam em `public/assets/products`. O banco salva apenas os caminhos das imagens.
