export type WithChildren<T = object> = T & { children: React.ReactNode };

export interface TableContextProps {
  matrix: number[][];
}
