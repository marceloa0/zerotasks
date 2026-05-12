import type { TodoState } from '../types/api';

const STATE_LABELS: Record<TodoState, string> = {
  draft: 'Rascunho',
  todo: 'A fazer',
  doing: 'Em andamento',
  done: 'Concluído',
  trash: 'Excluído',
};

export function formatTodoState(state: TodoState): string {
  return STATE_LABELS[state];
}
