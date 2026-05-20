import { act, renderHook } from '@testing-library/react';
import useTodos from './useTodos';

describe('useTodos', () => {
  it('retorna todos os resultados com o filtro inicial "all"', () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.filtro).toBe('all');
    expect(result.current.todos.length).toBeGreaterThan(0);
    expect(result.current.total).toBe(result.current.todos.length);
  });

  it('filtra todos pelo estado', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setFiltro('done');
    });

    expect(result.current.filtro).toBe('done');
    expect(result.current.todos.every((todo) => todo.state === 'done')).toBe(
      true
    );
  });

  it('retorna lista vazia quando não há todos no estado filtrado', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setFiltro('todo');
    });

    const todosNoEstado = result.current.todos;
    expect(todosNoEstado.every((todo) => todo.state === 'todo')).toBe(true);
  });

  it('restaura todos ao resetar filtro para "all"', () => {
    const { result } = renderHook(() => useTodos());
    const totalInicial = result.current.total;

    act(() => {
      result.current.setFiltro('done');
    });

    act(() => {
      result.current.setFiltro('all');
    });

    expect(result.current.todos.length).toBe(totalInicial);
  });

  it('muda estado de todo para doing via toggleTodo', () => {
    const { result } = renderHook(() => useTodos());

    const todo = result.current.todos.find((todo) => todo.state === 'todo');

    expect(todo).toBeDefined();

    if (!todo) {
      throw new Error('Todo não encontrado');
    }

    act(() => {
      result.current.toggleTodo(todo);
    });

    const updatedTodo = result.current.todos.find((t) => t.id === todo.id);

    expect(updatedTodo?.state).toBe('doing');
  });

  it('muda estado de doing para todo via toggleTodo', () => {
    const { result } = renderHook(() => useTodos());

    const todo = result.current.todos.find((todo) => todo.state === 'doing');

    expect(todo).toBeDefined();

    if (!todo) {
      throw new Error('Todo não encontrado');
    }

    act(() => {
      result.current.toggleTodo(todo);
    });

    const updatedTodo = result.current.todos.find((t) => t.id === todo.id);

    expect(updatedTodo?.state).toBe('todo');
  });
});
