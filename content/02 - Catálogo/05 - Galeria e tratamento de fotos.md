---
title: Galeria e tratamento de fotos
description: Como preparar fotografias reais da loja e mostrar frente e rótulo de cada produto.
tags:
  - catálogo
  - imagens
  - manutenção
---

# Galeria e tratamento de fotos

O site aceita uma imagem principal e uma galeria opcional para cada produto ou sabor. A galeria atual usa fotografias reais da loja: a frente apresenta a embalagem e o verso permite consultar o rótulo.

Na vitrine, a ordem de preferência é: arquivo oficial da marca, arquivo autorizado de distribuidor, recorte fiel da foto real e, por último, uma versão de estúdio assistida por IA. A fotografia real do verso continua na galeria como fonte de conferência.

Todos os caminhos abaixo são relativos à pasta do repositório `jne-suplementos`. Eles funcionam em qualquer computador.

## Onde ficam os arquivos

| Conteúdo                        | Caminho                                          |
| ------------------------------- | ------------------------------------------------ |
| Fotos comuns do catálogo        | `src/assets/produtos/`                           |
| Fotos reais tratadas            | `src/assets/produtos/galeria/`                   |
| Processo de tratamento          | `scripts/tratar-fotos-produtos.mjs`              |
| Relação entre produto e galeria | `src/data/produtos.ts`                           |
| Formato dos campos              | `src/data/tipos.ts`                              |
| Interface da galeria            | `src/app/produto/[produtoId]/ProdutoCliente.tsx` |

## Como tratar um lote

Coloque as fotografias em uma pasta fora do projeto. Na pasta do site, execute:

```bash
npm run imagens:tratar -- "CAMINHO_DA_PASTA_COM_FOTOS"
```

Exemplos de caminho:

```text
C:\Fotos\produtos-jne
/home/usuario/fotos/produtos-jne
```

O comando corrige a orientação, melhora levemente luz e nitidez, cria um fundo discreto e exporta WebP quadrado de 1200 por 1200 pixels. Ele não redesenha letras nem cria partes do rótulo.

O script contém um mapa entre os nomes recebidos e os nomes finais. Quando chegar um lote novo, abra `scripts/tratar-fotos-produtos.mjs`, adicione os arquivos ao mapa e execute o comando novamente.

> [!important] Integridade do rótulo
> Não use uma ferramenta generativa para “melhorar” tabela nutricional, ingredientes, alertas, lote ou validade. Ela pode inventar caracteres e dosagens. Quando o texto não estiver legível, fotografe novamente em boa luz e registre a pendência.

> [!warning] Aprovação de packshot assistido por IA
> Compare nome, marca, peso, sabor, tampa, cores e texto frontal com a fotografia original. Em setembro de 2026, tentativas para Cabelo, Pele & Unha, L-Carnitina e Super Abdomen foram rejeitadas porque alteraram palavras ou detalhes do rótulo. Uma imagem visualmente boa não deve ser publicada se a embalagem ficou incorreta.

## Como cadastrar frente e verso

Importe as fotos em `src/data/produtos.ts`:

```ts
import imgProdutoFrente from "@/assets/produtos/galeria/produto-frente.webp"
import imgProdutoRotulo from "@/assets/produtos/galeria/produto-rotulo.webp"
```

No produto, acrescente:

```ts
imagem: imgProdutoFrente,
galeria: [
  {
    imagem: imgProdutoFrente,
    alt: "Nome do produto visto de frente",
    legenda: "Frente da embalagem",
  },
  {
    imagem: imgProdutoRotulo,
    alt: "Rótulo do produto com informações nutricionais",
    legenda: "Informações do rótulo",
  },
],
```

`imagem` continua sendo usada nos cartões do catálogo. `galeria` aparece na página de detalhes. `alt` descreve a foto para acessibilidade; `legenda` identifica o botão de troca.

## Produto com sabores

Se a fotografia pertence a apenas um sabor, coloque a galeria dentro da variação:

```ts
{
  id: "morango",
  nome: "Morango",
  imagem: imgMorangoFrente,
  galeria: [
    {
      imagem: imgMorangoFrente,
      alt: "Produto sabor morango visto de frente",
      legenda: "Frente da embalagem",
    },
  ],
  infoNutricional: perfilMorango,
}
```

Ao trocar o sabor, o site volta automaticamente para a primeira imagem da galeria correspondente.

## Fotografar melhor na próxima vez

- limpe a lente do celular;
- use luz uniforme, sem reflexo sobre a tabela;
- apoie o produto sobre fundo simples;
- mantenha a câmera paralela ao rótulo;
- fotografe frente, tabela, ingredientes e alertas separadamente;
- confira a nitidez antes de guardar o produto;
- não corte nome, peso, sabor ou bordas da tabela.

## Conferência antes de publicar

1. Abra a página do produto.
2. Troque entre frente e rótulo usando mouse e teclado.
3. Confira se cada sabor mostra somente suas próprias fotos.
4. Compare a tabela digitada com o verso fotografado.
5. Teste em tela pequena.
6. Execute `npm run check` e `npm run build`.

Consulte também [[01 - Produtos e estoque]], [[02 - Cadastro rápido e perfis nutricionais]] e [[04 - Checkup do catálogo]].
