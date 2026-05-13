import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('deve renderizar o título da aplicação', () => {
    render(<App />);
    expect(screen.getByText('ZeroTasks')).toBeInTheDocument();
  });
});
