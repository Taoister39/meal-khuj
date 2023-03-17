import { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import { Text } from "@/components/Text";

import logoImg from "@/images/meal_khuj_logo_primary.png";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <Image src={logoImg} alt="" />
      <Text className="">Find the perfect meal recipe for you</Text>
      <Text className={styles.copyright}>
        © “My-Meals” 2022 All right reserved.
      </Text>
    </footer>
  );
};

export default Footer;
