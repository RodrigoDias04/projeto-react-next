export interface Produto {
  id: number;
  title: string;
  description: string;
  price?: number;
  image: string;
}

export interface Tecnologia{
  id:number;
  title: string;
  image: string;
  description: string;
  rating: number;
}