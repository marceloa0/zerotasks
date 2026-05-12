import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('deve renderizar o título da aplicação', () => {
    render(<App />);
    expect(screen.getByText('ZeroTasks')).toBeInTheDocument();
  });

  it('deve incrementar o contador ao clicar no botão', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /contagem: 0/i });
    await user.click(button);

    expect(
      screen.getByRole('button', { name: /contagem: 1/i })
    ).toBeInTheDocument();
  });
});
