import { FunctionComponent } from "react";
import styles from "./IngredientsTable.module.scss";
import { Text, Title } from "@/components/Text";

interface IngredientsTable {
  ingredientsWithMeasures: {
    index: number;
    ingredient: string;
    measure: string;
  }[];
}

const IngredientsTable: FunctionComponent<IngredientsTable> = ({
  ingredientsWithMeasures,
}) => {
  return (
    <>
      <Title className={styles.title}>Ingredients</Title>
      <table className={styles["ingredients-table"]}>
        <tbody>
          {ingredientsWithMeasures.map(
            (ingredients) =>
              ingredients.ingredient !== "" && (
                <tr key={ingredients.index}>
                  <td>
                    <Text>{ingredients.ingredient}</Text>
                  </td>
                  <td>
                    <Text>{ingredients.measure}</Text>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </>
  );
};

export default IngredientsTable;
