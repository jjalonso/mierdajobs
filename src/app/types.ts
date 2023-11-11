export interface ActionResponse<T = unknown> {
  code: number;
  data?: T
}