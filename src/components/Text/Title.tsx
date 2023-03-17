import clsx from "clsx";
import { FunctionComponent, ReactElement } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  children: ReactElement;
  className: string;
  variant: "secondary" | "primary";
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <h2 className={clsx(styles.title, className, styles[`title__${variant}`])}>
      {children}
    </h2>
  );
};

export default Title;
