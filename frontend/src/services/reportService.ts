import { apiClient } from './apiClient';
import type { ApiResponse } from '../types/ApiResponse';

export interface ReportSummary {
  totalTasks: number;
  completedTasks: number;
  failedTasks: number;
}

export const fetchReportSummary = async (): Promise<ApiResponse<ReportSummary>> => {
  const { data } = await apiClient.get<ApiResponse<ReportSummary>>('/reports/summary');
  return data;
};
