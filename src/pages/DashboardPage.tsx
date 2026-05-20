import TodoCard from '../components/TodoCard';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useTodos from '../hooks/useTodos';
import type { TodoState } from '../types/api';

const FILTROS: { label: string; valor: TodoState | 'all' }[] = [
  { label: 'Todas', valor: 'all' },
  { label: 'Rascunho', valor: 'draft' },
  { label: 'A fazer', valor: 'todo' },
  { label: 'Em andamento', valor: 'doing' },
  { label: 'Concluídas', valor: 'done' },
  { label: 'Excluídas', valor: 'trash' },
];

function DashboardPage() {
  const { todos, filtro, setFiltro, total } = useTodos();
  useDocumentTitle('Minhas tarefas - ZeroTasks');

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Minhas Tarefas
          <span className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-400">
            {total} no total
          </span>
        </h1>
      </div>

      <div className="flex gap-2 mb-6">
        {FILTROS.map(({ label, valor }) => (
          <button
            type="button"
            key={valor}
            onClick={() => setFiltro(valor)}
            className={
              filtro === valor
                ? 'px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white'
                : 'px-4 py-2 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/50'
            }
          >
            {label}
          </button>
        ))}
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          Nenhuma tarefa encontrada
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
