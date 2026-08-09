---
title: JNE Suplementos
description: Documentação viva do catálogo online e do fluxo de pedidos pelo WhatsApp.
tags:
  - jne-suplementos
  - documentação
---

# Manual da JNE Suplementos

Este material registra a estrutura do site, o fluxo de pedidos e os procedimentos de manutenção do catálogo.

## Seções

### [[01 - Visão geral]]

Apresentação do projeto, tecnologias e estrutura do frontend.

### [[02 - Catálogo]]

Instruções para adicionar imagens, cadastrar produtos, alterar preços e controlar estoque.

### [[03 - Pedido e WhatsApp]]

Funcionamento do carrinho, persistência no navegador e geração da mensagem de pedido.

### [[04 - Publicação]]

Procedimentos para editar o cofre, enviar alterações e publicar no GitHub Pages.

### [[05 - Histórico]]

Registro das principais alterações realizadas no projeto.

```mermaid
flowchart LR
  A[Cliente acessa a landing page] --> B[Busca e filtra produtos]
  B --> C[Adiciona ao carrinho]
  C --> D[Revisa quantidades]
  D --> E[Envia resumo pelo WhatsApp]
```

## Estado do catálogo

Os nomes, marcas e preços atuais são dados de teste. Antes de divulgar a loja, substitua-os pelos dados reais seguindo [[02 - Catálogo/01 - Produtos e estoque|Produtos e estoque]].
