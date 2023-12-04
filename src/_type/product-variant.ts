import { Image } from './image';
import { Price } from './price';
import { ProductVariantAvailability } from './product-variant-availability';

export interface ProductVariant {
  id?: string;
  sku?: string;
  name?: string;
  slug?: string;
  images?: Array<Image>;
  prices?: Array<Price>;
  attributes?: Array<{ [key: string]: object }>;
  availability?: ProductVariantAvailability;
}
