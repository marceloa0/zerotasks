import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('deve não renderizar button quando não houver prop onDelete', () => {
    render(<TodoCard todo={createMockTodo()} />);

    expect(
      screen.queryByRole('button', { name: /excluir/i })
    ).not.toBeInTheDocument();
  });

  it('deve chamar onDelete com o id correto', async () => {
    const handleDelete = vi.fn();
    const user = userEvent.setup();

    render(
      <TodoCard todo={createMockTodo({ id: 42 })} onDelete={handleDelete} />
    );

    await user.click(screen.getByRole('button', { name: /excluir/i }));

    expect(handleDelete).toHaveBeenCalledWith(42);
  });
});
