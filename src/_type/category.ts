export interface Category {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  ancestors?: Category;
  parent?: Category;
}
