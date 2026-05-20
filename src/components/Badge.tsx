import type { TodoState } from '../types/api';

interface BadgeProps {
  state: TodoState;
}

const STATE_CONFIG = {
  draft: {
    label: 'Rascunho',
    className: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  },
  todo: {
    label: 'A fazer',
    className: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
  },
  doing: {
    label: 'Em andamento',
    className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  },
  done: {
    label: 'Concluído',
    className: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  },
  trash: {
    label: 'Excluído',
    className: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  },
} satisfies Record<TodoState, { label: string; className: string }>;

function Badge({ state }: BadgeProps) {
  const { label, className } = STATE_CONFIG[state];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}

export default Badge;
