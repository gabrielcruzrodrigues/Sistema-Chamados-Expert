/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import styles from "./newCall.module.sass";
import Header from "../Components/header/page";
import MessageCreator from "../Components/messageCreator/page";
const NewCall = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  const handleSubmit = async () => {};
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.formData}>
            <input
              type="text"
              placeholder="titulo do chamado"
              className={styles.formInput}
            />
          </div>
          <MessageCreator onChange={handleMessage} />
        </form>
      </div>
    </>
  );
};

export default NewCall;
