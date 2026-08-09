---
title: Carrinho e WhatsApp
tags: [carrinho, whatsapp, lógica]
---

# Carrinho e WhatsApp

O carrinho é salvo no navegador por `localStorage`. Ao carregar, o sistema valida os dados, descarta registros inválidos e limita a quantidade ao estoque conhecido.

## Conteúdo da mensagem

- produto e variação;
- peso, quantidade e preço unitário;
- subtotal de cada item;
- valor total do pedido;
- campos para nome e local de entrega;
- solicitação de confirmação de estoque, entrega e pagamento.

## Limites do sistema

O site não realiza cobranças nem reserva estoque. A confirmação final acontece no WhatsApp para que a equipe confira disponibilidade, entrega e pagamento.
