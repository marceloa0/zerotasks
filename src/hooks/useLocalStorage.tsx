import { useEffect, useState } from 'react';

function useLocalStorage<T>(chave: string, valorInicial: T) {
  const [valor, setValor] = useState<T>(() => {
    try {
      const item = localStorage.getItem(chave);
      return item ? (JSON.parse(item) as T) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // localStorage pode estar desabilitado em modo privado em alguns browsers
    }
  }, [chave, valor]);

  return [valor, setValor] as const;
}

export default useLocalStorage;
