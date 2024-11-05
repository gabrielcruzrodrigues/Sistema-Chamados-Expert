import * as React from "react";
// import Image from "next/image";
import styles from "./header.module.sass";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Aqui colocar a logo do Expert */}
        {/* <Image/> */}
      </div>
      <div className={styles.navigate}>
        <button className={styles.btn}>Meus chamados</button>
        <button className={styles.btn}>Novo chamado</button>
      </div>
    </header>
  );
};

export default Header;
