import { renderHook } from '@testing-library/react';
import useDocumentTitle from './useDocumentTitle';

describe('useDocumentTitle', () => {
  it('o título altera ao renderizar', () => {
    renderHook(() => useDocumentTitle('Título novo'));
    expect(document.title).toBe('Título novo');
  });

  it('restaura título original ao desmontar', () => {
    document.title = 'Título original'
    const { unmount } = renderHook(() => useDocumentTitle('Título temporário'))
    expect(document.title).toBe('Título temporário')
    
    unmount()
    expect(document.title).toBe('Título original')
  })
});
