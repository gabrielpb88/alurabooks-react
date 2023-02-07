import { AbTag } from 'alurabooks-ds-gb';
import { CategoriesWrapper, CategoryGroupWrapper, Title } from './Category.styles';

interface CategoryGroupProps {
  categories: string[];
}

const CategoryGroup = ({ categories }: CategoryGroupProps) => {
  return (
    <CategoryGroupWrapper>
      <Title>Categorias mais buscadas</Title>
      <CategoriesWrapper>
        {categories.map((category) => (
          <AbTag key={category}>{category}</AbTag>
        ))}
      </CategoriesWrapper>
    </CategoryGroupWrapper>
  );
};
export default CategoryGroup;
