import * as React from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import logo from "../../../../public/logo-text.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo EXPT" />
      </div>
      <nav className={styles.navigate}>
        <ul className={styles.navList}>
          {/* <li>
            <Link href="/newCall" className={styles.link}>
              Novo Chamado
            </Link>
          </li> */}
          {/* <li>
            <Link href="/myCalls" className={styles.link}>
              Meus Chamados
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* <div className={styles.sidebar}>
        <SideBar />
      </div> */}
    </header>
  );
};

export default Header;
