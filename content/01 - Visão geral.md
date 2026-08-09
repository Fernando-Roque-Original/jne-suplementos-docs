---
title: Visão geral
tags: [arquitetura, projeto]
---

# Visão geral

O site usa React, TanStack Start, TypeScript e Tailwind CSS. Não exige cadastro, banco de dados ou pagamento online: a venda é confirmada por atendimento humano no WhatsApp.

## Estrutura

- `src/routes/index.tsx`: landing page, destaques, filtros e catálogo.
- `src/data/produtos.ts`: fonte única dos produtos.
- `src/lib/carrinho.tsx`: carrinho e persistência local.
- `src/lib/whatsapp.ts`: resumo do pedido e link `wa.me`.
- `src/config/loja.ts`: WhatsApp, endereço, horário e Instagram.

Veja também [[02 - Frontend e experiência]] e [[03 - Carrinho e WhatsApp]].
