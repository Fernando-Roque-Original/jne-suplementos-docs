---
title: Sobre o projeto
tags: [arquitetura, projeto]
---

# Sobre o projeto

O site da JNE Suplementos usa Next.js 16, React 19, TypeScript e Tailwind CSS. O cliente consulta o catálogo, monta o carrinho e envia o pedido pelo WhatsApp.

O site não exige cadastro e não processa pagamentos. A equipe da loja confirma disponibilidade, entrega e forma de pagamento durante o atendimento.

## Arquivos principais

- `src/app/page.tsx`: entrada e metadados da landing page.
- `src/app/PaginaInicial.tsx`: conteúdo interativo, destaques, filtros e catálogo.
- `src/data/produtos.ts`: cadastro dos produtos.
- `src/lib/carrinho.tsx`: regras e persistência do carrinho.
- `src/lib/whatsapp.ts`: resumo do pedido e link `wa.me`.
- `src/config/loja.ts`: WhatsApp, endereço, horário e redes sociais.

Consulte também [[02 - Frontend e experiência]] e [[03 - Pedido e WhatsApp/01 - Carrinho e WhatsApp|Carrinho e WhatsApp]].
