---
title: Produtos e estoque
tags: [catálogo, manutenção]
---

# Produtos e estoque

## Arquivos principais

**Imagens:** `C:\Users\ferna\Desktop\jnesuplementos\jne-suplementos\src\assets\produtos`

**Nomes, preços, categorias e estoque:** `C:\Users\ferna\Desktop\jnesuplementos\jne-suplementos\src\data\produtos.ts`

## 1. Onde colocar as imagens

Copie cada foto para a pasta:

```text
C:\Users\ferna\Desktop\jnesuplementos\jne-suplementos\src\assets\produtos
```

Use preferencialmente:

- formato `.webp` ou `.jpg`;
- imagem quadrada entre `800 × 800` e `1200 × 1200` pixels;
- fundo branco ou limpo;
- uma foto frontal da embalagem;
- nome sem espaços, acentos ou caracteres especiais.

### Padrão para nomes das imagens

```text
marca-produto-peso-sabor.webp
```

Exemplos:

```text
integralmedica-creatina-300g.webp
growth-whey-1kg-chocolate.webp
max-titanium-pre-treino-300g-frutas-vermelhas.webp
```

Evite nomes como `Foto nova (1).jpg`, imagens retiradas de redes sociais com texto por cima ou fotos sem autorização de uso.

## 2. Onde cadastrar nomes, preços e estoque

Abra este arquivo:

```text
C:\Users\ferna\Desktop\jnesuplementos\jne-suplementos\src\data\produtos.ts
```

Primeiro importe a imagem no começo do arquivo:

```ts
import imgCreatinaIntegral from "@/assets/produtos/integralmedica-creatina-300g.webp";
```

Depois adicione o produto dentro da lista `produtos`:

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

## 3. Para que serve cada campo

| Campo | Para que serve | Exemplo |
|---|---|---|
| `id` | Identificador único usado internamente | `creatina-integralmedica-300g` |
| `nome` | Nome exibido no catálogo e WhatsApp | `Creatina Monohidratada 300g` |
| `marca` | Marca usada também nos filtros | `Integralmédica` |
| `categoria` | Grupo do produto | `creatina` |
| `descricao` | Explicação curta e verdadeira | `Creatina pura...` |
| `preco` | Preço sem `R$`, usando ponto decimal | `99.90` |
| `imagem` | Nome da importação feita no topo | `imgCreatinaIntegral` |
| `peso` | Peso ou quantidade da embalagem | `300g` |
| `estoque` | Quantidade disponível | `10` |
| `ativo` | `true` mostra; `false` esconde | `true` |
| `destaque` | Mostra na seção de destaques | `true` |
| `maisVendido` | Mostra na seção de mais vendidos | `false` |

## 4. Categorias permitidas

Use exatamente um destes valores:

- `whey-protein`
- `creatina`
- `pre-treino`
- `hipercaloricos`
- `vitaminas-minerais`
- `aminoacidos`
- `outros`

## 5. Produtos com sabores

Para sabores ou variações, acrescente:

```ts
variacoes: [
  { id: "chocolate", nome: "Chocolate", estoque: 5 },
  { id: "baunilha", nome: "Baunilha", estoque: 3 },
],
```

O estoque de cada sabor será usado ao adicionar o produto ao carrinho.

## Checklist para publicar um produto

- [ ] A imagem está na pasta correta.
- [ ] O nome do arquivo não tem espaços ou acentos.
- [ ] A importação da imagem foi adicionada.
- [ ] O `id` é único.
- [ ] O preço usa ponto decimal e não contém `R$`.
- [ ] A categoria está na lista permitida.
- [ ] O estoque foi conferido.
- [ ] Marca e descrição são reais.
- [ ] O produto está com `ativo: true`.

## Antes de publicar

Troque todos os itens “Demo” por produtos reais e confirme a autorização de uso das imagens e informações dos fabricantes.
