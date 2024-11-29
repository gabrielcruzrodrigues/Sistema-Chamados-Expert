"use client";

import React from "react";
import styles from "./newCall.module.sass";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useRouter } from "next/navigation";

const SucessOnPost = () => {
  const router = useRouter();

  const handleRedirect = () => {
    window.location.assign("/newCall");
  };

  return (
    <div className={styles.sucessContainer}>
      <div className={styles.iconContainer}>
        <TaskAltIcon sx={{ fontSize: 177, color: "#EB8104" }} />
      </div>
      <span className={styles.spanSucess}>
        Chamado criado com sucesso, aguarde a assistência técnica
      </span>
      <button className={styles.btnRedirectToHome} onClick={handleRedirect}>
        Adicionar um novo chamado
      </button>
    </div>
  );
};

export default SucessOnPost;
