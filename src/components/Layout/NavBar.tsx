import { FunctionComponent } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

import logoImg from "@/images/meal_khuj_logo.png";
import Image from "next/image";

const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.navBar}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="meal-khuj logo" />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/saveMeals">saveMeals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
