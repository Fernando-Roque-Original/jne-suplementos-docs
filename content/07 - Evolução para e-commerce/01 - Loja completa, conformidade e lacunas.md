---
title: Loja completa, conformidade e lacunas
description: Recursos esperados em um e-commerce de suplementos, obrigações que precisam ser analisadas e diferenças para o site atual.
tags:
  - jne-suplementos
  - e-commerce
  - lgpd
  - fiscal
  - roadmap
---

# Loja completa, conformidade e lacunas

Este documento compara a versão atual da JNE Suplementos com uma operação madura de comércio eletrônico. Sites de grande porte, como os de fabricantes e varejistas nacionais de suplementos, são referências de escopo: integram catálogo, conta, pagamento, logística, atendimento e pós-venda. A implementação da JNE deve seguir os requisitos reais da empresa, e não copiar uma plataforma específica.

Este material é um planejamento técnico. Obrigações tributárias, sanitárias e jurídicas devem ser confirmadas por contador e assessoria jurídica de acordo com a natureza jurídica, regime tributário, estado, produtos e modelo de operação da loja.

## Correção de conceitos

LGPD e nota fiscal tratam de assuntos diferentes.

- A LGPD regula o tratamento de dados pessoais, como nome, CPF, endereço, telefone e histórico de pedidos.
- A emissão fiscal documenta a operação comercial e depende das regras tributárias aplicáveis à empresa e à venda.
- O Código de Defesa do Consumidor e o Decreto do Comércio Eletrônico regulam informações, atendimento, contratação e arrependimento.
- A Anvisa regula aspectos sanitários, rotulagem e alegações aplicáveis aos suplementos.

Migrar para Next.js não torna a loja automaticamente adequada a nenhuma dessas regras. O framework fornece ferramentas para desenvolver os fluxos necessários.

## O que existe hoje

A versão atual possui:

- landing page;
- catálogo em arquivo local;
- busca e filtros;
- página de produto;
- estoque informativo;
- carrinho salvo no navegador;
- resumo enviado pelo WhatsApp;
- confirmação manual de estoque, entrega e pagamento.

Ela não coleta cadastro no próprio site e não processa pagamento. Os dados enviados no WhatsApp passam a ser tratados pela loja e pela plataforma de comunicação usada.

## O que uma loja completa normalmente precisa

### Catálogo e conteúdo

- produtos em banco de dados;
- painel de cadastro e revisão;
- preço, promoções, variações e estoque por item;
- fotos autorizadas e otimizadas;
- informações nutricionais, ingredientes, alergênicos e advertências;
- origem, lote e validade quando necessários ao processo;
- descrições e alegações revisadas;
- busca, filtros, categorias e produtos relacionados.

A Anvisa informa que rótulos de suplementos devem apresentar recomendação de uso, advertências, restrições, tabela nutricional, ingredientes, alergênicos e outras informações. Alegações de benefícios precisam seguir o texto aprovado, sem extrapolações. Consulte [Perguntas frequentes sobre rotulagem de suplementos](https://www.gov.br/anvisa/pt-br/assuntos/alimentos/suplementos-alimentares/perguntas-frequentes/7-quais-informacoes-precisam-estar) e [orientação sobre propaganda enganosa](https://www.gov.br/anvisa/pt-br/assuntos/alimentos/suplementos-alimentares/cuidado-com-a-propaganda-enganosa/).

### Conta do cliente

- cadastro e autenticação;
- verificação e recuperação de acesso;
- gerenciamento de sessões;
- endereços;
- histórico e situação de pedidos;
- cancelamentos, devoluções e reembolsos;
- canal para solicitações sobre dados pessoais.

Login não deve ser desenvolvido do zero sem necessidade. A fase futura deve selecionar um provedor consolidado, autenticação segura e regras de autorização no servidor.

### Carrinho e checkout

- preços recalculados no servidor;
- estoque validado no servidor;
- identificação do cliente;
- endereço e cálculo de frete;
- resumo claro antes da confirmação;
- correção de erros antes do pedido;
- aceite das condições aplicáveis;
- criação transacional do pedido;
- confirmação imediata da contratação.

O Decreto nº 7.962/2013 exige informações claras sobre produto, serviço e fornecedor, atendimento facilitado, mecanismos de segurança e respeito ao direito de arrependimento. Consulte o [texto oficial do Decreto do Comércio Eletrônico](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm).

### Pagamentos

- integração com provedor compatível com o negócio;
- cartão, Pix ou outros meios escolhidos pela loja;
- tokenização dos dados sensíveis pelo provedor;
- verificação de webhooks;
- idempotência para não duplicar cobranças ou pedidos;
- tratamento de aprovação, recusa, cancelamento e estorno;
- conciliação financeira;
- prevenção a fraude.

O site da loja não deve armazenar dados completos de cartão. O provedor, o contrato e o modelo de integração precisam ser definidos antes do desenvolvimento.

### Pedidos, estoque e logística

- identificador único do pedido;
- estados controlados: criado, aguardando pagamento, pago, separado, enviado, entregue, cancelado e reembolsado;
- reserva e baixa de estoque;
- prevenção contra venda acima do estoque;
- cálculo de frete e prazo;
- etiqueta e integração com transportadora;
- rastreamento;
- comunicação de alterações ao cliente;
- histórico de ações e auditoria.

### Documentos fiscais

A operação futura deverá definir com contador qual documento fiscal se aplica a cada venda e como será a integração com a Secretaria da Fazenda ou emissor contratado.

Pontos que precisam ser decididos:

- natureza jurídica e regime tributário;
- inscrição estadual e situação cadastral;
- venda interna ou interestadual;
- consumidor final ou empresa;
- NF-e, NFC-e ou outro documento aplicável;
- certificado, credenciamento e ambiente de autorização;
- cancelamento, devolução e contingência;
- guarda dos documentos e conciliação com o pedido.

Nota fiscal de produto não deve ser confundida com NFS-e, que documenta prestação de serviços. O Portal Nacional descreve a [NF-e e seu processo de autorização](https://www.nfe.fazenda.gov.br/portal/sobreNFe.aspx?tipoConteudo=PEhYdxncZBE=), enquanto o SPED descreve a [NFC-e para vendas a consumidor final](https://sped.rfb.gov.br/item/show/1519). Existem exceções conforme o enquadramento; por exemplo, o Governo Federal informa regras próprias de emissão para MEI. Consulte a [orientação oficial sobre nota fiscal do MEI](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes/nota-fiscal-inscricao-estadual-e-ou-municipal/o-microempreendedor-individual-mei-e-obrigado-1).

Não implemente a emissão antes da validação contábil. Uma integração tecnicamente funcional ainda pode estar fiscalmente incorreta.

## Proteção de dados pessoais

Quando houver conta, checkout e pedidos, a loja passará a tratar mais dados pessoais. O projeto deverá incluir:

- inventário dos dados coletados;
- finalidade e base legal de cada tratamento;
- coleta mínima necessária;
- aviso de privacidade claro;
- canal para direitos do titular;
- regras de acesso por função;
- contratos e avaliação de operadores, como hospedagem, pagamentos e logística;
- prazos de retenção e descarte;
- backups protegidos;
- criptografia em trânsito e, quando adequado, em repouso;
- registros de auditoria;
- plano de resposta a incidentes;
- revisão de cookies e rastreadores.

A [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm) estabelece princípios, direitos dos titulares e medidas técnicas e administrativas de segurança. A ANPD possui uma regulamentação simplificada para determinados agentes de pequeno porte, mas continua exigindo medidas essenciais de segurança e um canal para o titular quando não houver encarregado. Consulte a [Resolução CD/ANPD nº 2/2022](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022).

Incidentes que possam causar risco ou dano relevante podem exigir comunicação à ANPD e aos titulares. O processo deve seguir o [Regulamento de Comunicação de Incidente de Segurança](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-aprova-o-regulamento-de-comunicacao-de-incidente-de-seguranca).

Cookies estritamente necessários e ferramentas de publicidade ou análise não têm necessariamente o mesmo tratamento. A escolha das ferramentas deve ocorrer antes de criar banner ou coletar consentimentos sem finalidade definida.

## Informações e políticas voltadas ao consumidor

Antes de aceitar pedidos e pagamentos no site, a operação deverá revisar:

- identificação do fornecedor em local visível;
- CNPJ, endereço e canais de atendimento aplicáveis;
- características essenciais dos produtos;
- preço, frete, despesas e condições;
- disponibilidade e prazo;
- confirmação e comprovante do pedido;
- política de troca, devolução e reembolso;
- exercício do direito de arrependimento;
- atendimento eletrônico e protocolos;
- termos de compra e aviso de privacidade;
- segurança do pagamento e dos dados.

Esses documentos precisam refletir o processo real. Uma política copiada de outra loja pode prometer procedimentos que a JNE não consegue cumprir.

## Segurança técnica mínima da fase futura

- validação de dados no servidor;
- autorização em cada operação protegida;
- senhas tratadas por provedor ou algoritmo adequado;
- segredo somente em variáveis de ambiente;
- proteção contra abuso e limitação de requisições;
- cabeçalhos de segurança;
- dependências atualizadas;
- logs sem exposição desnecessária de dados;
- monitoramento de erros e disponibilidade;
- backups testados;
- ambientes separados;
- revisão de webhooks e integrações;
- testes automatizados dos fluxos críticos.

## Comparação com a JNE atual

| Área | Situação atual | Necessário para e-commerce completo |
| --- | --- | --- |
| Catálogo | Arquivo TypeScript | Banco e painel administrativo |
| Estoque | Valor informativo local | Reserva e baixa transacional |
| Cliente | Sem conta | Autenticação e área do cliente |
| Carrinho | `localStorage` | Validação de preço e estoque no servidor |
| Pedido | Texto no WhatsApp | Registro permanente e estados do pedido |
| Pagamento | Combinado no atendimento | Provedor, webhook, conciliação e estorno |
| Entrega | Combinada no atendimento | Frete, etiqueta e rastreamento |
| Fiscal | Processo não integrado | Documento definido com contador e emissor |
| LGPD | Coleta limitada no site | Governança, aviso, direitos, retenção e segurança |
| Consumidor | Atendimento manual | Políticas, confirmação, cancelamento e protocolos |
| Operação | Sem painel | Administração, permissões, logs e auditoria |

## Ordem recomendada

1. Validar modelo comercial, fiscal e logístico.
2. Levantar requisitos com contador, jurídico e operação.
3. Modelar produtos, clientes, pedidos, pagamentos e estoque.
4. Definir fornecedores de autenticação, banco, pagamento, frete e emissão fiscal.
5. Criar painel de produtos e estoque.
6. Implementar conta e governança de dados.
7. Implementar checkout e pedidos sem pagamento real.
8. Integrar pagamentos em ambiente de testes.
9. Integrar logística e fiscal.
10. Fazer testes de segurança, operação, cancelamento e recuperação.
11. Publicar gradualmente e monitorar.

## Estado deste planejamento

Nenhuma funcionalidade futura descrita nesta página foi implementada. A migração para Next.js cria uma base mais adequada para essas fases, mas a versão atual continua sendo catálogo e carrinho com finalização pelo WhatsApp.

Consulte [[02 - Migração para Next.js]] para entender o que mudou agora.
