import { Text } from "@/components/Text";
import styles from "./HeroSection.module.scss";
import ButtonWithLink from "@/components/Button/ButtonWithLink";
import Image from "next/image";

import heroImg from "@/images/hero_img.jpg";

function HeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-info"]}>
          <h1 className={styles["hero-title"]}>
            Find the perfect <span>meal recipe </span>for you
          </h1>
          <Text className="">a listing website of meal recipe</Text>
          <div className={styles["hero-button"]}>
            <ButtonWithLink link="/meals" variant="primary">
              Explore Meals
            </ButtonWithLink>
            <ButtonWithLink link="/savedMeals" variant="secondary">
              Saved Meals
            </ButtonWithLink>
          </div>
        </div>
        <div className={styles["hero-img"]}>
          <Image alt="Meal-khuj" src={heroImg} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
