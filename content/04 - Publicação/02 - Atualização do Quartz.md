---
title: Atualização do Quartz
description: Procedimentos para editar, atualizar e publicar o manual em outro computador ou conta do GitHub.
tags: [github, quartz, manutenção, colaboração]
---

# Atualização do Quartz

Este procedimento não depende da conta ou do computador usados na criação do projeto. Qualquer pessoa pode baixar o repositório e editar as notas. Para enviar alterações diretamente, a pessoa precisa ser colaboradora do repositório. Quem não tiver acesso pode trabalhar por meio de um fork e abrir um pull request.

## Requisitos

- Git;
- Node.js 24;
- npm;
- Obsidian, caso a pessoa prefira editar as notas por uma interface gráfica;
- conta no GitHub para enviar alterações.

## 1. Baixar o projeto em outro computador

```bash
git clone https://github.com/Fernando-Roque-Original/jne-suplementos-docs.git
cd jne-suplementos-docs
git switch v5
npm ci
```

O comando `npm ci` instala exatamente as versões registradas no `package-lock.json`.

## 2. Abrir no Obsidian

Abra o Obsidian, escolha **Abrir pasta como cofre** e selecione a pasta `jne-suplementos-docs`.

As notas públicas ficam em:

```text
content/
```

Não é necessário alterar caminhos para cada computador. Todos os arquivos usam caminhos relativos ao repositório.

## 3. Testar antes de enviar

Para gerar o site sem iniciar servidor:

```bash
node quartz/bootstrap-cli.mjs build
```

Para visualizar enquanto edita:

```bash
node quartz/bootstrap-cli.mjs build --serve
```

O terminal informa o endereço local, normalmente `http://localhost:8080`.

## 4. Colaborador com acesso ao repositório

O proprietário deve adicionar a pessoa em **Settings > Collaborators** no repositório `Fernando-Roque-Original/jne-suplementos-docs`.

Depois de aceitar o convite, a pessoa pode trabalhar em uma branch:

```bash
git switch v5
git pull origin v5
git switch -c atualiza-documentacao
```

Após editar e testar:

```bash
git add content
git commit -m "atualiza documentação"
git push -u origin atualiza-documentacao
```

No GitHub, abra um pull request de `atualiza-documentacao` para `v5`. Depois da revisão, faça o merge. O deploy começa automaticamente quando a alteração entra em `v5`.

## 5. Pessoa sem acesso ao repositório

Quem não for colaborador deve clicar em **Fork** no GitHub e criar uma cópia na própria conta. Depois, deve clonar o fork:

```bash
git clone https://github.com/SEU-USUARIO/jne-suplementos-docs.git
cd jne-suplementos-docs
git remote add upstream https://github.com/Fernando-Roque-Original/jne-suplementos-docs.git
git fetch upstream
git switch -c atualiza-documentacao upstream/v5
npm ci
```

Após editar e testar:

```bash
git add content
git commit -m "atualiza documentação"
git push -u origin atualiza-documentacao
```

Abra um pull request do fork para a branch `v5` do repositório original.

## 6. Atualizar o código do Quartz

O repositório possui duas origens diferentes:

- `origin`: repositório da documentação da JNE;
- `upstream`: código oficial do Quartz.

Verifique os remotes:

```bash
git remote -v
```

Se `upstream` não existir, adicione:

```bash
git remote add upstream https://github.com/jackyzha0/quartz.git
```

Antes de atualizar, confirme que não existem alterações pendentes:

```bash
git status
```

Crie uma branch específica para a atualização:

```bash
git switch v5
git pull origin v5
git switch -c atualiza-quartz
```

Execute o atualizador oficial:

```bash
node quartz/bootstrap-cli.mjs upgrade
```

Atualize as dependências e teste o build:

```bash
npm install
node quartz/bootstrap-cli.mjs build
```

Revise o resultado antes de enviar:

```bash
git status
git diff
```

Se estiver correto:

```bash
git add -A
git commit -m "atualiza versão do Quartz"
git push -u origin atualiza-quartz
```

Abra um pull request para `v5`. Não atualize diretamente a branch de publicação sem testar o build.

## 7. Atualizar somente as dependências

Para instalar as versões permitidas pelo `package.json`:

```bash
npm install
```

Depois execute:

```bash
npm audit
node quartz/bootstrap-cli.mjs build
```

O `package.json` e o `package-lock.json` devem ser enviados juntos quando as dependências mudarem.

## 8. Publicação

O arquivo `.github/workflows/deploy.yml` executa o build e publica a pasta `public` no GitHub Pages. A publicação ocorre depois de um push ou merge na branch `v5`.

O andamento pode ser acompanhado na aba **Actions** do repositório. O endereço publicado é:

```text
https://fernando-roque-original.github.io/jne-suplementos-docs/
```

## 9. Cuidados durante uma atualização

- não apague a pasta `content/`;
- não envie a pasta `node_modules/`;
- não use caminhos absolutos do computador;
- não altere `baseUrl` sem mudar o endereço de publicação;
- não faça push forçado em `v5`;
- mantenha `package.json` e `package-lock.json` sincronizados;
- teste o build antes de abrir o pull request;
- confira a aba **Actions** depois do merge.

## 10. Recuperação do conteúdo

Se uma atualização do Quartz interromper e criar um cache de restauração, execute:

```bash
node quartz/bootstrap-cli.mjs restore
```

Antes de continuar, confira `git status` e confirme que as notas de `content/` permanecem no lugar.
