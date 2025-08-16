export interface Kitten {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  color: string;
  gender: 'Macho' | 'Hembra';
  vaccinated: boolean;
  available: boolean;
}

export interface CartItem extends Kitten {
  quantity: number;
}