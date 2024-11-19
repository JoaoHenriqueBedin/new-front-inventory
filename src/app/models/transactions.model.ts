export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageURL: string | null;
  supplierID: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id?: number;
  productId: number;
  quantity: number;
  transactionType: string;
  transactionDate: string;
  orderId: number;
  createdAt?: string;
  updatedAt?: string;
  product?: Product;
}
