import { apiClient } from './apiClient';
import type { Task } from '../types/Task';
import type { ApiResponse } from '../types/ApiResponse';

export const fetchTasks = async (): Promise<ApiResponse<Task[]>> => {
  const { data } = await apiClient.get<ApiResponse<Task[]>>('/tasks');
  return data;
};

export const createTask = async (task: Partial<Task>): Promise<ApiResponse<Task>> => {
  const { data } = await apiClient.post<ApiResponse<Task>>('/tasks', task);
  return data;
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<ApiResponse<Task>> => {
  const { data } = await apiClient.put<ApiResponse<Task>>(`/tasks/${id}`, updates);
  return data;
};

export const deleteTask = async (id: string): Promise<ApiResponse<null>> => {
  const { data } = await apiClient.delete<ApiResponse<null>>(`/tasks/${id}`);
  return data;
};
