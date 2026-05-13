import type { TodoPublic } from '../types/api';
import Badge from './Badge';

interface TodoCardProps {
  todo: TodoPublic;
  onDelete?: (id: number) => void;
}

function TodoCard({ todo, onDelete }: TodoCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-medium text-gray-900">{todo.title}</h3>
        <Badge state={todo.state} />
      </div>
      {todo.description && (
        <p className="text-sm text-gray-500">{todo.description}</p>
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
