import { Category } from './category';
import { ProductVariant } from './product-variant';

export interface Product {
  id?: string;
  name?: string;
  description?: string;
  slug?: string;
  categories?: Array<Category>;
  variants?: Array<ProductVariant>;
  masterVariant?: ProductVariant;
}
