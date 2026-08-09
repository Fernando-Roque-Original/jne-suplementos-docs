---
title: Produtos e estoque
tags: [catálogo, manutenção]
---

# Produtos e estoque

Todos os caminhos desta página são relativos à pasta principal do repositório `jne-suplementos`. Isso permite usar o mesmo procedimento no Windows, macOS ou Linux.

## Arquivos principais

**Imagens:** `src/assets/produtos/`

**Nomes, preços, categorias e estoque:** `src/data/produtos.ts`

## 1. Adicionar imagens

Copie a foto para:

```text
src/assets/produtos/
```

Recomendações:

- formato `.webp` ou `.jpg`;
- imagem quadrada entre `800 x 800` e `1200 x 1200` pixels;
- fundo branco ou limpo;
- foto frontal da embalagem;
- nome sem espaços, acentos ou caracteres especiais.

### Padrão para nomes

```text
marca-produto-peso-sabor.webp
```

Exemplos:

```text
integralmedica-creatina-300g.webp
growth-whey-1kg-chocolate.webp
max-titanium-pre-treino-300g-frutas-vermelhas.webp
```

Evite nomes como `Foto nova (1).jpg`, imagens com texto por cima ou fotos sem autorização de uso.

## 2. Cadastrar nomes, preços e estoque

Abra:

```text
src/data/produtos.ts
```

Importe a imagem no início do arquivo:

```ts
import imgCreatinaIntegral from "@/assets/produtos/integralmedica-creatina-300g.webp";
```

Adicione o produto dentro da lista `produtos`:

```ts
{
  id: "creatina-integralmedica-300g",
  nome: "Creatina Monohidratada 300g",
  marca: "Integralmédica",
  categoria: "creatina",
  descricao: "Creatina monohidratada pura em embalagem de 300g.",
  preco: 99.90,
  imagem: imgCreatinaIntegral,
  peso: "300g",
  estoque: 10,
  ativo: true,
  destaque: true,
  maisVendido: false,
},
```

## 3. Campos do produto

| Campo | Função | Exemplo |
|---|---|---|
| `id` | Identificador único usado internamente | `creatina-integralmedica-300g` |
| `nome` | Nome exibido no catálogo e WhatsApp | `Creatina Monohidratada 300g` |
| `marca` | Marca exibida e usada na busca | `Integralmédica` |
| `categoria` | Grupo usado pelo filtro | `creatina` |
| `descricao` | Descrição curta do produto | `Creatina pura...` |
| `preco` | Preço sem `R$`, usando ponto decimal | `99.90` |
| `imagem` | Nome da importação feita no topo | `imgCreatinaIntegral` |
| `peso` | Peso ou quantidade da embalagem | `300g` |
| `estoque` | Quantidade disponível | `10` |
| `ativo` | `true` mostra; `false` esconde | `true` |
| `destaque` | Inclui o item nos destaques | `true` |
| `maisVendido` | Inclui o item nos mais vendidos | `false` |

## 4. Categorias permitidas

- `whey-protein`
- `creatina`
- `pre-treino`
- `hipercaloricos`
- `vitaminas-minerais`
- `aminoacidos`
- `outros`

## 5. Produtos com sabores

```ts
variacoes: [
  { id: "chocolate", nome: "Chocolate", estoque: 5 },
  { id: "baunilha", nome: "Baunilha", estoque: 3 },
],
```

Quando existem variações, o carrinho usa o estoque de cada sabor.

## Checklist

- [ ] A imagem está em `src/assets/produtos/`.
- [ ] O nome do arquivo não tem espaços ou acentos.
- [ ] A importação foi adicionada ao arquivo de produtos.
- [ ] O `id` é único.
- [ ] O preço usa ponto decimal e não contém `R$`.
- [ ] A categoria está na lista permitida.
- [ ] O estoque foi conferido.
- [ ] O produto está com `ativo: true`.

## Antes de publicar

Troque os itens de teste por produtos reais e confirme a autorização de uso das imagens e informações dos fabricantes.
