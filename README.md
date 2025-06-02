# 💻 Projeto de Testes E2E com Cypress

Este projeto é uma automação de testes end-to-end (E2E) utilizando o **Cypress**.  
A proposta é validar os fluxos de **login** e **criação de usuário**, garantindo que essas funcionalidades estejam funcionando corretamente.  
É um projeto pessoal, desenvolvido com o objetivo de praticar e consolidar conhecimentos em testes automatizados com Cypress.

---

## 📁 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)  
- Node.js  
- JavaScript

---

## 🚀 Como executar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/eduardorodri/cypress-studies.git
```
2. **Acesse a pasta do projeto:**
```bash
cd cypress-studies
```
3. **Instale as dependências:**
```bash
npm install
```
4. **Abra o Cypress em modo interativo:**
```bash
npx cypress open
```
**Ou, se preferir rodar os testes diretamente no terminal:**
```bash
npx cypress run
```
## 📌 Estrutura dos testes

Os testes estão localizados dentro da pasta `cypress/e2e/` e cobrem os seguintes cenários:


- ✅ Login com credenciais válidas e invalidas
- ✅ Edição de usuario na pag "My info" com dados randômicos
- ❌ Validação de mensagens de erro ao inserir dados incorretos  

---

## 📎 Observações

Este é um projeto de estudos, com foco na prática de automação de testes utilizando boas práticas e estruturação simples.  
Futuramente, novos fluxos poderão ser adicionados conforme a evolução dos estudos.



