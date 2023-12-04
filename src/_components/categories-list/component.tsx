import { FunctionComponent } from 'react';

import { CategoriesListProps } from './types';
import { SfListItem } from '@storefront-ui/react';

export const CategoriesList: FunctionComponent<CategoriesListProps> = ({
  categories,
}) => {
  return (
    <ul>
      {categories.map((elCategories) => (
        <SfListItem key={elCategories.link}>
          <span className="break-words">{elCategories.title}</span>
        </SfListItem>
      ))}
    </ul>
  );
};
