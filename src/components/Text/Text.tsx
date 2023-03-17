import { FunctionComponent, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: FunctionComponent<TextProps> = ({ children, className }) => {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};

export default Text;
