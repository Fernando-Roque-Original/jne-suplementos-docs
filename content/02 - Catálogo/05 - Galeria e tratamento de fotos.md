---
title: Galeria e tratamento de fotos
description: Como escolher, preparar e publicar imagens profissionais dos produtos.
tags:
  - catálogo
  - imagens
  - manutenção
---

# Galeria e tratamento de fotos

O site aceita uma imagem principal e uma galeria opcional para cada produto ou sabor. A área pública deve mostrar somente imagens limpas e profissionais, sem mãos, balcão, prateleiras, pessoas ou outros objetos ao fundo.

Na vitrine, a ordem de preferência é: arquivo oficial da marca, arquivo autorizado de distribuidor, recorte fiel com fundo removido e, por último, uma versão de estúdio assistida por IA. Uma foto do rótulo só pode aparecer publicamente quando também for uma imagem limpa fornecida pela marca ou por um distribuidor autorizado.

As fotografias feitas dentro da loja continuam úteis para conferir tabela nutricional, ingredientes, alertas, peso e sabor. Elas são material interno de referência e não devem ser vinculadas ao campo `galeria`.

Todos os caminhos abaixo são relativos à pasta do repositório `jne-suplementos`. Eles funcionam em qualquer computador.

## Onde ficam os arquivos

| Conteúdo                        | Caminho                                          |
| ------------------------------- | ------------------------------------------------ |
| Fotos comuns do catálogo        | `src/assets/produtos/`                           |
| Material interno de conferência | `src/assets/produtos/galeria/`                   |
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

## Regra para a galeria pública

Antes de adicionar uma foto à galeria, confirme todos estes pontos:

- fundo branco, transparente ou de estúdio discreto;
- nenhuma mão, mesa, prateleira, pessoa ou produto diferente visível;
- embalagem correspondente à marca, ao peso e ao sabor cadastrados;
- texto do rótulo sem reconstrução ou alteração por inteligência artificial;
- autorização de uso da marca, do fabricante ou do distribuidor.

Se a única imagem do rótulo tiver sido fotografada na loja, use-a apenas para digitar e conferir os dados. Nesse caso, publique somente a imagem principal limpa.

## Como cadastrar uma galeria profissional

Importe as fotos em `src/data/produtos.ts`:

```ts
import imgProdutoFrente from "@/assets/produtos/produto-frente.webp"
import imgProdutoRotuloOficial from "@/assets/produtos/produto-rotulo-oficial.webp"
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
    imagem: imgProdutoRotuloOficial,
    alt: "Rótulo oficial do produto com informações nutricionais",
    legenda: "Rótulo oficial",
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
3. Confirme que não há mãos, mesa, prateleiras ou fundo de loja.
4. Confira se cada sabor mostra somente suas próprias fotos.
5. Compare a tabela digitada com o material interno do rótulo.
6. Teste em tela pequena.
7. Execute `npm run check` e `npm run build`.

Consulte também [[01 - Produtos e estoque]], [[02 - Cadastro rápido e perfis nutricionais]] e [[04 - Checkup do catálogo]].
