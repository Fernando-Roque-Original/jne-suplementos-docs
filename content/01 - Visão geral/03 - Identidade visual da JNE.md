---
title: Identidade visual da JNE
description: Arquivos oficiais da marca, locais de uso e procedimento para substituir logo, símbolo e ícones.
tags:
  - marca
  - identidade-visual
  - manutenção
---

# Identidade visual da JNE

Este tópico registra quais arquivos representam a JNE Suplementos e onde cada versão aparece no site e no Quartz.

## Marca principal

![[assets/marca/jne-logo-principal.png|360]]

A marca principal reúne o personagem, o nome `JNE` e a palavra `SUPLEMENTOS`. Ela é usada no rodapé, na apresentação institucional e na imagem de compartilhamento.

Arquivo do site:

```text
public/marca/jne-logo-principal.png
```

## Símbolo compacto

![[assets/marca/jne-simbolo.png|180]]

O símbolo compacto mostra somente o personagem dentro do círculo. Ele foi preparado para locais pequenos, onde o nome completo ficaria ilegível.

Usos atuais:

- cabeçalho do site;
- ícone da aba do navegador;
- ícone salvo em celular;
- favicon do Quartz.

Arquivos do site:

```text
public/marca/jne-simbolo.png
src/app/icon.png
src/app/apple-icon.png
```

Arquivos do Quartz:

```text
quartz/static/icon.png
quartz/static/og-image.png
```

## Como trocar a logo

1. Exporte a nova arte em PNG com fundo transparente.
2. Mantenha espaço livre ao redor do desenho para evitar cortes.
3. Substitua o arquivo correspondente mantendo o mesmo nome.
4. Execute `npm run check` e `npm run build` no site.
5. Execute `node quartz/bootstrap-cli.mjs build` na documentação.
6. Confira cabeçalho, rodapé, aba do navegador e visualização no celular.

Se o nome do arquivo mudar, também será necessário atualizar as referências em `Header.tsx`, `Footer.tsx`, `PaginaInicial.tsx` e `layout.tsx`.

## Regras de uso

- use a marca principal quando houver espaço para leitura;
- use o símbolo compacto em áreas menores que 120 pixels;
- não estique a imagem nem altere sua proporção;
- não recorte partes do personagem ou do nome;
- mantenha contraste suficiente com o fundo;
- não use imagens geradas para representar embalagens reais, rótulos, sabores ou informações nutricionais.

Fotos de produtos devem reproduzir o item vendido. Quando uma foto oficial não estiver disponível, use uma imagem da própria loja ou mantenha o aviso `Imagem de referência` até obter uma fonte confiável.
