import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';

function renderWithRouter(initialPath = '/') {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Página inicial</div>} />
          <Route path="login" element={<div>Página de login</div>} />
          <Route path="register" element={<div>Página de cadastro</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('Main layout', () => {
  it('renderiza o header com o nome da aplicação', () => {
    renderWithRouter();
    expect(screen.getByText('ZeroTasks')).toBeInTheDocument();
  });

  it('renderiza os links de navegação', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: 'Entrar' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Criar conta' })
    ).toBeInTheDocument();
  });

  it('renderiza o conteúdo da rota atual via Outlet', () => {
    renderWithRouter('/');
    expect(screen.getByText('Página inicial')).toBeInTheDocument();
  });

  it('navegar para a página de login ao clicar em Entrar', async () => {
    const user = userEvent.setup();
    renderWithRouter('/');

    await user.click(screen.getByRole('link', { name: 'Entrar' }));

    expect(screen.getByText('Página de login')).toBeInTheDocument();
  });

  it('aplica estilo no link da rota atual', () => {
    renderWithRouter('/login');
    const loginLink = screen.getByRole('link', { name: 'Entrar' });
    expect(loginLink).toHaveClass('text-blue-600');
  });
});
