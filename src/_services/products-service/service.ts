import { Product } from '@/_type/product';

export abstract class ProductsAbstractService {
  getProductsByCategory(id: number): Product[] {}
}
