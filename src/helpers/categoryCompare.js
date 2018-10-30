import { CATEGORIES } from '../helpers/constants';

export const categoryCompare = (category) => {
  const categoryUpperCase = category && category.toUpperCase();

  switch (categoryUpperCase) {
    case CATEGORIES.HAIRDRESSER:
      return 'category-hairdresser';
    case CATEGORIES.MAKEUP:
      return 'category-makeup'
    case CATEGORIES.COSMETOLOGY:
      return 'category-cosmetology';
  }
};
