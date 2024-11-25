/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./newCall.module.sass";
import { callDTO } from "../interfaces/callDTO";
import usePostMessage from "../hooks/usePostMessage";
import Button from "../Components/button/button";
import useSector from "../hooks/useSector";
import classNames from "classnames";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";
import SucessOnPost from "./sucessOnPost";
import { sectorDTO } from "../interfaces/sectorDTO";

const NewCall = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const [messageTitle, setMessageTitle] = useState<string>("");
  const { sendMessage, isLoading, isSucess, error } = usePostMessage();
  const [sectors, setSectors] = useState<sectorDTO[]>([]);
  const [sectorId, setSectorId] = useState<number | null>(0);
  const { getSector, getAllSectors } = useSector();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [sectorsNames, setSectorsNames] = useState<string[]>([]);

  const handleMessage = (newMessage: string) => {
    setMessageContent(newMessage);
    console.log(`Está e a mensagem digitada: ${newMessage}`);
  };

  const handleSectorSelect = (sectorId: number) => {
    console.log(`Setor selecionado: ${sectorId}`);
    setSectorId(sectorId);
    setIsDropdown(false);
  };

  const dropdownToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDropdown((prev) => !prev);
  };

  const getSectors = async () => {
    const data = await getAllSectors();
    console.log("🚀 ~ getSectors ~ data:", data);
    if (data) {
      const sectorsNames = data.map((sector) => sector.name);
      console.log("🚀 ~ getSectors ~ sectorsNames:", sectorsNames);

      setSectorsNames(sectorsNames);
    }
  };

  useEffect(() => {
    getSectors();
  }, []);

  console.log(
    `Este é o tanto de setores que temos armazenados ${sectors.length}`
  );

  const handleSubmit = async () => {
    try {
      if (sectorId != null && sectorId != 0) {
        const message: callDTO = {
          title: messageTitle,
          content: messageContent,
          userId: 1,
          sectorId: sectorId,
        };
        sendMessage(message);
      }
    } catch {}
  };
  if (isSucess == true) {
    return <SucessOnPost />;
  } else {
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
            <div
              className={classNames(styles.formData, styles.formDescription)}>
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
                  {sectorId
                    ? sectors.find((sector) => sector.id === sectorId)?.name ||
                      "Setor não selecionado"
                    : "Selecione o setor"}
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
                    {sectorsNames.length === 0 ? (
                      <span className={styles.noData}>
                        Nenhum setor encontrado
                      </span>
                    ) : (
                      sectorsNames.map((sector, index) => (
                        <button key={index}>{sector}</button>
                      ))
                    )}
                  </div>
                )}
              </div>
              <Button label="Enviar" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default NewCall;
