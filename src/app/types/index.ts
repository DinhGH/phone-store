export interface Product {
  id: number;
  name: string;
  original: number;
  discount: number;
  smemberDiscount: number;
  sstudentDiscount: number;
  imageUrl: string;
  inch: string;
  capacity: string;
  rating: number;
  createdAt: Date;
  detail?: ProductDetail;
}

export interface ProductDetail {
  id: number;
  brand?: string;
  color?: string;
  chip?: string;
  camera?: string;
  battery?: string;
}

export interface Logo {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
}

export interface Phanloai {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  createdAt: Date;
  cart: Cart[];
}

export interface Cart {
  id: number;
  username: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  id: number;
  username: string;
  fullName: string;
  address: string;
  email?: string;
  phone: string;
  total: number;
  paymentImageName?: string;
  status: string;
  createdAt: Date;
  items: OrderItem[];
}

export interface Stats {
  products: number;
  users: number;
  carts: number;
  logos: number;
  categories: number;
}
