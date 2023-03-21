import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./SingleMealCard.module.scss";
import Image from "next/image";
import { Title } from "@/components/Text";

interface SingleMealCardProps {
  meal: Pick<Meal, "idMeal" | "strMeal" | "strMealThumb">;
}

const SingleMealCard: FunctionComponent<SingleMealCardProps> = ({ meal }) => {
  return (
    <Link href={`/meals/${meal.idMeal}`} className={styles.item}>
      <Image
        src={meal.strMealThumb}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={meal.strMeal}
      />
      <Title variant="secondary" className={styles.title}>
        {meal.strMeal}
      </Title>
    </Link>
  );
};

export default SingleMealCard;
