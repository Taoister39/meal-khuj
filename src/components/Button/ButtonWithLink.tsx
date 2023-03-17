import { FunctionComponent } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import clsx from "clsx";

interface ButtonWithLinkProps {
  children: string;
  link: string;
  variant: "primary" | "secondary";
}

const ButtonWithLink: FunctionComponent<ButtonWithLinkProps> = ({
  link,
  children,
  variant,
}) => {
  return (
    <Link
      href={link}
      className={clsx(styles.button, styles[`variant__${variant}`])}
    >
      {children}
    </Link>
  );
};

export default ButtonWithLink;
