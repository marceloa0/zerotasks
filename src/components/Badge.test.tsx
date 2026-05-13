import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Badge from './Badge';

describe('Badge', () => {
  it('deve renderizar o label "Rascunho" para estado draft', () => {
    render(<Badge state="draft" />);
    expect(screen.getByText('Rascunho')).toBeInTheDocument();
  });

  it('deve renderizar o label "A fazer" para estado todo', () => {
    render(<Badge state="todo" />);
    expect(screen.getByText('A fazer')).toBeInTheDocument();
  });

  it('deve renderizar o label "Em andamento" para estado doing', () => {
    render(<Badge state="doing" />);
    expect(screen.getByText('Em andamento')).toBeInTheDocument();
  });

  it('deve renderizar o label "Concluído" para estado done', () => {
    render(<Badge state="done" />);
    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });

  it('deve renderizar o label "Excluído" para estado trash', () => {
    render(<Badge state="trash" />);
    expect(screen.getByText('Excluído')).toBeInTheDocument();
  });
});
