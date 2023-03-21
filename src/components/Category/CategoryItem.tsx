import { FunctionComponent } from "react";
import styles from "./CategoryItem.module.scss";
import clsx from "clsx";

interface CategoryItemProps {
  category: Category;
  selectedCategory: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  onClickHandler,
  category,
  selectedCategory,
}) => {
  const isSelected: boolean = category.strCategory === selectedCategory;

  return (
    <button
      type="button"
      className={clsx(styles.item, isSelected && styles.item__selected)}
      onClick={onClickHandler}
    >
      {category.strCategory}
    </button>
  );
};

export default CategoryItem;
