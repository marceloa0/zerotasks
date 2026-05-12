import { describe, it } from 'vitest';
import { formatTodoState } from './todo';

describe('formatTodoState', () => {
  it('deve retornar o label correto para cada estado', () => {
    expect(formatTodoState('todo')).toBe('A fazer');
    expect(formatTodoState('doing')).toBe('Em andamento');
    expect(formatTodoState('done')).toBe('Concluído');
  });
});
