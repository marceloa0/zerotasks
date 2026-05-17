import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

function renderNotFountPage() {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
}

describe('NotFoundPage', () => {
  it('renderiza mensagem de erro', () => {
    renderNotFountPage();
    expect(screen.getByText('Página não encontrada.')).toBeInTheDocument();
  });

  it('link aponta para Home', () => {
    renderNotFountPage();
    expect(
      screen.getByRole('link', { name: 'Página inicial' })
    ).toHaveAttribute('href', '/');
  });
});
