# ZeroTasks

Uma aplicação frontend para gerenciamento de tarefas construída com React e TypeScript. Esta aplicação consome uma API desenvolvida em FastAPI para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em tarefas.

## Funcionalidades

- Visualizar lista de tarefas
- Criar novas tarefas
- Editar tarefas existentes
- Marcar tarefas como concluídas
- Deletar tarefas
- Interface responsiva com Tailwind CSS

## Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting/Formatação**: Biome
- **Testes**: Vitest, Testing Library
- **Backend API**: FastAPI (Python)

## Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)
- Uma instância da API FastAPI rodando (consulte o repositório do backend para instruções)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/zerotasks.git
   cd zerotasks
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Configure a URL da API no código (se necessário, ajuste em `src/` para apontar para o endpoint da API FastAPI).

## Como Usar

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   ```

2. Abra o navegador em `http://localhost:5173` (porta padrão do Vite).

3. Certifique-se de que a API FastAPI esteja rodando e acessível.

## Scripts Disponíveis

- `pnpm run dev`: Inicia o servidor de desenvolvimento
- `pnpm run build`: Compila a aplicação para produção
- `pnpm run preview`: Visualiza a build de produção
- `pnpm run lint`: Executa o linter
- `pnpm run format`: Formata o código
- `pnpm run check`: Verifica e corrige problemas de código
- `pnpm run test`: Executa os testes
- `pnpm run test:run`: Executa os testes uma vez
- `pnpm run test:coverage`: Executa os testes com cobertura

## API

Esta aplicação consome uma API FastAPI para gerenciamento de tarefas. Os endpoints típicos incluem:

- `GET /todos`: Lista todas as tarefas
- `POST /todos`: Cria uma nova tarefa
- `PATCH /todos/{id}`: Atualiza uma tarefa
- `DELETE /todos/{id}`: Deleta uma tarefa

Certifique-se de que a API esteja configurada corretamente e rodando antes de usar a aplicação.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.