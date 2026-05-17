import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">ZeroTasks</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Gerencie suas tarefas com simplicidade.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Entrar
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
