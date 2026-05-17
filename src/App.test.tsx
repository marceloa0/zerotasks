import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza a página inicial com o título ZeroTasks', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'ZeroTasks' })
    ).toBeInTheDocument();
  });
});
