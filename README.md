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

# 📋 Plano de Testes – Sistema Web AutoMotors

**Professora:** Caroline Carvalho Nogueira  
**Turma:** 5º Período de ADS  
**Membros do grupo:** Gabriel Oliveira Martins, Cristiano Damião, Matheus Fernandes, Gustavo Ricardo Gonçalves, Paulo Ximenes, Verônica Ferreira

**Sistema:** AutoMotors  
**Ferramenta de Automação:** Playwright → JavaScript  
**Tipo de Teste:** End-to-End (E2E)  
**Ambiente:** XAMPP + MySQL

---

## 📑 Plano de Testes

### 📁 `acesso.spec.js`

**CT01 — usuário sem login não acessa painel**  
- **Funcionalidade:** Controle de Acesso  
- **Objetivo:** Impedir acesso ao Painel sem autenticação  
- **Tipo:** Segurança / Regra de Negócio  
- **Entrada:** Acesso direto à URL `?pagina=painel`  
- **Resultado Esperado:** Redirecionamento forçado para tela de login  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

**CT02 — usuário sem login não acessa cadastro**  
- **Funcionalidade:** Controle de Acesso  
- **Objetivo:** Impedir acesso ao Cadastro sem autenticação  
- **Tipo:** Segurança / Regra de Negócio  
- **Entrada:** Acesso direto à URL `?pagina=cadastrar`  
- **Resultado Esperado:** Redirecionamento forçado para tela de login  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

**CT03 — usuário sem login não acessa agendamentos**  
- **Funcionalidade:** Controle de Acesso  
- **Objetivo:** Impedir acesso a Agendamentos sem autenticação  
- **Tipo:** Segurança / Regra de Negócio  
- **Entrada:** Acesso direto à URL `?pagina=agendamentos`  
- **Resultado Esperado:** Redirecionamento forçado para tela de login  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

---

### 📁 `agendamento.spec.js`

**CT04 — deve agendar Test Drive com sucesso**  
- **Funcionalidade:** Agendamento de Test Drive  
- **Objetivo:** Validar o fluxo feliz de agendamento com dados corretos  
- **Tipo:** Funcional / E2E  
- **Entrada:** Nome: Gabriel O., Tel: 66999999999, CNH válida, Data: 2026-06-20  
- **Resultado Esperado:** Agendamento realizado com sucesso e URL contendo `sucesso=1`  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

**CT05 — não deve aceitar CNH inválida**  
- **Funcionalidade:** Agendamento de Test Drive  
- **Objetivo:** Bloquear agendamento quando o algoritmo da CNH for inválido  
- **Tipo:** Validação de Erro / Negativo  
- **Entrada:** CNH inválida: `12345678901`  
- **Resultado Esperado:** Operação negada e URL contendo `erro_cnh=1`  
- **Prioridade:** Média  
- **Status:** ✅ Passou  

**CT06 — deve registrar proposta de compra com sucesso**  
- **Funcionalidade:** Vendas e Propostas  
- **Objetivo:** Registrar uma proposta de compra de veículo com sucesso  
- **Tipo:** Funcional / E2E  
- **Entrada:** Nome: Gabriel O., Tel: 66999999999, Forma de Pagamento selecionada  
- **Resultado Esperado:** Proposta gravada com sucesso, URL contendo `sucesso_compra=1` e mensagem `'Sucesso! Sua proposta de compra foi enviada'`  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

**CT07 — não deve aceitar WhatsApp inválido**  
- **Funcionalidade:** Vendas e Propostas  
- **Objetivo:** Bloquear proposta caso o número de telefone/WhatsApp seja inválido  
- **Tipo:** Validação de Erro / Negativo  
- **Entrada:** Telefone com sequência repetida: `11111111111`  
- **Resultado Esperado:** Operação bloqueada e URL contendo `erro_whatsapp=1`  
- **Prioridade:** Média  
- **Status:** ✅ Passou  

---

### 📁 `login.spec.js`

**CT08 — deve permitir login com credenciais válidas**  
- **Funcionalidade:** Autenticação  
- **Objetivo:** Garantir o acesso do administrador com dados corretos  
- **Tipo:** Funcional  
- **Entrada:** Usuário: `admin` / Senha: `admin123`  
- **Resultado Esperado:** Login bem-sucedido e redirecionamento para o Painel (`?pagina=painel`)  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

**CT09 — não deve permitir login com senha incorreta**  
- **Funcionalidade:** Autenticação  
- **Objetivo:** Impedir o acesso de usuários inválidos ou senhas erradas  
- **Tipo:** Validação de Erro / Negativo  
- **Entrada:** Usuário: `usuario_inexistente` / Senha: `senha_errada`  
- **Resultado Esperado:** Login negado, URL contendo `erro_login=1` e mensagem `'Ops! Login incorreto'`  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

---

### 📁 `seguranca.spec.js`

**CT10 — não deve autenticar com SQL Injection**  
- **Funcionalidade:** Segurança do Sistema  
- **Objetivo:** Garantir resiliência da tela de login contra invasão por SQL Injection  
- **Tipo:** Segurança (Crítico)  
- **Entrada:** Campo Usuário: `' OR 1=1 --` / Senha: `qualquercoisa`  
- **Resultado Esperado:** Tentativa bloqueada e página exibindo `'Login incorreto'`  
- **Prioridade:** Crítica  
- **Status:** ✅ Passou  

**CT11 — não deve executar código HTML ou JavaScript em campos de texto**  
- **Funcionalidade:** Segurança do Sistema  
- **Objetivo:** Garantir que o sistema não seja vulnerável a ataques XSS  
- **Tipo:** Segurança (Crítico)  
- **Entrada:** Campo Usuário: `<script>alert("xss")</script>`  
- **Resultado Esperado:** Script sanitizado pelo backend, página sem executar a tag `<script>`  
- **Prioridade:** Crítica  
- **Status:** ✅ Passou  

---

### 📁 `fluxo-completo-cliente.spec.js`

**CT12 — Fluxo completo cliente**  
- **Funcionalidade:** Jornada do Cliente Final  
- **Objetivo:** Validar a navegação completa do cliente do estoque até a compra  
- **Tipo:** E2E (End-to-End)  
- **Entrada:** Navegação Home → Estoque → Detalhes → Dados: Neymar Santos Junior  
- **Resultado Esperado:** Fluxo concluído sem quebras, URL contendo `sucesso_compra=1` e mensagem `'Sucesso! Sua proposta de compra foi enviada'`  
- **Prioridade:** Alta  
- **Status:** ✅ Passou  

---

## 📝 Relatório Técnico

### 1. Introdução e Objetivo

Este relatório técnico apresenta a aplicação prática de conceitos de Qualidade e Teste de Software sobre o sistema web AutoMotors. O foco desta atividade consistiu estritamente em planejar, automatizar, executar e documentar os comportamentos já implementados no sistema através do framework Playwright. Os testes visam comprovar que a aplicação responde corretamente tanto a fluxos normais de uso quanto a tentativas de inserção de dados inválidos e ataques de segurança.

### 2. Ambiente e Execução do Sistema

| Componente | Configuração |
|---|---|
| Servidor | XAMPP |
| Servidor Web | Apache (use a porta que estiver rodando) |
| Banco de Dados | MySQL |
| Nome do Banco | `concessionaria` |
| Arquivo SQL | `app/Database/create.sql` |
| URL Local | `http://localhost/Concessionaria-PCGM/public/index.php` |

### 3. Organização dos Testes Automatizados

| Arquivo | Cobertura |
|---|---|
| `acesso.spec.js` | Controle de rotas privadas e necessidade de login (CT01 a CT03) |
| `agendamento.spec.js` | Regras e formulários de agendamento/vendas (CT04 a CT07) |
| `login.spec.js` | Login com dados válidos e inválidos (CT08 e CT09) |
| `seguranca.spec.js` | SQL Injection e XSS (CT10 e CT11) |
| `fluxo-completo-cliente.spec.js` | Jornada completa do usuário final (CT12) |

### 4. Análise de Falhas Encontradas e Sugestões de Correção

Com base nos cenários negativos executados (CT05 — CNH, CT07 — WhatsApp, CT09 — login inválido e CT10/CT11 — segurança), constatou-se que o sistema respondeu de forma robusta e segura:

- O backend validou com sucesso strings maliciosas de SQL Injection, impedindo bypass da tela de login
- Barrou o input de script malicioso, sanitizando a saída (proteção XSS)
- Tratou corretamente formatos inválidos de CNH e telefone, redirecionando para os parâmetros de erro esperados
- Exibiu mensagens de erro amigáveis ao usuário por exemplo expect(`'Ops! Login incorreto'`)

Nenhuma falha crítica foi encontrada nos cenários testados.
