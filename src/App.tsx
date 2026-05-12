import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-md text-center">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">ZeroTasks</h1>
          <p className="text-sm text-gray-700">
            Bem-vindo ao seu gerenciador de tarefas
          </p>
        </div>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Contagem: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
