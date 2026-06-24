# Como o app usa estes assets

Esta pasta deve ficar na raiz do projeto:

```
/hema-street-ui-v2-assets
```

O script `scripts/sync-assets.mjs` copia automaticamente essa pasta para:

```
/public/hema-street-ui-v2-assets
```

Isso acontece antes de `npm run dev` e antes de `npm run build`.

Caminhos principais usados no código:

- Logo do app: `/hema-street-ui-v2-assets/brand/hema-logo.svg`
- Assinatura branca: `/hema-street-ui-v2-assets/brand/luis-signature-white.png`
- Produtos recortados: `/hema-street-ui-v2-assets/products-cutout/*`
- Grafismos/brush/coroa/textura: `/hema-street-ui-v2-assets/ui/*`
- Assets de vitrine/3D: `/hema-street-ui-v2-assets/studio/*`

Não mova esta pasta para dentro de `src`. Ela deve ficar na raiz ou dentro de `public`.
