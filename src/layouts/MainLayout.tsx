import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function MainLayout() {
  const [tema, setTema] = useLocalStorage('tema', 'claro');
  useEffect(() => {
    const root = document.documentElement;
    if (tema === 'escuro') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [tema])
  const isLoggedIn = true;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              ZeroTasks
            </NavLink>
            <nav>
              {isLoggedIn ? (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors duration-200'
                      : 'text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200'
                  }
                >
                  Dashboard
                </NavLink>
              ) : (
                ''
              )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}
              className='p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-colors duration-200'
            >
              {tema === 'claro'
                ? <Moon className='h-4 w-4' />
                : <Sun className='h-4 w-4 text-gray-300' />
              }
            </button>
            <nav className="flex items-center gap-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors duration-200'
                    : 'text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200'
                }
              >
                Entrar
              </NavLink>
              <NavLink
                to="/register"
                className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Criar conta
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
