import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">ZeroTasks</h1>
      <p className="text-lg text-gray-600 mb-8">
        Gerencie suas tarefas com simplicidade.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Entrar
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
