# 🎭 Automação de Testes com Playwright

Atividade Avaliativa Qualidade & Teste de Software

## 📸 Demonstração / Prints!
<img width="870" height="172" alt="image" src="https://github.com/user-attachments/assets/8194f0a1-077b-4331-8632-1ffa50a5b8e9" />


<img width="982" height="588" alt="image" src="https://github.com/user-attachments/assets/a2235528-3f4d-457f-b6c6-58d6621ee5a8" />
<img width="996" height="773" alt="image" src="https://github.com/user-attachments/assets/a8c4d4de-0382-4f2c-ae47-5a9f01546edb" />
<img width="990" height="413" alt="image" src="https://github.com/user-attachments/assets/0055ce53-758f-44a7-a93e-62d4caaa7deb" />
<img width="994" height="413" alt="image" src="https://github.com/user-attachments/assets/2f5d3c17-731c-40e2-b078-8c11e3683b26" />
test.use({ launchOptions: { slowMo: 2000 } }); para deixar visivel cada passo 
e
await page.waitForTimeout(5000); por isso demorou 25 segundos
<img width="986" height="231" alt="image" src="https://github.com/user-attachments/assets/85a71e40-e99c-4002-b6f8-a73ec25179de" />


<img width="1053" height="506" alt="image" src="https://github.com/user-attachments/assets/be920f64-379d-48e7-9561-7f6e9178f412" />
<img width="1370" height="516" alt="image" src="https://github.com/user-attachments/assets/08d7b6ab-f445-4e36-9d78-89b331c4b060" />



## Instruções para Execução do Sistema e Testes Automatizados

## 1. Pré-requisitos do Sistema Web
1. Instale e abra o **XAMPP**.
2. Ajuste a URL se rodar na porta do Apache.
3. Ative os módulos **Apache** e **MySQL** no XAMPP.
4. O sistema estará acessível em: `https://github.com/NotlistForU/Concessionaria-PCGMV.git`
5. Use o git clone `https://github.com/NotlistForU/Concessionaria-PCGMV.git` dentro do xamp/htdocs/
6. Acesse o `phpMyAdmin`, crie um banco de dados chamado `concessionaria`.
7. Importe o arquivo SQL localizado em: `app/Database/create.sql` e depois os inserts `app/Database/insertsExemplos.sql`.

## 2. Como Rodar os Testes (Playwright)
1. Abra o terminal na raiz do projeto onde estão os testes.
2. Certifique-se de ter o Node.js instalado e execute o comando para instalar as dependências:
   ```bash
   npm install
   ```
3. Para rodar todos os testes em modo oculto (headless):
   ```bash
   npx playwright test
   ```
4. Para visualizar o relatório detalhado dos testes após a execução:
   ```bash
   npx playwright show-report
   ```
5. Para rodar o fluxo completo do cliente, acesse o arquivo fluxo-completo-cliente.spec.js, descomente as linhas de codigo // test.use({ launchOptions: { slowMo: 2000 } }); e // await page.waitForTimeout(5000);
e rode o comando:
```bash
   npx playwright test tests/fluxo-completo-cliente.spec.js --headed
```
