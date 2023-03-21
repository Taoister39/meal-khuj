import { getSingleMeal } from "@/api/meals";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./[id].module.scss";
import Image from "next/image";
import { PointText, Text, Title } from "@/components/Text";
import Button from "@/components/Button/Button";
import IngredientsTable from "@/components/Meals/IngredientsTable";

import { FaHeartBroken, FaHeart } from "react-icons/fa";
import {
  getSavedMeals,
  pushSavedMeal,
  removeSavedMealById,
} from "@/utils/mealsStorage";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

function SingleMeal() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [isSaved, setIsSaved] = useState(false);

  const { data, isLoading, isError } = useQuery(
    ["singleMeal", id],
    getSingleMeal
  );

  const ingredientsWithMeasures = new Array(20).fill(0).map((_, index) => ({
    index: index + 1,
    ingredient: data?.[`strIngredient${index + 1}`] as string,
    measure: data?.[`strMeasure${index + 1}`] as string,
  }));

  const saveHandler = () => {
    if (data === undefined) return;
    if (!isSaved) {
      pushSavedMeal(data.idMeal);
      toast.success("Meal saved successfully");
      setIsSaved(true);
    } else {
      removeSavedMealById(data.idMeal);
      toast.error("Meal Removed successfully");
      setIsSaved(false);
    }
  };

  useEffect(() => {
    const savedMeals = getSavedMeals();
    if (savedMeals.includes(id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [id]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading || data === undefined) {
    return <BeatLoader size={20} color="#fff" />;
  }

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["top-container"]}>
        <div>
          {data !== undefined && (
            <Image
              width={300}
              height={300}
              src={data.strMealThumb}
              alt={data.strMeal}
            />
          )}
        </div>
        <div>
          <Title variant="primary">{data.strMeal}</Title>
          <PointText className={""}>Category: {data?.strCategory}</PointText>
          <PointText className={""}>Category: {data?.strArea}</PointText>
          <PointText className={""}>
            tags: {data?.strTags?.split(",")?.join(", ")}
          </PointText>

          {isSaved && (
            <Text className={styles["green-text"]}>
              You already saved the meal.
            </Text>
          )}

          <Button
            variant="primary"
            className={styles["save-button"]}
            onClickHandler={saveHandler}
          >
            {isSaved ? (
              <>
                <FaHeartBroken />
                {"  "}
                Remove
              </>
            ) : (
              <>
                <FaHeart />
                {"  "}
                save
              </>
            )}
          </Button>
        </div>
      </div>

      <div className={styles["ingredients-table"]}>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
      </div>

      <div className={styles.instructions}>
        <Title>Instructions</Title>
        {data?.strInstructions
          .split(".")
          .filter((sentence) => sentence !== "")
          .map((sentence, index) => (
            <PointText key={index}>{sentence}.</PointText>
          ))}
      </div>
    </div>
  );
}

export default SingleMeal;
