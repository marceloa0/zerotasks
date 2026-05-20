import type { TodoPublic } from '../types/api';
import Badge from './Badge';

interface TodoCardProps {
  todo: TodoPublic;
  onDelete?: (id: number) => void;
}

function TodoCard({ todo, onDelete }: TodoCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50 p-4 shadow-sm dark:shadow-none">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-medium text-gray-900 dark:text-gray-200">{todo.title}</h3>
        <Badge state={todo.state} />
      </div>
      {todo.description && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{todo.description}</p>
      )}
      {onDelete && (
        <div className="mt-4 flex justify-end border-t pt-3">
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="text-sm font-medium text-red-600 hover:text-red-800"
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoCard;
