---
title: Checkup do catálogo
description: Conferência item a item de imagem, dados comerciais, rótulo e pendências antes da publicação.
tags:
  - catálogo
  - auditoria
  - manutenção
---

# Checkup do catálogo

Conferência atualizada em 5 de setembro de 2026. O catálogo possui 25 produtos ativos. Nenhum valor nutricional foi copiado de outro sabor sem confirmação do fabricante ou do rótulo correspondente.

## Resultado por produto

| Produto                  | Imagem                                 | Preço e estoque                         | Rótulo                                                  | Próxima ação                                                                           |
| ------------------------ | -------------------------------------- | --------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Whey Nutra Gold 3W 900 g | Seis sabores; morango com foto da loja | Confirmados; estoque separado por sabor | Torta de Limão conferida                                | Fotografar o verso de Chocolate, Leitinho, Morango, Doce de leite e Açaí               |
| Hydro Protein Nyer 820 g | Quatro sabores com foto própria        | Preço e estoque total confirmados       | Tabela e ingredientes conferidos por sabor              | Separar o estoque por sabor quando a loja fizer essa contagem                          |
| Whey Gourmet Nyer 1 kg   | Seis sabores com foto própria          | Sob consulta                            | Tabela e fórmula-base oficiais                          | Informar preço e estoque da JNE                                                        |
| Beef Protein Nyer 900 g  | Duas opções com foto própria           | Sob consulta                            | Tabela e fórmula-base oficiais                          | Informar preço e estoque da JNE                                                        |
| Creatina Absolut 300 g   | Foto oficial                           | Confirmados                             | Creatina monohidratada e laudo oficial conferidos       | Sem pendência técnica imediata                                                         |
| Creatina Nyer 300 g      | Foto oficial                           | Preço confirmado; estoque zerado        | Tabela e ingredientes conferidos                        | Atualizar o estoque quando houver reposição                                            |
| Maniac Black 300 g       | Imagem de referência                   | Confirmados                             | Tabela e ingredientes cadastrados                       | Substituir pela foto exata da embalagem vendida                                        |
| Dark Pump Nyer 300 g     | Três sabores com foto própria          | Preço e estoque total confirmados       | Tabela e fórmula-base oficiais                          | Separar o estoque por sabor                                                            |
| Termogênico Brutal Nyer  | Foto oficial                           | Confirmados                             | Ativos e ingredientes oficiais                          | Sem pendência técnica imediata                                                         |
| Multivitamínico Nyer     | Foto frontal da loja                   | Confirmados                             | Tabela, ingredientes e alergênico conferidos            | Fotografar o verso da embalagem atual                                                  |
| Gummy Hair 180 g         | Quatro sabores com foto própria        | Sob consulta                            | Tabela e ingredientes da linha Sabores                  | Informar preço e estoque da JNE                                                        |
| Cabelo, Pele & Unha      | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela transcrita                                       | Fotografar ingredientes com maior nitidez e informar preço e estoque                   |
| L-Carnitina 2000         | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela transcrita                                       | Fotografar ingredientes com maior nitidez e informar preço e estoque                   |
| Beta-Alanina Bluebooster | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela e ingrediente conferidos                         | Informar preço e estoque da JNE                                                        |
| Magnésio & Inositol      | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela e ingredientes transcritos                       | Informar preço e estoque da JNE                                                        |
| UCII Nutra Gold          | Galeria da loja: frente e rótulo       | Sob consulta                            | Composição conferida                                    | Informar preço e estoque da JNE                                                        |
| Super Abdomen            | Galeria da loja: frente e rótulo       | Sob consulta                            | Cafeína legível; cromo incompleto                       | Fotografar a tabela e os ingredientes com maior nitidez                                |
| Coenzima Q10 Nutra Gold  | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela e ingredientes transcritos                       | Informar preço e estoque da JNE                                                        |
| Treonato de Magnésio     | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela e ingredientes transcritos                       | Informar preço e estoque da JNE                                                        |
| Ômega 3 Nutra Gold       | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela, ingredientes e alergênico transcritos           | Informar preço e estoque da JNE                                                        |
| Hair Bomb Nutra Gold     | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela transcrita                                       | Fotografar ou obter a lista oficial completa de ingredientes; informar preço e estoque |
| Nutra Energy             | Galeria da loja: frente e rótulo       | Sob consulta                            | Tabela, ingredientes e declaração de glúten transcritos | Informar preço e estoque da JNE                                                        |
| Garrafa Inox             | Imagem licenciada de referência        | Sob consulta                            | Não se aplica                                           | Fotografar o modelo real e informar capacidade, cor, preço e estoque                   |
| Coqueteleira 500 ml      | Imagem licenciada de referência        | Sob consulta                            | Não se aplica                                           | Fotografar o modelo real e informar cor, material, preço e estoque                     |
| Coqueteleira 750 ml      | Imagem licenciada de referência        | Sob consulta                            | Não se aplica                                           | Fotografar o modelo real e informar cor, material, preço e estoque                     |

## Itens mantidos fora da vitrine

Ioimbina & Long Jack, Tribullus Gold e Diamond permanecem com `ativo: false`. BCAA e glutamina demonstrativos também continuam desativados. Consulte [[03 - Fontes e pendências do catálogo]] para os motivos sanitários e comerciais.

## Melhorias aplicadas durante o checkup

- ingredientes oficiais adicionados à Creatina Absolut, ao Termogênico Brutal e ao Multivitamínico Nyer;
- ingredientes legíveis das embalagens adicionados ao Magnésio & Inositol, Coenzima Q10 e Nutra Energy;
- descrição do Whey Nutra Gold corrigida para não atribuir os valores de Torta de Limão aos outros sabores;
- validação automática criada para detectar IDs repetidos, preço ou estoque inválido e divergência na soma do estoque das variações;
- aliases antigos corrigidos para não encaminhar o cliente a um produto diferente;
- botões e filtros ampliados para toque no celular;
- foco de teclado, link para pular ao conteúdo, estado da página atual e menu móvel melhorados;
- grade do catálogo ajustada para uma coluna em celulares estreitos;
- texto antigo de produtos demonstrativos removido do rodapé;
- botões de quantidade impedem valores abaixo de um ou acima do estoque disponível.
- 29 fotos reais normalizadas e vinculadas ao catálogo em galerias de frente e rótulo;
- textos alternativos e botões de galeria adicionados para teclado e leitores de tela;
- procedimento de tratamento reproduzível documentado sem edição generativa do conteúdo dos rótulos.

## Critério para concluir as pendências

Uma pendência só deve ser marcada como resolvida depois de comparar o nome, a versão, o peso e o sabor da embalagem. Preço e estoque devem vir da JNE. Tabela, ingredientes, alergênicos, lactose e glúten devem vir do rótulo da mesma variação ou de uma publicação oficial que declare a fórmula compartilhada.
