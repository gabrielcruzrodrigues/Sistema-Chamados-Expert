"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo-text.png";
import styles from "./login.module.sass";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" className={styles.logoImg} />
      </div>
      <form className={styles.formContainer}>
        <div className={styles.formData}>
          <label htmlFor="" className={styles.formLabel}>
            E-mail
          </label>
          <input
            className={styles.formInput}
            type="email"
            placeholder="digite seu email"
            required
          />
        </div>
        <div className={styles.formData}>
          <label htmlFor="" className={styles.formLabel}>
            Senha
          </label>
          <input
            className={styles.formInput}
            type="password"
            placeholder="digite sua senha"
            required
          />
        </div>
        <div className={styles.formActions}>
          <button className={styles.formBtn}>Entrar</button>
          <button className={styles.formBtn}> Esqueci a senha</button>
        </div>
      </form>
    </div>
  );
};

export default Login;