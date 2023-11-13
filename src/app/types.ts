export interface ActionResponse<T = unknown> {
  code: number;
  data?: Record<string, string> | T;
}