
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'product' | 'cart' | 'info';

export interface InfoContent {
  title: string;
  content: string;
}
