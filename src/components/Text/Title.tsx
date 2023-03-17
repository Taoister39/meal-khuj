import clsx from "clsx";
import { FunctionComponent } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  children: string;
  className: string;
  variant?: "secondary" | "primary";
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <h2 className={clsx(styles.title, className, styles[`title__${variant}`])}>
      {children}
    </h2>
  );
};

export default Title;
