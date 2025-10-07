import type { Task } from '../../types/Task';
import { formatDate } from '../../utils/formatDate';

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <div className="overflow-auto rounded-lg border border-white/10">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Created</th>
            <th className="px-4 py-2">Started</th>
            <th className="px-4 py-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} className="odd:bg-white/[0.02]">
              <td className="px-4 py-2 font-medium">{t.name}</td>
              <td className="px-4 py-2 capitalize">{t.status}</td>
              <td className="px-4 py-2 capitalize">{t.priority}</td>
              <td className="px-4 py-2">{formatDate(t.createdAt)}</td>
              <td className="px-4 py-2">{formatDate(t.startedAt)}</td>
              <td className="px-4 py-2">{formatDate(t.completedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
