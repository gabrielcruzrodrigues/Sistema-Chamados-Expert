import React from "react";
import styles from "./newCall.module.sass";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Link from "next/link";
const sucessOnPost = () => {
  return (
    <div className={styles.sucessContainer}>
      <div className={styles.iconContainer}>
        <TaskAltIcon sx={{ fontSize: 177, color: "#EB8104" }} />
      </div>
      <span className={styles.spanSucess}>
        Chamado criado com sucesso, aguarde a resolulção do seu problema
      </span>
      <button className={styles.btnRedirectToHome}>
        <Link href="/home" className={styles.link}>
          Voltar para Home
        </Link>
      </button>
    </div>
  );
};

export default sucessOnPost;
