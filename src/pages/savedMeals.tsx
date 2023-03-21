import { getSingleMeal } from "@/api/meals";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import styles from "./savedMeal.module.scss";
import { PointText, Text, Title } from "@/components/Text";
import { getSavedMeals } from "@/utils/mealsStorage";
import { BeatLoader } from "react-spinners";
import Link from "next/link";

function SavedMeals() {
  const [savedMealsId, setSavedMealsId] = useState<string[]>([]);

  const queries = savedMealsId.map((id) => ({
    queryKey: ["singleMeal", id],
    queryFn: getSingleMeal,
  }));

  const result = useQueries({
    queries,
  });

  useEffect(() => {
    setSavedMealsId(getSavedMeals());
  }, []);

  return (
    <div className={styles["page-wrapper"]}>
      <Title variant="primary" className={styles["page-title"]}>
        My Saved Meal List
      </Title>
      <div className={styles["list-container"]}>
        {savedMealsId.length <= 0 && <Text>You have saved meals</Text>}

        {result &&
          result.map(({ data, isLoading }, index) => {
            if (isLoading || data === undefined) {
              return <BeatLoader key={index} color="#fff" size={20} />;
            }

            return (
              <Link
                className={styles["single-meal"]}
                href={`/meals/${data.idMeal}`}
                key={index}
              >
                <Title variant="secondary" className={styles["meal-title"]}>
                  {data.strMeal}
                </Title>
                <PointText>Category: {data.strCategory}</PointText>
                <PointText>Area: {data.strArea}</PointText>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SavedMeals;
