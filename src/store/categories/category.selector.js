import { createSelector } from 'reselect';

const selectCategoryReducer = state => {
  console.log('selectCategoryReducer fired');
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => {
    console.log('selectCategories fired');
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories => {
    console.log('selectCategoriesMap fired');
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
