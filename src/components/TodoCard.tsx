import type { TodoPublic } from '../types/api';
import Badge from './Badge';

interface TodoCardProps {
  todo: TodoPublic;
}

function TodoCard({ todo }: TodoCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-medium text-gray-900">{todo.title}</h3>
        <Badge state={todo.state} />
      </div>
      {todo.description && (
        <p className="text-sm text-gray-500">{todo.description}</p>
      )}
    </div>
  );
}

export default TodoCard;
