---
title: JNE Suplementos
description: Documentação viva do catálogo online e do fluxo de pedidos pelo WhatsApp.
tags:
  - jne-suplementos
  - documentação
---

# Central do projeto JNE Suplementos

> [!success] Objetivo
> Uma landing page rápida e responsiva na qual o cliente encontra produtos, monta o carrinho e envia um resumo completo para a equipe pelo WhatsApp.

Esta documentação explica as decisões, a arquitetura e como manter o projeto sem depender de conhecimento técnico avançado.

## Comece por aqui

- [[01 - Visão geral]]
- [[02 - Frontend e experiência]]
- [[03 - Carrinho e WhatsApp]]
- [[04 - Produtos e estoque|Onde colocar imagens e cadastrar produtos]]
- [[05 - Publicação e manutenção]]
- [[06 - Registro de alterações]]

```mermaid
flowchart LR
  A[Cliente acessa a landing page] --> B[Busca e filtra produtos]
  B --> C[Adiciona ao carrinho]
  C --> D[Revisa quantidades]
  D --> E[Envia resumo pelo WhatsApp]
```

> [!warning] Catálogo demonstrativo
> Os nomes, marcas e preços atuais são dados de demonstração. Antes de divulgar a loja, substitua-os pelos dados reais seguindo [[04 - Produtos e estoque]].
