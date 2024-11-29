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
import SucessOnPost from "./sucessOnPost";
import { sectorDTO } from "../interfaces/sectorDTO";
import { MenuItem, Select } from "@mui/material";

const NewCall = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const [messageTitle, setMessageTitle] = useState<string>("");
  const { sendMessage, isLoading, isSucess, error } = usePostMessage();
  const [sectors, setSectors] = useState<sectorDTO[]>([]);
  const [sectorId, setSectorId] = useState<number | null>(0);
  const { getSector, getAllSectors } = useSector();

  const handleMessage = (newMessage: string) => {
    setMessageContent(newMessage);
    console.log(`Está e a mensagem digitada: ${newMessage}`);
  };

  const handleSelectSector = async (sector: sectorDTO) => {
    setSectorId(sector.id);
    console.log("🚀 ~ handleSelectSector ~ sector.id:", sector.id);
  };

  const getSectors = async () => {
    const data = await getAllSectors();
    if (data) {
      console.log("🚀 ~ getSectors ~ dados recebidos pelo hook:", data);
      const sectors = setSectors(data);
      console.log(sectors);
    }
  };

  useEffect(() => {
    getSectors();
  }, []);

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
              {sectors.length > 0 ? (
                <Select
                  className={styles.dropdown}
                  labelId="dropdown-toggle"
                  id="toggle"
                  label="Selecione o seu setor"
                  value={sectors.map((sector) => sector.name)}>
                  {sectors.map((sector, index) => (
                    <MenuItem key={index}>{sector.name}</MenuItem>
                  ))}
                </Select>
              ) : (
                <span>Nenhum setor encontrado</span>
              )}
              <Button type={"submit"} label="Enviar" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default NewCall;
