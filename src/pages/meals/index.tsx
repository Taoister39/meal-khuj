import SearchBar from "@/components/Meals/SearchBar";
import styles from "./index.module.scss";
import { SetStateAction, useEffect, useState } from "react";
import { PointText, Text } from "@/components/Text";
import { Categories } from "@/components/Category";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/api/category";
import { getMeals, getQueriedMeals } from "@/api/meals";
import { BeatLoader } from "react-spinners";
import SingleMealCard from "@/components/Meals/SingleMealCard";

function Meals() {
  const [searchText, setSearchText] = useState("");

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    data: categories = [],
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    error: categoryError,
  } = useQuery<Category[], Error>(["categories"], getCategories);
  // 通过分类选择显示食物列表
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery(["mealsByCategory", selectedCategory], getMeals, {
    enabled: query === "",
  });
  // 通过查询拵显示食物列表
  const {
    data: queriedData = [],
    isLoading: queryIsLoading,
    isError: queryError,
  } = useQuery(["mealsByQuery", query], getQueriedMeals, {
    enabled: query !== "",
  });

  useEffect(() => {
    // 默认第一个被选中
    if (categories.length > 0) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim().length > 0) {
        setQuery(searchText);
        setSelectedCategory("");
      } else {
        setQuery("");
        if (categories.length > 0) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return () => {
      setQuery("");
      clearTimeout(timer);
    };
  }, [categories, searchText]);

  return (
    <div className={styles["meals-page"]}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <PointText className={styles.text}>
        search meals or select categories from below.
      </PointText>

      <Categories
        setSelectedCategory={setSelectedCategory}
        selectCategory={selectedCategory}
        categoryIsLoading={categoryIsLoading}
        categoryIsError={categoryIsError}
        categoryError={categoryError}
        categories={categories}
        setQuery={setQuery}
      />

      {(categoryIsLoading || isLoading) && (
        <div className={styles["loading-spinner"]}>
          <BeatLoader color="#fff" />
        </div>
      )}

      <div className={styles["meals-container"]}>
        {!isLoading &&
          !isError &&
          data.map((meal) => <SingleMealCard key={meal.idMeal} meal={meal} />)}

        {!queryIsLoading &&
          !queryError &&
          queriedData.map((meal) => (
            <SingleMealCard key={meal.idMeal} meal={meal} />
          ))}

        {data.length === 0 && queriedData.length === 0 && (
          <Text>No meals found</Text>
        )}
      </div>
    </div>
  );
}

export default Meals;
