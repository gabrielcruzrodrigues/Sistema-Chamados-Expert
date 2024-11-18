import * as React from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import SideBar from "../sidebar/page";
import logo from "../../../../public/logo-text.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo EXPT" />
      </div>
      <nav className={styles.navigate}>
        <ul className={styles.navList}>
          <li>
            <Link href="/newCall" className={styles.link}>
              Novo Chamado
            </Link>
          </li>
          <li>
            <Link href="/myCalls" className={styles.link}>
              Meus Chamados
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
