/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./newCall.module.sass";
import { callDTO } from "../interfaces/callDTO";
import usePostMessage from "../hooks/usePostMessage";
import Button from "../Components/button/button";
import useSector from "../hooks/useSector";
import classNames from "classnames";
import SucessOnPost from "./sucessOnPost";
import { sectorDTO } from "../interfaces/sectorDTO";
import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import Header from "../Components/header/page";

const NewCall = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const [messageTitle, setMessageTitle] = useState<string>("");
  const { sendMessage, isLoading, isSucess, error } = usePostMessage();
  const [sectors, setSectors] = useState<sectorDTO[]>([]);
  const [sectorId, setSectorId] = useState<number | null>(0);
  const { getSector, getAllSectors } = useSector();
  const { enqueueSnackbar } = useSnackbar();

  const handleMessage = (newMessage: string) => {
    setMessageContent(newMessage);
    console.log(`Está e a mensagem digitada: ${newMessage}`);
  };

  const handleSelectSector = async (sector: sectorDTO) => {
    setSectorId(sector.id);
    console.log("🚀 ~ handleSelectSector ~ sector.id:", sector.id);
  };

  const sectorsValues = () => {
    return sectors.map((sector) => ({ id: sector.id, name: sector.name }));
  }

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (messageTitle == null || messageTitle == "") {
      enqueueSnackbar("Adicione um objetivo(título) antes de enviar o chamado!", { variant: "error" });
      return;
    }

    if (messageContent == null || messageContent == "") {
      enqueueSnackbar("Adicione uma descrição antes de enviar o chamado!", { variant: "error" });
      return;
    }

    if (sectorId == null || sectorId == 0) {
      enqueueSnackbar("Selecione um setor antes de enviar o chamado!", { variant: "error" });
      return;
    }

    const message: callDTO = {
      title: messageTitle,
      content: messageContent,
      userId: 1,
      sectorId: sectorId ? sectorId : 0,
    };
    sendMessage(message);
  };

  if (isSucess == true) {
    return <SucessOnPost />;
  } else {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formData}>
              <input
                type="text"
                placeholder="Digite aqui o objetivo do chamado. Ex: 'Falta de internet'"
                className={classNames(styles.formInput, styles.formInputTitle)}
                onChange={(e) => setMessageTitle(e.target.value)}
                value={messageTitle}
              />
            </div>
            <div
              className={classNames(styles.formData, styles.formDescription)}>
              {/* <label htmlFor="description" className={styles.formLabel}>
                Descreva o problema
              </label> */}
              <textarea
                className={classNames(
                  styles.formInput,
                  styles.formInputDescription
                )}
                placeholder="Descreva o problema de maneira simples e direta"
                onChange={(e) => setMessageContent(e.target.value)}
                value={messageContent}
              />
            </div>
            <div className={styles.btnGroup}>
              <Autocomplete
                disablePortal
                options={sectorsValues()}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300, marginTop: "15px", marginBottom: "15px" }}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setSectorId(newValue.id);
                  } else {
                    setSectorId(null);
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Selecione o setor" />
                )}
              />
              <Button type={"submit"} label="Enviar" />
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default NewCall;
