import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-mono font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Página não encontrada.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Página inicial
      </Link>
    </div>
  );
}

export default NotFoundPage;
