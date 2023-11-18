# Desafio 4 - Backend para o Detran

O Detran é um órgão do governo responsável por gerenciar os dados dos motoristas e veículos de um estado. Você foi contratado para desenvolver o backend de um sistema de controle de multas para o Detran. O sistema deve permitir o cadastro de motoristas e veículos, além de permitir o cadastro de multas para os veículos cadastrados. O sistema deve permitir também a consulta de motoristas, seus veículos e multas. O desenvolvedor frontend já está trabalhando no frontend do sistema e já definiu a API que será utilizada. Você deve implementar a API de acordo com a [documentação fornecida](./assets/documentação-api.md).

A arquitetura desse sistema deve ser baseada na arquitetura apresentada no curso. Caso você precise de mais informações das ferramentas utilizadas, você pode consultar a [documentação do Express](https://expressjs.com/), a [documentação do Zod](https://zod.dev/), a [documentação do Typescript](https://www.typescriptlang.org/docs/) e a [documentação do MySQL](https://dev.mysql.com/doc/).

Caso surjam dúvidas, você pode utilizar o canal da capacitação no Slack, contatar algum membro do seu squad ou pedir ajuda.

Você deve realizar um fork deste repositório para a sua conta pessoal no GitHub. A entrega só será considerada válida se estiver incluída em uma release no GitHub. Caso você não saiba como realizar um fork, commit, push e criar uma release no GitHub, será necessário pesquisar ou pedir ajuda. A autonomia também será avaliada neste desafio.

## Requisitos Funcionais

- O sistema deve permitir o cadastro de motoristas.

  - Cada motorista deve ter:
    - CPF
    - nome
    - vencimento da CNH
    - categoria da CNH (A, B, AB)

- O sistema deve permitir o cadastro de veículos.

  - Cada veículo deve ter:
    - placa
    - marca
    - modelo
    - ano
    - cor
  - Cada veículo deve estar associado a um motorista.
  - Um motorista pode ter vários veículos, mas um veículo só pode estar associado a um motorista.

- O sistema deve permitir o cadastro de multas.

  - Cada multa deve ter:
    - valor
    - data
    - pontos de penalidade
    - tipo da infração
      - Velocidade acima da máxima permitida
      - Estacionar em local proibido
      - Dirigir utilizando o celular
      - Dirigir sob efeito de álcool
      - Não utilizar cinto de segurança
      - Avançar o sinal vermelho
  - Cada multa deve estar associada a um veículo.
  - Um veículo pode ter várias multas, mas uma multa só pode estar associada a um veículo.

- O sistema deve permitir a consulta de todos os motoristas cadastrados.

  - A consulta deve retornar uma lista de motoristas com todos os seus dados.

- O sistema deve permitir a consulta de todos os veículos de um motorista.

  - A consulta deve retornar uma lista de veículos com todos os seus dados.
  - Claro que o motorista deve ser informado na consulta.

- O sistema deve permitir a consulta de todas as multas atreladas a um motorista.

  - A consulta deve retornar uma lista de multas com todos os seus dados.
  - As multas devem estar associadas aos veículos dos motoristas, mas os dados dos veículos não precisam ser retornados na consulta.

- O sistema deve permitir a consulta da pontuação de um motorista quando este tiver 10 pontos ou mais.
  - A consulta deve retornar a quantidade de pontos de penalidade de um motorista.
  - Duas colunas devem ser retornadas: "motorista" e "pontos".
  - Os motoristas que não tiverem 10 pontos ou mais não devem ser retornados na consulta.

## Requisitos Não-Funcionais

- **(Importante)** Uma foto do diagrama de entidade e relacionamento `DE-R` e do diagrama lógico de dados `DLD` deve ser incluída na pasta `docs` do repositório.
- O projeto deve ser implementado utilizando a arquitetura apresentada no curso.
- O banco de dados deve ser implementado utilizando o MySQL.
- O uso de bibliotecas externas, além das já incluídas neste repositório, não é permitido.
- Os arquivos fora das pastas `sql`, `repositories`, `routes` e `schemas` não devem ser modificados, com exceção do arquivo `routing.ts` da pasta `src`.

## Entrega

- A entrega do desafio deve ser feita por meio de uma Release no GitHub.
  - Crie a release no seu repositório pessoal e envie o arquivo ZIP pelo Google Classroom.
  - Não inclua a pasta `node_modules` no arquivo ZIP, mas envie todos os outros arquivos, incluindo o `package.json`.
- O trainee não deve excluir o repositório nem a release após a entrega, pois a utilização do GitHub será avaliada.
