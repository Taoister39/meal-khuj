import { FunctionComponent, ReactElement } from "react";
import styles from "./PointText.module.scss";
import clsx from "clsx";
import Text from "@/components/Text/Text";

interface PointTextProps {
  children: ReactElement;
  className: string;
}

const PointText: FunctionComponent<PointTextProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(styles.pointText, className)}>
      <div className={styles.circle} />
      <Text className={styles.text}>{children}</Text>
    </div>
  );
};

export default PointText;
