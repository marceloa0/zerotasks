import { NavLink, Outlet } from 'react-router-dom';

function MainLayout() {
  const isLoggedIn = true;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            ZeroTasks
          </NavLink>
          <nav className="flex items-center gap-4">
            {isLoggedIn
              ? (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-sm font-medium text-blue-600'
                      : 'text-sm font-medium text-gray-600 hover:text-gray-900'
                  }
                >
                  Dashboard
                </NavLink>
              ) : (
                ''
              )
            }
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-medium text-blue-600'
                  : 'text-sm font-medium text-gray-600 hover:text-gray-900'
              }
            >
              Entrar
            </NavLink>
            <NavLink
              to="/register"
              className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Criar conta
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
