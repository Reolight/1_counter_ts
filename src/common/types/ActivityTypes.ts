/**
 * Интерфейс определяющий Activity
 */
export interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link?: string;
  key: number;
  accessibility: number;
}