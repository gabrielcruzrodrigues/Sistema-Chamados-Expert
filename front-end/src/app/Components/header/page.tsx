import * as React from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import SideBar from "../sidebar/page";
import logo from "../../../../public/logo-text.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo-expt" className={styles.logoImg} />
      </div>
      <nav className={styles.navigate}>
        <button className={styles.btn}>Meus chamados</button>
        <button className={styles.btn}>Novo chamado</button>
      </nav>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
