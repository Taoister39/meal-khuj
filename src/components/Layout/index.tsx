import React, { FunctionComponent, ReactElement } from "react";
import styles from "./index.module.scss";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
