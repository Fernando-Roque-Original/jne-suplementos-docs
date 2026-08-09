---
title: Páginas, componentes e funções
description: Mapa do código da JNE Suplementos e instruções para alterar cada parte do site.
tags:
  - jne-suplementos
  - código
  - manutenção
---

# Páginas, componentes e funções

Este guia mostra onde cada parte do site está localizada, o que ela faz e como alterá-la. Os caminhos são relativos à pasta do projeto, portanto funcionam em qualquer computador.

Se você ainda não conhece React, TypeScript, arquivos TSX ou a estrutura de um site, comece por [[02 - Curso básico do código|Curso básico do código]].

## Antes de editar

Abra um terminal na pasta do site e instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

O terminal mostrará o endereço local do site. Mantenha esse processo aberto enquanto edita: as mudanças serão recarregadas automaticamente.

Antes de enviar qualquer alteração, execute:

```bash
npm run check
npm run build
```

O primeiro comando verifica TypeScript e regras do código. O segundo confirma que o site consegue gerar a versão de produção.

## Mapa das pastas

| Caminho | Responsabilidade |
| --- | --- |
| `src/routes/` | Páginas e endereços do site |
| `src/components/` | Partes reutilizáveis, como Header, Footer e cartão de produto |
| `src/data/` | Produtos, categorias e tipos dos dados |
| `src/config/` | Dados gerais da loja |
| `src/lib/` | Regras do carrinho, WhatsApp e formatação |
| `src/assets/` | Imagens do banner e dos produtos |
| `src/styles.css` | Cores, fontes e estilos globais |

## Estrutura comum de todas as páginas

O arquivo `src/routes/__root.tsx` é a estrutura principal. Ele envolve todas as páginas nesta ordem:

```text
Header
  Página atual
Footer
```

### Header

`src/components/Header.tsx` controla o cabeçalho exibido no topo do site. Ele contém a identidade da loja, os links de navegação, o acesso ao carrinho e o menu para celular.

Edite esse arquivo para:

- trocar o texto ou a marca no topo;
- adicionar, remover ou renomear links do menu;
- alterar o botão do carrinho;
- mudar o comportamento do menu móvel.

Depois de alterar, teste em tela grande e em tela pequena. Um link do Header deve apontar para uma rota existente em `src/routes/`.

### Footer

`src/components/Footer.tsx` controla o rodapé exibido no final de todas as páginas. Ele apresenta dados da loja, navegação auxiliar, contato e redes sociais.

Edite esse arquivo para mudar a organização visual ou os textos fixos. Dados como telefone, endereço, horário e links sociais devem ser alterados preferencialmente em `src/config/loja.ts`, pois o mesmo dado pode ser usado em mais de um lugar.

### Outlet

Dentro de `src/routes/__root.tsx`, o componente `<Outlet />` indica onde a página atual será renderizada. Não o remova. Sem ele, nenhuma rota interna aparece entre o Header e o Footer.

### Providers

O `CarrinhoProvider` disponibiliza o carrinho para todas as páginas. O `QueryClientProvider` prepara o gerenciamento de dados da aplicação. O `Toaster` exibe avisos breves, como a confirmação de que um item foi adicionado.

Não retire esses componentes sem revisar todos os locais que dependem deles.

## Páginas do site

### Página inicial

Arquivo: `src/routes/index.tsx`

Endereço: `/`

Ela reúne:

- banner principal;
- botões para catálogo e WhatsApp;
- diferenciais da loja;
- categorias;
- produtos em destaque;
- produtos mais vendidos;
- busca rápida e catálogo completo;
- apresentação da loja.

Para trocar a imagem do banner, substitua `src/assets/hero.jpg` por outra imagem com o mesmo nome ou importe um novo arquivo em `src/routes/index.tsx`.

As funções `Secao` e `GradeProdutos`, no final do arquivo, evitam repetir a mesma estrutura visual. `Secao` monta o título e o espaçamento de cada bloco. `GradeProdutos` recebe uma lista e cria um `CardProduto` para cada produto.

### Catálogo

Arquivo: `src/routes/catalogo.tsx`

Endereço: `/catalogo`

Essa página controla busca, categoria, marca e ordenação. Os filtros são mantidos na URL, permitindo copiar um link já filtrado.

A função `atualizarFiltro` altera os parâmetros da URL. A constante `produtosFiltrados` seleciona e ordena os produtos antes de mostrá-los. Para cadastrar itens ou marcas, não edite a lógica desta página; altere `src/data/produtos.ts` seguindo [[02 - Catálogo/01 - Produtos e estoque|Produtos e estoque]].

### Detalhes do produto

Arquivo: `src/routes/produto.$produtoId.tsx`

Endereço: `/produto/identificador-do-produto`

O trecho `$produtoId` significa que a rota é dinâmica. O valor vem do campo `id` cadastrado em `src/data/produtos.ts`. A página busca o produto, apresenta foto, preço, estoque, descrição, variações e informações nutricionais, e permite adicionar o item ao carrinho.

Não altere o nome `$produtoId` isoladamente. Ele está ligado à leitura do identificador dentro do arquivo.

### Carrinho

Arquivo: `src/routes/carrinho.tsx`

Endereço: `/carrinho`

Mostra os produtos escolhidos, permite alterar quantidades, remover itens e gerar as ações de fechamento pelo WhatsApp. A página usa a lógica compartilhada de `src/lib/carrinho.tsx` e `src/lib/whatsapp.ts`.

### Sobre a loja

Arquivo: `src/routes/sobre.tsx`

Endereço: `/sobre`

Contém a apresentação institucional da JNE Suplementos. Edite essa página para atualizar história, proposta de atendimento e informações explicativas que não pertencem ao catálogo.

## Componentes reutilizáveis

### CardProduto

Arquivo: `src/components/CardProduto.tsx`

É o cartão usado nas grades da página inicial e do catálogo. Ele recebe um objeto `produto` e exibe imagem, nome, marca, preço, disponibilidade e acesso aos detalhes.

Uma alteração nesse arquivo afeta todos os cartões do site. Sempre confira a página inicial e o catálogo depois de editá-lo.

### Componentes de interface

Pasta: `src/components/ui/`

Contém elementos básicos, como botões, campos, caixas de diálogo e seletores. Eles formam a base visual usada pelas páginas. Normalmente, textos e conteúdo da loja não são editados nessa pasta.

Altere um componente de `ui` somente quando a mudança tiver que valer em todos os locais que o utilizam. Para mudar apenas um botão específico, prefira editar a página onde ele aparece.

## Dados e regras do negócio

### Configuração da loja

Arquivo: `src/config/loja.ts`

Centraliza nome, slogan, número do WhatsApp, contato, endereço, horário e redes sociais. O WhatsApp deve conter somente números, incluindo código do país e DDD, sem espaços, parênteses ou traços.

Depois de alterar o número, teste todos os botões de WhatsApp do site.

### Produtos

Arquivo: `src/data/produtos.ts`

É a fonte do catálogo. Cada objeto representa um produto. As funções no final do arquivo têm estas responsabilidades:

- `produtosAtivos`: mantém no site somente itens com `ativo: true`;
- `buscarProdutoPorId`: encontra um produto pelo identificador usado na URL;
- `marcas`: cria automaticamente a lista de marcas usada no filtro.

As imagens ficam em `src/assets/produtos/`. Consulte [[02 - Catálogo/01 - Produtos e estoque|Produtos e estoque]] antes de cadastrar ou substituir itens.

### Categorias

Arquivo: `src/data/categorias.ts`

Cada categoria possui `id`, `nome` e `descricao`. O `id` precisa ser exatamente igual ao valor usado no campo `categoria` dos produtos. A função `nomeDaCategoria` converte o identificador interno em um nome legível.

### Tipos

Arquivo: `src/data/tipos.ts`

Define o formato obrigatório de produtos, categorias, variações e informações nutricionais. Se um novo campo for criado no catálogo, ele normalmente deve ser declarado nesse arquivo e depois tratado nos componentes que o exibem.

## Carrinho e WhatsApp

### Lógica do carrinho

Arquivo: `src/lib/carrinho.tsx`

O carrinho usa React Context para ficar disponível no site inteiro e `localStorage` para continuar salvo no navegador mesmo após atualizar a página.

Funções principais:

- `adicionar`: inclui um produto ou aumenta sua quantidade respeitando o estoque;
- `remover`: exclui um item pela chave única;
- `alterarQuantidade`: atualiza a quantidade e impede ultrapassar o estoque;
- `limpar`: esvazia o carrinho;
- `useCarrinho`: permite que páginas e componentes acessem os dados do carrinho.

### Mensagem do WhatsApp

Arquivo: `src/lib/whatsapp.ts`

Funções principais:

- `listarItens`: transforma os produtos do carrinho em texto;
- `total`: soma os subtotais;
- `mensagemFinalizarPedido`: cria o resumo completo do pedido;
- `mensagemFalarComVendedor`: cria a mensagem de negociação;
- `mensagemContatoGeral`: cria a mensagem simples de atendimento;
- `linkWhatsApp`: monta o endereço `wa.me` com a mensagem codificada;
- `abrirWhatsApp`: abre o link em uma nova aba.

Para alterar o texto que chega à loja, edite as funções de mensagem, preservando as variáveis entre `${...}`. Elas inserem automaticamente nome, quantidade, preço e total.

Veja também [[03 - Pedido e WhatsApp/01 - Carrinho e WhatsApp|Carrinho e WhatsApp]].

## Aparência e estilos

Arquivo: `src/styles.css`

Esse arquivo define fontes, cores, bordas, fundos e estilos globais. As variáveis em `:root`, como `--primary`, `--background` e `--whatsapp`, formam a paleta do site.

As classes usadas diretamente nos arquivos `.tsx`, como `px-4`, `text-sm` e `bg-card`, são utilitários do Tailwind CSS. Antes de mudar uma cor em muitos componentes, verifique se é melhor alterar o token correspondente em `src/styles.css`.

## Como atualizar textos e páginas

1. Localize a página pelo mapa deste guia.
2. Edite somente o texto entre as tags, preservando a estrutura JSX.
3. Salve e confira a alteração no ambiente local.
4. Teste navegação, versão móvel e botões relacionados.
5. Execute `npm run check` e `npm run build`.
6. Crie uma branch, faça o commit e envie um Pull Request.

Texto visível costuma aparecer entre tags, como neste exemplo:

```tsx
<h1>Catálogo</h1>
<p>Escolha os produtos disponíveis.</p>
```

Não remova chaves, parênteses, aspas ou tags sem entender a estrutura. Em JSX, toda tag aberta deve ser fechada.

## Como criar uma página

Crie um arquivo dentro de `src/routes/`. O nome do arquivo define o endereço. Por exemplo, `duvidas.tsx` cria a rota `/duvidas`.

Estrutura básica:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/duvidas")({
  component: PaginaDuvidas,
});

function PaginaDuvidas() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1>Dúvidas frequentes</h1>
    </div>
  );
}
```

Depois, adicione o link no `Header` ou no `Footer`, se a página precisar aparecer na navegação. Inicie ou reinicie `npm run dev` para que a árvore automática de rotas seja atualizada. Não edite manualmente `src/routeTree.gen.ts`, pois ele é gerado pelo roteador.

## Teste mínimo por tipo de alteração

| Alteração | O que conferir |
| --- | --- |
| Header ou Footer | Todos os links e visualização no celular |
| Página inicial | Banner, seções, busca e produtos em destaque |
| Produto | Card, detalhes, variação, estoque e preço |
| Carrinho | Adicionar, alterar quantidade, remover e recarregar a página |
| WhatsApp | Número correto e resumo completo da compra |
| Estilos | Contraste, leitura e comportamento em telas pequenas |
| Nova página | URL, Header, Footer, título e build de produção |

## Publicação das alterações

Após testar o código, siga [[04 - Publicação/01 - Publicação e manutenção|Publicação e manutenção]]. Para atualizar a própria documentação do Quartz, siga [[04 - Publicação/02 - Atualização do Quartz|Atualização do Quartz]].
