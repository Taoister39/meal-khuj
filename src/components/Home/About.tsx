import { Text, Title } from "@/components/Text";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <Title className={styles.title}>What is Meal-khuj</Title>
      <Text>
        Est nam alias quo repellendus voluptas. Doloremque eveniet in
        perferendis quia natus. Maiores enim impedit aspernatur sit at labore
        odio. Hic et sit sunt ut nobis et cumque autem. Autem blanditiis et in
        dolorem. Recusandae et debitis molestias.
        <br />
        <br />
        Est nam alias quo repellendus voluptas. Doloremque eveniet in
        perferendis quia natus. Maiores enim impedit aspernatur sit at labore
        odio. Hic et sit sunt ut nobis et cumque autem. Autem blanditiis et in
        dolorem. Recusandae et debitis molestias.…
      </Text>
    </div>
  );
}

export default About;
