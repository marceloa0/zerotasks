import { useMemo, useState } from 'react';
import type { TodoPublic, TodoState } from '../types/api';

const TODOS_MOCK: TodoPublic[] = [
  {
    id: 1,
    title: 'Aprender TypeScript',
    description: 'Estudar os conceitos básicos de tipagem',
    state: 'done',
    user_id: 1,
    created_at: '2024-01-01T10:00:00',
    updated_at: '2024-01-02T10:00:00',
  },
  {
    id: 2,
    title: 'Configurar React Router',
    description: 'Adicionar roteamento ao zerotasks',
    state: 'done',
    user_id: 1,
    created_at: '2024-01-03T10:00:00',
    updated_at: '2024-01-04T10:00:00',
  },
  {
    id: 3,
    title: 'Criar formulário de login',
    description: null as unknown as string,
    state: 'doing',
    user_id: 1,
    created_at: '2024-01-05T10:00:00',
    updated_at: '2024-01-05T10:00:00',
  },
  {
    id: 4,
    title: 'Integrar com a API',
    description: 'Conectar o frontend ao backend FastAPI',
    state: 'todo',
    user_id: 1,
    created_at: '2024-01-06T10:00:00',
    updated_at: '2024-01-06T10:00:00',
  },
];

interface UseTodosReturn {
  todos: TodoPublic[];
  filtro: TodoState | 'all';
  setFiltro: (filtro: TodoState | 'all') => void;
  total: number;
  toggleTodo: (todo: TodoPublic) => void;
}

function useTodos(): UseTodosReturn {
  const [filtro, setFiltro] = useState<TodoState | 'all'>('all');
  const [todosState, setTodosState] = useState<TodoPublic[]>(TODOS_MOCK);

  const todos = useMemo(() => {
    if (filtro === 'all') return todosState;
    return todosState.filter((todo) => todo.state === filtro);
  }, [filtro, todosState]);

  function toggleTodo(todo: TodoPublic) {
    setTodosState((prevTodos) => 
      prevTodos.map((prevTodo) => {
        if (prevTodo.id !== todo.id) return prevTodo;

        return {
          ...prevTodo,
          state: prevTodo.state === 'todo' ? 'doing' : 'todo',
        };
      })
    );
  }

  return {
    todos,
    filtro,
    setFiltro,
    total: TODOS_MOCK.length,
    toggleTodo,
  };
}

export default useTodos;
