export interface entity {
  id: number;
}

export interface APIList<T = any> {
  data: T[];
  count: number;
  limit: number;
  offset: number;
}
