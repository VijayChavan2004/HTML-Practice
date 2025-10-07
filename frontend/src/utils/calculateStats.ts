import type { Task } from '../types/Task';

export function calculateStats(tasks: Task[]) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const failed = tasks.filter(t => t.status === 'failed').length;
  const running = tasks.filter(t => t.status === 'running').length;
  const pending = tasks.filter(t => t.status === 'pending').length;

  return { total, completed, failed, running, pending };
}
