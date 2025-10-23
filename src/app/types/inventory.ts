export interface InventoryItem {
  id: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  alertLevel: number;
  category: string;
  supplier: string;
  lastUpdated: string;
  userId: string;
}

export interface InventoryFormData {
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  alertLevel: number;
  category: string;
  supplier: string;
}
