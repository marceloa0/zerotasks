import { useEffect } from 'react';

function useDocumentTitle(title: string) {
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = title;

    return () => {
      document.title = tituloAnterior;
    };
  }, [title]);
}

export default useDocumentTitle;
