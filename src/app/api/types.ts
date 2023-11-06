export type IndexedName = {
  id: string;
  name: string;
};

export interface ActionResponse<T = unknown> {
  code: number;
  data?: T
}

