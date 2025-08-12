# POC Cypress

Este repositório contém uma Prova de Conceito (POC) para automação de testes utilizando o Cypress, uma ferramenta de automação de testes JavaScript para a web.

## Sobre o Cypress

Cypress é um framework de testes open-source moderno, projetado especificamente para a web. Ele oferece uma experiência de desenvolvimento amigável com sua sintaxe intuitiva e recursos de recarregamento em tempo real. O Cypress é conhecido por sua facilidade de uso e por ser uma ferramenta poderosa para testes de ponta a ponta em aplicações web.

Ele se integra perfeitamente com fluxos de trabalho de desenvolvimento contemporâneos, incluindo pipelines de CI/CD, e sua compatibilidade com ferramentas como Jenkins e suporte a JavaScript o tornam um ativo valioso em ambientes de desenvolvimento ágil.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
├── cypress/
│   ├── e2e/ (contém os arquivos de teste end-to-end)
│   ├── fixtures/ (dados de teste estáticos)
│   ├── reports/ (relatórios de teste gerados)
│   └── support/ (comandos e configurações de suporte)
├── node_modules/
├── cypress.config.js (arquivo de configuração do Cypress)
├── package-lock.json
└── package.json
```

## Pré-requisitos

Para executar este projeto, você precisará ter instalado:

*   Node.js

## Instalação

1.  Clone este repositório:

    ```bash
    git clone https://github.com/alicemalzac/POC_Cypress.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd POC_Cypress
    ```

3.  Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Executando os Testes

Para abrir a interface do Cypress e executar os testes interativamente:

```bash
npx cypress open
```

Para executar os testes via linha de comando (headless):

```bash
npx cypress run
```

Este comando executará todos os testes configurados no diretório `cypress/e2e/` e gerará relatórios na pasta `cypress/reports/` (se configurado).


