---
title: Publicação e manutenção
tags: [github, quartz, deploy]
---

# Publicação e manutenção

O cofre é também a pasta `content` do Quartz. Assim, qualquer nota salva no Obsidian pode virar uma página do manual.

## Fluxo

1. Abra a pasta do Quartz como cofre no Obsidian.
2. Edite ou crie notas dentro de `content`.
3. Marque notas privadas com `draft: true` no frontmatter.
4. Envie as mudanças ao GitHub.
5. O workflow em `.github/workflows/deploy.yml` gera e publica o site no GitHub Pages.

O endereço configurado é `Fernando-Roque-Original.github.io/jne-suplementos-docs` e o repositório é `Fernando-Roque-Original/jne-suplementos-docs`.

## Configuração do GitHub Pages

Em **Settings → Pages → Source**, selecione **GitHub Actions**.
