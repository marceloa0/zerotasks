import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">ZeroTasks</h1>
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
