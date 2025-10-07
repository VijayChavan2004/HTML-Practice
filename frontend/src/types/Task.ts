export interface Task {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string; // ISO date string
  startedAt?: string; // ISO date string
  completedAt?: string; // ISO date string
  durationSeconds?: number;
}
