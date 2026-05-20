import { act, renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('retorna o valor inicial quando não há nada no localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('chave', 'inicial'));
    expect(result.current[0]).toBe('inicial');
  });

  it('atualiza o valor e persiste no localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('chave', 'inicial'));

    act(() => {
      result.current[1]('novo valor');
    });

    expect(result.current[0]).toBe('novo valor');
    expect(localStorage.getItem('chave')).toBe('"novo valor"');
  });

  it('recupera valor existente no localStorage', () => {
    localStorage.setItem('chave', '"valor salvo"');
    const { result } = renderHook(() => useLocalStorage('chave', 'inicial'));
    expect(result.current[0]).toBe('valor salvo');
  });
});
