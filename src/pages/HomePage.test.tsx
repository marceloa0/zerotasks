import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

function renderHomePage() {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe('HomePage', () => {
  it('renderiza o título da aplicação', () => {
    renderHomePage();
    expect(
      screen.getByRole('heading', { name: 'ZeroTasks' })
    ).toBeInTheDocument();
  });

  it('renderiza os botões de ação', () => {
    renderHomePage();
    expect(screen.getByRole('link', { name: 'Entrar' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Criar conta' })
    ).toBeInTheDocument();
  });

  it('o link Entrar aponta para /login', () => {
    renderHomePage();
    expect(screen.getByRole('link', { name: 'Entrar' })).toHaveAttribute(
      'href',
      '/login'
    );
  });
});
