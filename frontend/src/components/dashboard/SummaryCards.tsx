import { calculateStats } from '../../utils/calculateStats';
import type { Task } from '../../types/Task';

export default function SummaryCards({ tasks }: { tasks: Task[] }) {
  const stats = calculateStats(tasks);
  const items = [
    { label: 'Total', value: stats.total },
    { label: 'Completed', value: stats.completed },
    { label: 'Running', value: stats.running },
    { label: 'Pending', value: stats.pending },
    { label: 'Failed', value: stats.failed },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg bg-white/5 border border-white/10 p-4">
          <div className="text-sm text-white/60">{item.label}</div>
          <div className="text-2xl font-semibold">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
