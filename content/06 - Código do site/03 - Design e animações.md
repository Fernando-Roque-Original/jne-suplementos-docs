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

| Parte                       | Arquivo                                   | Função                                              |
| --------------------------- | ----------------------------------------- | --------------------------------------------------- |
| Composição da landing page  | `src/app/PaginaInicial.tsx`               | Hero, passos, categorias, vitrine e catálogo        |
| Imagem do hero              | `src/assets/hero-jne-higgsfield.png`      | Fundo fotográfico sem texto embutido                |
| Regras globais de movimento | `src/app/providers.tsx`                   | Aplica `MotionConfig` e respeita movimento reduzido |
| Grade animada de produtos   | `src/components/GradeProdutosAnimada.tsx` | Reorganiza cards quando busca e filtros mudam       |
| Menu móvel                  | `src/components/Header.tsx`               | Mostra a abertura e o fechamento da navegação       |
| Cores e acabamentos         | `src/styles.css`                          | Tema, gradientes, contraste e painéis               |
| Botões reutilizáveis        | `src/components/ui/button.tsx`            | Aparência das ações principais                      |

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

### Interações implementadas

- o indicador vermelho da vitrine usa `layoutId` para acompanhar a aba selecionada;
- a grade compartilhada usa `layout` e `AnimatePresence` para reorganizar os cards após uma busca ou mudança de categoria;
- o menu móvel usa opacidade e deslocamento curto para deixar claro quando a navegação abre ou fecha;
- todas as transições ficam entre 180 e 200 milissegundos, exceto o indicador de aba, que usa uma mola curta e interrompível;
- nenhum movimento é necessário para acessar conteúdo ou concluir o pedido.

O título, a descrição e os botões do hero não dependem de animação de entrada. Essa decisão evita uma tela vazia caso o JavaScript, a hidratação do React ou a biblioteca de movimento demore para iniciar.

O componente compartilhado evita que a página inicial e a página `/catalogo` implementem animações diferentes para o mesmo comportamento.

## Critérios da revisão UI/UX Pro Max

A revisão priorizou os pontos que afetam o uso da loja:

1. contraste e foco visível antes de efeitos visuais;
2. botões e filtros com área de toque mínima de 44 pixels;
3. busca com rótulo acessível, ícone consistente e botão para limpar o termo;
4. animações curtas, interrompíveis e baseadas em transformação e opacidade;
5. estado vazio com explicação e ação para limpar filtros;
6. imagens WebP quadradas para evitar mudança de layout durante o carregamento.

## Como editar o hero

1. Abra `src/app/PaginaInicial.tsx`.
2. Procure pela seção com a classe `hero-jne`.
3. Altere título, descrição ou botões sem colocar texto dentro da imagem.
4. Para trocar a foto, salve o novo arquivo em `src/assets/` e atualize o import.
5. Confira desktop e celular; o produto ou a prateleira não podem prejudicar a leitura.

## Como editar a vitrine

Os botões `Destaques` e `Mais pedidos` mudam o estado `vitrineAtiva`. O `AnimatePresence` desmonta o grupo anterior e apresenta o novo. Preserve o foco visível, os nomes dos botões e os atributos de acessibilidade ao alterar essa área.

## Por que Skiper UI não foi instalado

O [Skiper UI](https://skiper-ui.com/) apresenta componentes e referências de interação, incluindo exemplos gratuitos e premium. Ele pode ser útil quando um componente específico resolve um problema concreto, mas instalar ou copiar vários exemplos acrescentaria código e dependências sem necessidade. A landing atual usa [Motion para React](https://motion.dev/docs/react) diretamente, junto com Radix UI e os componentes locais, e mantém a identidade da JNE.

O padrão aproveitado foi o de resposta visual clara à interação: seleção que se move, conteúdo que entra e sai sem salto e controles que continuam simples no celular. Nenhum pacote adicional do Skiper UI entrou no projeto.

Antes de copiar um componente externo, confira licença, acessibilidade, dependências, tamanho do pacote e se o efeito continua bom em celular.

> [!warning] Biblioteca não é acabamento automático
> Um exemplo visual só deve entrar quando melhorar uma tarefa do visitante. Efeitos contínuos, cursor personalizado, trilhas de imagens e animações decorativas foram evitados porque competiriam com os produtos e prejudicariam desempenho e acessibilidade.

## Uso de imagens geradas

O hero pode usar uma imagem ambiental gerada, pois ela não contém tabela, ingredientes nem embalagem específica. Em produtos, qualquer geração precisa ser comparada com a foto original. Não use IA como fonte para tabela nutricional, ingredientes, peso, lote, validade ou alertas.

Consulte [[02 - Catálogo/05 - Galeria e tratamento de fotos|Galeria e tratamento de fotos]] e [[02 - Catálogo/03 - Fontes e pendências do catálogo|Fontes e pendências do catálogo]].
