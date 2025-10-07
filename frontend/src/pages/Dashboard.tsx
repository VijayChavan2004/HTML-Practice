import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SummaryCards from '../components/dashboard/SummaryCards';
import TaskTable from '../components/dashboard/TaskTable';
import ChartArea from '../components/dashboard/ChartArea';
import GenAIBox from '../components/dashboard/GenAIBox';
import type { Task } from '../types/Task';
import { fetchTasks } from '../services/taskService';

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setTasks([]));
  }, []);

  return (
    <MainLayout>
      <div className="space-y-6">
        <SummaryCards tasks={tasks} />
        <ChartArea />
        <GenAIBox />
        <TaskTable tasks={tasks} />
      </div>
    </MainLayout>
  );
}
