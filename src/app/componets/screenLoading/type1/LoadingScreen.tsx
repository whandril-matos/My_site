"use client";

import React from "react";
import styles from "./LoadingScreen.module.scss";

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner} aria-label="Carregando"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingScreen;
