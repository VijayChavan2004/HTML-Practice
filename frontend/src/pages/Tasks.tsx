import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import TaskTable from '../components/dashboard/TaskTable';
import type { Task } from '../types/Task';
import { fetchTasks } from '../services/taskService';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setTasks([]));
  }, []);
  return (
    <MainLayout>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <TaskTable tasks={tasks} />
    </MainLayout>
  );
}
