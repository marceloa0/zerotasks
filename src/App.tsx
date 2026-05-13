import { useState } from 'react';
import TodoCard from './components/TodoCard';
import type { TodoPublic } from './types/api';

const MOCK_TODOS: TodoPublic[] = [
  {
    id: 1,
    title: 'Configurar o projeto',
    description: 'Vite, Biome, Tailwind e Vitest',
    state: 'done',
    user_id: 1,
    created_at: '2024-01-01T09:00:00',
    updated_at: '2024-01-01T09:00:00',
  },
  {
    id: 2,
    title: 'Aprender TypeScript',
    description: 'Tipos, interfaces, generics e o tsconfig',
    state: 'doing',
    user_id: 1,
    created_at: '2024-01-02T10:00:00',
    updated_at: '2024-01-02T10:00:00',
  },
  {
    id: 3,
    title: 'Construir os componentes',
    description: 'Badge, TodoCard e composição de componentes',
    state: 'todo',
    user_id: 1,
    created_at: '2024-01-03T11:00:00',
    updated_at: '2024-01-03T11:00:00',
  },
];

function App() {
  const [todos, setTodos] = useState<TodoPublic[]>(MOCK_TODOS);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">ZeroTasks</h1>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          Suas tarefas
        </h2>
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
