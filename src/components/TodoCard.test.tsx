import { render, screen } from '@testing-library/react';
import type { TodoPublic } from '../types/api';
import TodoCard from './TodoCard';

// Factory: cria um todo válido com valores padrão, permitindo overrides
function createMockTodo(overrides?: Partial<TodoPublic>): TodoPublic {
  return {
    id: 1,
    title: 'Aprender TypeScript',
    description: 'Estudar os conceitos básicos de tipagem',
    state: 'todo',
    user_id: 1,
    created_at: '2024-01-01T10:00:00',
    updated_at: '2024-01-01T10:00:00',
    ...overrides,
  };
}

describe('TodoCard', () => {
  it('deve renderizar o título da tarefa', () => {
    render(<TodoCard todo={createMockTodo()} />);
    expect(screen.getByText('Aprender TypeScript')).toBeInTheDocument();
  });

  it('deve renderizar a descrição quando presente', () => {
    render(
      <TodoCard todo={createMockTodo({ description: 'Minha descrição' })} />
    );
    expect(screen.getByText('Minha descrição')).toBeInTheDocument();
  });

  it('deve não renderizar a descrição quando vazia', () => {
    render(<TodoCard todo={createMockTodo({ description: '' })} />);
    expect(screen.queryByText('Minha descrição')).not.toBeInTheDocument();
  });

  it('deve exibir o badge com o estado correto', () => {
    render(<TodoCard todo={createMockTodo({ state: 'done' })} />);
    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });
});
