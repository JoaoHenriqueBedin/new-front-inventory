export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  date: string;
  status: string;
  totalAmount: number;
  clientId: number;
  items: OrderItem[];
}
