---
title: Design e animações
description: Como manter a direção visual da landing page e usar Motion sem prejudicar desempenho ou acessibilidade.
tags:
  - frontend
  - design
  - animações
  - acessibilidade
---

# Design e animações

A página inicial funciona como um balcão digital da JNE. Ela apresenta a proposta da loja, explica como o pedido chega ao WhatsApp e conduz o visitante até o catálogo sem criar etapas desnecessárias.

## Onde cada parte fica

| Parte                       | Arquivo                              | Função                                              |
| --------------------------- | ------------------------------------ | --------------------------------------------------- |
| Composição da landing page  | `src/app/PaginaInicial.tsx`          | Hero, passos, categorias, vitrine e catálogo        |
| Imagem do hero              | `src/assets/hero-jne-higgsfield.png` | Fundo fotográfico sem texto embutido                |
| Regras globais de movimento | `src/app/providers.tsx`              | Aplica `MotionConfig` e respeita movimento reduzido |
| Cores e acabamentos         | `src/styles.css`                     | Tema, gradientes, contraste e painéis               |
| Botões reutilizáveis        | `src/components/ui/button.tsx`       | Aparência das ações principais                      |

## Motion

O pacote `motion` foi instalado para animar mudanças de estado que ajudam o visitante a entender a interface. O import usado pelos componentes React é:

```tsx
import { AnimatePresence, motion } from "motion/react"
```

O provedor global contém:

```tsx
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```

Isso reduz animações quando o sistema operacional do visitante solicita menos movimento.

> [!tip] Regra prática
> Use CSS para `hover`, foco e pequenas mudanças de cor. Use Motion quando um bloco entra, sai ou troca de conteúdo e a transição ajuda a explicar o que aconteceu.

## Como editar o hero

1. Abra `src/app/PaginaInicial.tsx`.
2. Procure pela seção com a classe `hero-jne`.
3. Altere título, descrição ou botões sem colocar texto dentro da imagem.
4. Para trocar a foto, salve o novo arquivo em `src/assets/` e atualize o import.
5. Confira desktop e celular; o produto ou a prateleira não podem prejudicar a leitura.

## Como editar a vitrine

Os botões `Destaques` e `Mais pedidos` mudam o estado `vitrineAtiva`. O `AnimatePresence` desmonta o grupo anterior e apresenta o novo. Preserve o foco visível, os nomes dos botões e os atributos de acessibilidade ao alterar essa área.

## Por que Skiper UI não foi instalado

Skiper UI distribui componentes individuais por um registro compatível com shadcn/ui. Ele pode ser útil quando um componente específico resolve um problema concreto, mas instalar vários exemplos acrescentaria código e dependências sem necessidade. A landing atual usa Motion diretamente e mantém a identidade da JNE.

Antes de copiar um componente externo, confira licença, acessibilidade, dependências, tamanho do pacote e se o efeito continua bom em celular.

## Uso de imagens geradas

O hero pode usar uma imagem ambiental gerada, pois ela não contém tabela, ingredientes nem embalagem específica. Em produtos, qualquer geração precisa ser comparada com a foto original. Não use IA como fonte para tabela nutricional, ingredientes, peso, lote, validade ou alertas.

Consulte [[02 - Catálogo/05 - Galeria e tratamento de fotos|Galeria e tratamento de fotos]] e [[02 - Catálogo/03 - Fontes e pendências do catálogo|Fontes e pendências do catálogo]].
