---
title: Migração para Next.js
description: Motivos, estrutura e limites da migração do site da JNE Suplementos para Next.js.
tags:
  - jne-suplementos
  - nextjs
  - migração
  - arquitetura
---

# Migração para Next.js

O site foi migrado de TanStack Start, TanStack Router, Vite e Nitro para Next.js 16 com App Router.

## Por que migrar

A versão atual não precisava obrigatoriamente de Next.js. A decisão foi tomada para alinhar a base com a evolução planejada para conta de cliente, banco de dados, APIs, checkout e integrações externas.

Next.js oferece no mesmo framework:

- rotas por arquivos;
- layouts compartilhados;
- componentes de servidor e cliente;
- Route Handlers;
- Server Actions;
- metadados;
- otimização de imagens e fontes;
- renderização estática e dinâmica;
- opções de publicação em servidor Node.js, Docker e plataformas compatíveis.

Esses recursos não implementam o futuro automaticamente. Eles reduzem a quantidade de decisões de infraestrutura quando essas fases começarem.

## O que mudou

| Antes | Agora |
| --- | --- |
| `src/routes/index.tsx` | `src/app/page.tsx` e `PaginaInicial.tsx` |
| `src/routes/__root.tsx` | `src/app/layout.tsx` |
| `produto.$produtoId.tsx` | `produto/[produtoId]/page.tsx` |
| TanStack Link e Router | `next/link` e `next/navigation` |
| configuração `head` nas rotas | `Metadata` e `generateMetadata` |
| imagem HTML comum | `next/image` |
| fonte externa no documento | `next/font` |
| Vite e Nitro | `next dev`, `next build` e `next start` |
| plugin Tailwind do Vite | PostCSS do Next.js |

## Estrutura atual

```text
src/app/
├── layout.tsx
├── providers.tsx
├── page.tsx
├── PaginaInicial.tsx
├── catalogo/
│   ├── page.tsx
│   └── CatalogoCliente.tsx
├── carrinho/
│   ├── page.tsx
│   └── CarrinhoCliente.tsx
├── produto/[produtoId]/
│   ├── page.tsx
│   └── ProdutoCliente.tsx
├── sobre/page.tsx
├── error.tsx
└── not-found.tsx
```

Os arquivos `page.tsx` podem executar no servidor e declarar metadados. Os componentes com estado, clique, `localStorage` ou APIs do navegador recebem `"use client"`.

## O que foi preservado

- endereços públicos;
- identificadores de produtos;
- visual do site;
- filtros do catálogo na URL;
- carrinho no navegador;
- variações e estoque;
- textos e links de WhatsApp;
- dados locais dos produtos.

## O que não foi criado

- login;
- banco de dados;
- painel administrativo;
- API comercial;
- checkout interno;
- pagamento;
- pedidos persistentes;
- emissão fiscal;
- políticas jurídicas definitivas.

Essas funcionalidades dependem do levantamento registrado em [[01 - Loja completa, conformidade e lacunas]].

## Comandos atuais

```bash
npm ci
npm run dev
npm run check
npm run build
npm run start
```

O ambiente local usa `http://localhost:3000`.

## Como criar uma nova página

Para criar `/duvidas`, adicione:

```text
src/app/duvidas/page.tsx
```

Conteúdo básico:

```tsx
export default function PaginaDuvidas() {
  return <h1>Dúvidas frequentes</h1>;
}
```

Se a página precisar de `useState`, cliques ou acesso ao navegador, coloque `"use client"` no começo ou separe a parte interativa em outro componente.

## Referência oficial

A arquitetura segue o [App Router do Next.js](https://nextjs.org/docs/app), a orientação oficial de [migração a partir do Vite](https://nextjs.org/docs/app/guides/migrating/from-vite) e a separação entre [Server e Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

## Publicação do site

O repositório do site não possui atualmente um workflow de publicação. O build foi validado, mas o ambiente de produção ainda precisa ser escolhido.

Servidor Node.js e contêiner suportam os recursos do Next.js. Outras plataformas podem exigir integração ou adaptador próprio. Se a loja continuar na Cloudflare, a equipe deve seguir a documentação vigente do provedor; a configuração anterior do Nitro foi removida e não é compatível com a nova saída. Consulte as [opções oficiais de implantação do Next.js](https://nextjs.org/docs/app/getting-started/deploying).
