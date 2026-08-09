---
title: Carrinho e WhatsApp
tags: [carrinho, whatsapp, lógica]
---

# Carrinho e WhatsApp

O carrinho é salvo no navegador por `localStorage`. Ao carregar, o sistema valida a estrutura, descarta dados corrompidos e limita a quantidade ao estoque conhecido.

Ao finalizar, a mensagem contém:

- produto e variação;
- peso, quantidade e preço unitário;
- subtotal de cada item e total do pedido;
- campos para nome e local de entrega;
- pedido de confirmação de estoque, entrega e pagamento.

## Limites do sistema

O site não realiza cobranças nem reserva estoque. A confirmação final acontece no WhatsApp para que a equipe confira disponibilidade, entrega e pagamento.
