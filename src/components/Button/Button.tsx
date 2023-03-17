import clsx from "clsx";
import {
  Children,
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactElement;
  variant: "secondary" | "primary";
  className: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  className,
  onClickHandler,
}) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[`variant__${variant}`], className)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
