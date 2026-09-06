---
title: Produtos e estoque
tags: [catálogo, manutenção]
---

# Produtos e estoque

Todos os caminhos desta página são relativos à pasta principal do repositório `jne-suplementos`. Isso permite usar o mesmo procedimento no Windows, macOS ou Linux.

## Arquivos principais

**Imagens:** `src/assets/produtos/`

**Galerias tratadas:** `src/assets/produtos/galeria/`

**Nomes, preços, categorias e estoque:** `src/data/produtos.ts`

**Perfis dos rótulos:** `src/data/perfis-nutricionais.ts`

**Componente das tabelas:** `src/components/InformacaoNutricional.tsx`

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
import imgCreatinaIntegral from "@/assets/produtos/integralmedica-creatina-300g.webp"
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

| Campo                | Função                                                             | Exemplo                        |
| -------------------- | ------------------------------------------------------------------ | ------------------------------ |
| `id`                 | Identificador único usado internamente                             | `creatina-integralmedica-300g` |
| `nome`               | Nome exibido no catálogo e WhatsApp                                | `Creatina Monohidratada 300g`  |
| `marca`              | Marca exibida e usada na busca                                     | `Integralmédica`               |
| `categoria`          | Grupo usado pelo filtro                                            | `creatina`                     |
| `descricao`          | Descrição curta do produto                                         | `Creatina pura...`             |
| `preco`              | Preço sem `R$`, usando ponto decimal                               | `99.90`                        |
| `imagem`             | Nome da importação feita no topo                                   | `imgCreatinaIntegral`          |
| `galeria`            | Lista opcional de fotos, textos alternativos e legendas            | frente e rótulo                |
| `peso`               | Peso ou quantidade da embalagem                                    | `300g`                         |
| `estoque`            | Quantidade disponível                                              | `10`                           |
| `sobConsulta`        | Mostra consulta pelo WhatsApp sem adicionar valor zero ao carrinho | `true`                         |
| `imagemDeReferencia` | Avisa que a foto não representa o modelo exato                     | `true`                         |
| `ativo`              | `true` mostra; `false` esconde                                     | `true`                         |
| `destaque`           | Inclui o item nos destaques                                        | `true`                         |
| `maisVendido`        | Inclui o item nos mais vendidos                                    | `false`                        |

## 4. Categorias permitidas

- `whey-protein`
- `proteinas`
- `creatina`
- `pre-treino`
- `hipercaloricos`
- `vitaminas-minerais`
- `aminoacidos`
- `termogenicos`
- `acessorios`
- `outros`

## 5. Produto sem preço confirmado

Quando preço ou estoque ainda não foram informados pela loja, use:

```ts
preco: 0,
estoque: 0,
sobConsulta: true,
```

O cliente verá `Preço sob consulta` e poderá enviar o produto e a variação escolhida diretamente para o WhatsApp. O item não entra no carrinho com valor zero.

Se a foto mostrar apenas o tipo de item, use também `imagemDeReferencia: true`.

## 6. Produtos com sabores

```ts
variacoes: [
  {
    id: "chocolate",
    nome: "Chocolate",
    imagem: imgProdutoChocolate,
    infoNutricional: perfilChocolate,
    estoque: 5,
  },
  {
    id: "baunilha",
    nome: "Baunilha",
    imagem: imgProdutoBaunilha,
    infoNutricional: perfilBaunilha,
    estoque: 3,
  },
],
```

Quando o cliente escolhe uma variação, a página troca a imagem e o rótulo. O carrinho usa o estoque do sabor selecionado.

Se todos os sabores têm a mesma tabela, reutilize o mesmo perfil em cada variação. Se valores, ingredientes ou alertas mudam, crie perfis separados. Quando `imagem` ou `infoNutricional` não forem informados na variação, o site usa o valor geral do produto.

Quando a loja ainda não conferiu o estoque separado por sabor, omita `estoque` nas variações. O site usará o estoque total do produto. Não distribua o total por estimativa.

## 7. Informações nutricionais

O cadastro comercial e o perfil do rótulo ficam separados. O produto pode apontar para um perfil geral:

```ts
infoNutricional: perfilNutraWhey,
```

As variações também podem apontar para perfis próprios quando o rótulo muda por sabor. As tabelas, ingredientes e observações ficam em `src/data/perfis-nutricionais.ts`. Um único componente exibe todos os formatos, inclusive múltiplas porções, perfil de aminoácidos e ativos por cápsula.

Consulte [[02 - Cadastro rápido e perfis nutricionais]] para o passo a passo completo, [[05 - Galeria e tratamento de fotos]] para preparar frente e verso e [[03 - Fontes e pendências do catálogo]] para verificar as origens das fotos e rótulos.

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

## Estado atual do catálogo

O catálogo possui 25 produtos ativos. BCAA e glutamina demonstrativos foram desativados. As 29 fotografias enviadas pela loja foram normalizadas em WebP e vinculadas a 16 cadastros, incluindo itens mantidos fora da vitrine. Os produtos com foto de verso exibem uma galeria de frente e rótulo. Acessórios continuam usando fotografias identificadas como referência.

Os produtos sem preço local confirmado usam `sobConsulta: true`. Consulte [[03 - Fontes e pendências do catálogo]] antes da divulgação comercial.

O arquivo executa uma validação automática durante o desenvolvimento e o build. Ela interrompe a execução quando encontra ID repetido, preço ou estoque inválido ou quando o estoque total não corresponde à soma das variações. Consulte [[04 - Checkup do catálogo]] para a situação de cada item.
