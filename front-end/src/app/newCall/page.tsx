/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./newCall.module.sass";
import Header from "../Components/header/page";
import MessageCreator from "../Components/messageCreator/page";
import { callDTO } from "../interfaces/callDTO";
import usePostMessage from "../hooks/usePostMessage";
import Button from "../Components/button/button";
import useSector from "../hooks/useSector";
import classNames from "classnames";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NewCall = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const [messageTitle, setMessageTitle] = useState<string>("");
  const { sendMessage } = usePostMessage();
  const [sectors, setSectors] = useState<string[]>([]);
  const [sectorId, setSectorId] = useState<number>(0);
  const { getSector, getAllSectors } = useSector();
  const [sectorName, setSectorName] = useState<string>("");
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const handleMessage = (newMessage: string) => {
    setMessageContent(newMessage);
    console.log(`Está e a mensagem digitada: ${newMessage}`);
  };

  const handleSectorChange = (id: number, name: string) => {
    setSectorId(id);
    setSectorName(name);
    setIsDropdown(false);
  };

  const dropdownToggle = () => {
    setIsDropdown(true);
  };

  const getSectors = async () => {
    const data = await getAllSectors();
    console.log("🚀 ~ getSectors ~ data:", data);

    setSectors(data || []);
  };

  useEffect(() => {
    getSectors();
  }, []);

  const handleSubmit = async () => {
    const message: callDTO = {
      title: messageTitle,
      content: messageContent,
      userId: 1,
      sectorId: sectorId,
    };
    try {
      if (sectorId !== 0) {
        console.error("Setor não selecionado");
        return;
      }
      sendMessage(message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.formData}>
            <input
              type="text"
              placeholder="Título do chamado"
              className={classNames(styles.formInput, styles.formInputTitle)}
              onChange={() => setMessageTitle}
            />
          </div>
          <div className={classNames(styles.formData, styles.formDescription)}>
            {/* <label htmlFor="description" className={styles.formLabel}>
              Descreva o problema
            </label> */}
            <input
              type="text"
              className={classNames(
                styles.formInput,
                styles.formInputDescription
              )}
              placeholder="Descreva o problema de maneira simples e direta"
            />
          </div>
          <div className={styles.btnGroup}>
            <div className={styles.dropdownContainer}>
              <button className={styles.dropdown} onClick={dropdownToggle}>
                Selecione o setor
                <ArrowDropDownIcon
                  style={{
                    color: "#EB8104",
                    fontSize: 24,
                    textAlign: "center",
                  }}
                />
              </button>
              {isDropdown && (
                <div className={styles.dropdownMenu}>
                  {sectors.map((sector, index) => (
                    <button key={index} className={styles.dropdownItem}>
                      {sector}
                    </button>
                  ))}
                </div>
              )}
              <Button label="Enviar" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCall;
