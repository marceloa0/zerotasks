import { describe, expect, it } from 'vitest';
import type { TodoCreate, TodoState } from '../types/api';
import { formatTodoState } from './todo';

describe('formatTodoState', () => {
  it('deve retornar o label correto para cada estado', () => {
    expect(formatTodoState('todo')).toBe('A fazer');
    expect(formatTodoState('doing')).toBe('Em andamento');
    expect(formatTodoState('done')).toBe('Concluído');
  });
});

describe('Todo Interfaces', () => {
  it('deve criar um TodoCreate válido', () => {
    const todo: TodoCreate = {
      title: 'Título teste',
      description: 'Descrição teste',
      state: 'todo',
    };

    expect(todo.title).toBe('Título teste');
    expect(todo.description).toBe('Descrição teste');
    expect(todo.state).toBe('todo');
  });
});

describe('TodoCreate State validation', () => {
  it.each([
    'draft',
    'todo',
    'doing',
    'done',
    'trash',
  ])('deve aceitar o estado: %s', (validState) => {
    const todo: TodoCreate = {
      title: 'Título teste',
      description: 'Descrição teste',
      state: validState as TodoState,
    };

    expect(todo.state).toBe(validState);
  });
});
