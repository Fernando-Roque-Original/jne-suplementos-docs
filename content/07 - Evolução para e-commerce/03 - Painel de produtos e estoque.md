---
title: Painel de produtos e estoque
description: Opções seguras para acelerar cadastros agora e administrar o catálogo futuramente.
tags:
  - roadmap
  - catálogo
  - estoque
  - painel-administrativo
  - segurança
---

# Painel de produtos e estoque

Adicionar produtos manualmente exige copiar informações comerciais, sabores, imagens e tabelas extensas. Um painel pode reduzir esse trabalho, mas não deve permitir edição pública sem controle de acesso.

## Por que não criar um painel público simples

Se uma rota administrativa for publicada sem autenticação e autorização no servidor, qualquer visitante poderá tentar:

- alterar preços e estoques;
- cadastrar produtos falsos;
- substituir imagens e descrições;
- desativar itens;
- inserir conteúdo malicioso;
- apagar ou corromper informações.

Esconder o endereço `/admin` ou colocar uma senha somente no código do navegador não protege o painel.

## Opção recomendada agora: gerador interno

Nesta fase, a opção com melhor relação entre velocidade e risco é uma ferramenta executada localmente pela equipe.

Ela pode oferecer:

- formulário de produto;
- campos repetíveis para sabores e nutrientes;
- importação de planilha CSV;
- pré-visualização da página;
- validação de campos obrigatórios;
- aviso de ID duplicado;
- geração do arquivo do perfil nutricional;
- geração do cadastro comercial;
- checklist antes de enviar ao GitHub.

O resultado continua passando por revisão e Git. A ferramenta não precisa acessar produção nem armazenar senhas.

## Opção futura: painel administrativo real

Quando houver banco de dados e operação diária de estoque, o painel poderá incluir:

- autenticação;
- papéis como administrador, catálogo e estoque;
- autorização verificada no servidor;
- cadastro, edição, arquivamento e publicação;
- upload seguro de imagens;
- estoque total e por variação;
- entradas, saídas, ajustes, perdas e devoluções;
- alerta de estoque baixo;
- lote e validade quando aplicável;
- histórico de alterações;
- identificação de quem alterou cada campo;
- backup e recuperação;
- aprovação antes da publicação.

## Estados recomendados

| Estado | Significado |
| --- | --- |
| Rascunho | Cadastro incompleto e invisível no catálogo |
| Em revisão | Dados e rótulo aguardando conferência |
| Publicado | Produto disponível para o cliente |
| Pausado | Temporariamente indisponível |
| Arquivado | Mantido no histórico, mas fora da operação |

## Controle de estoque

Um sistema futuro não deve guardar apenas um número atual. Ele deve registrar movimentações:

| Movimento | Exemplo |
| --- | --- |
| Entrada | compra recebida do fornecedor |
| Reserva | item separado para um pedido |
| Saída | venda confirmada |
| Cancelamento | devolução da reserva ao estoque |
| Ajuste | correção após contagem física |
| Perda | avaria ou vencimento |
| Devolução | produto retornado e avaliado |

O saldo é consequência dessas movimentações. Isso permite descobrir por que o estoque mudou.

## Fases sugeridas

1. Manter os perfis estruturados atuais.
2. Criar uma planilha padrão.
3. Criar um gerador local com validação e pré-visualização.
4. Testar o fluxo com a equipe.
5. Modelar banco de dados e movimentações de estoque.
6. Adicionar autenticação, papéis e auditoria.
7. Migrar o gerador para um painel administrativo protegido.

> [!note]
> Este painel é planejamento futuro. A versão atual continua usando arquivos TypeScript, carrinho local e finalização pelo WhatsApp.

Veja também [[01 - Loja completa, conformidade e lacunas]] e [[02 - Catálogo/02 - Cadastro rápido e perfis nutricionais|Cadastro rápido e perfis nutricionais]].
