import MainLayout from '../components/layout/MainLayout';
import TaskStatusChart from '../components/visualizations/TaskStatusChart';
import ProductivityChart from '../components/visualizations/ProductivityChart';
import TimelineChart from '../components/visualizations/TimelineChart';

export default function Reports() {
  return (
    <MainLayout>
      <div className="grid md:grid-cols-3 gap-4">
        <TaskStatusChart />
        <ProductivityChart />
        <TimelineChart />
      </div>
    </MainLayout>
  );
}
