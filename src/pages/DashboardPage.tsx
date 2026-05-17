import { useEffect } from 'react';

function DashboardPage() {
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = 'Minhas tarefas - ZeroTasks';

    return () => {
      document.title = tituloAnterior;
    };
  }, []);
  
  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Minhas tarefas</h1>
      <p className="text-gray-500 dark:text-gray-400">Lista de tarefas — vem na Aula 6.</p>
    </div>
  );
}

export default DashboardPage;
