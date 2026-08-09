---
title: Publicação e manutenção
tags: [github, quartz, deploy]
---

# Publicação e manutenção

As notas publicadas pelo Quartz ficam na pasta `content/`. O Obsidian pode abrir a pasta do projeto como cofre e editar esses arquivos normalmente.

## Fluxo de edição

1. Abra o projeto Quartz no Obsidian.
2. Edite ou crie notas dentro de `content/`.
3. Use `draft: true` no frontmatter para não publicar uma nota.
4. Envie as alterações ao GitHub.
5. O workflow `.github/workflows/deploy.yml` gera e publica o site.

## Endereços

- Repositório: `Fernando-Roque-Original/jne-suplementos-docs`
- Site: `https://fernando-roque-original.github.io/jne-suplementos-docs/`

## GitHub Pages

O repositório usa GitHub Actions como fonte de publicação. Cada push na branch `v5` inicia um novo deploy.

Consulte [[02 - Atualização do Quartz]] para preparar outro computador, colaborar com o projeto ou instalar uma versão mais recente do Quartz.
