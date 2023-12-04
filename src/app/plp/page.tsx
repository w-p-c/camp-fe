import { CategoriesList } from '@/_components/categories-list/component';
import { CategoriesListProps } from '@/_components/categories-list/types';
import { HeroBanner } from '@/_components/hero-banner/component';

export default function Home() {
  const categories: CategoriesListProps['categories'] = [
    { title: 'Category 1', link: '/' },
    { title: 'Category 2', link: '/' },
    { title: 'Category 3', link: '/' },
  ];
  return (
    <div className="flex h-full w-full flex-col">
      <HeroBanner />
      <div className="flex h-full w-full">
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
