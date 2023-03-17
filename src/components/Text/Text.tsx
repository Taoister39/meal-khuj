import { FunctionComponent, ReactElement } from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

interface TextProps {
  children: ReactElement | string;
  className: string ;
}

const Text: FunctionComponent<TextProps> = ({ children, className }) => {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};

export default Text;
