import { Dispatch, FunctionComponent, MouseEvent, SetStateAction } from "react";
import styles from "./Categories.module.scss";
import CategoryItem from "@/components/Category/CategoryItem";

interface CategoriesProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectCategory: string;
  categoryIsLoading: boolean;
  categoryIsError: boolean;
  categoryError: Error | null;
  categories: Category[];
  setQuery: Dispatch<SetStateAction<string>>;
}

const Categories: FunctionComponent<CategoriesProps> = ({
  categories,
  categoryError,
  categoryIsError,
  categoryIsLoading,
  selectCategory,
  setQuery,
  setSelectedCategory,
}) => {
  if (categoryIsLoading) {
    return <div>Loading...</div>;
  }
  if (categoryIsError) {
    return <div>Error: {categoryError?.message}</div>;
  }

  return (
    <div className={styles["categories-container"]}>
      {categories.map((item, index) => (
        <CategoryItem
          key={index}
          category={item}
          selectedCategory={selectCategory}
          onClickHandler={() => {
            setSelectedCategory(item.strCategory);
            setQuery("");
          }}
        />
      ))}
    </div>
  );
};

export default Categories;
