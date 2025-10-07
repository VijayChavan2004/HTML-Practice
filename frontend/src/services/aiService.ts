import { apiClient } from './apiClient';
import type { ApiResponse } from '../types/ApiResponse';

export interface AISummaryRequest {
  text: string;
}

export interface AISummaryResponse {
  summary: string;
}

export const generateSummary = async (payload: AISummaryRequest): Promise<ApiResponse<AISummaryResponse>> => {
  const { data } = await apiClient.post<ApiResponse<AISummaryResponse>>('/ai/summary', payload);
  return data;
};
