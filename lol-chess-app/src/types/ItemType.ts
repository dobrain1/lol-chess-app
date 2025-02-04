export default interface ItemType {
  id: number;
  name: string;
  image: string;
  description?: string;
  components?: number[];
  stats: string[];
}
