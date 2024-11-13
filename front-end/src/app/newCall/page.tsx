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

const NewCall = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const [messageTitle, setMessageTitle] = useState<string>("");
  const { sendMessage } = usePostMessage();
  const [sectors, setSectors] = useState<string[]>([]);
  const [sectorId, setSectorId] = useState<number>(0);
  const { getSector, getAllSectors } = useSector();
  const [sectorName, setSectorName] = useState<string>("");
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const api = process.env.NEXT_PUBLIC_API;

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

  const teste = () => {
    const fetchSectors = async () => {
      const sectorsData = await getAllSectors();
      setSectors(sectorsData || []);
    };

    if (sectorId) {
      const handleFindSector = async () => {
        try {
          const sectorName = await getSector(sectorId);
          return sectorName;
        } catch (err) {
          console.error(err);
        }
      };
      handleFindSector();
    }
    fetchSectors();
  };

  useEffect(() => {});

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
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.formData}>
            <input
              type="text"
              placeholder="titulo do chamado"
              className={styles.formInput}
              // onChange={setMessageTitle}
            />
          </div>
          <MessageCreator onChange={handleMessage} />
          <button className={styles.dropdown} onClick={dropdownToggle}></button>
          {isDropdown && (
            <div className={styles.dropdownMenu}>
              {sectors.map((sector, index) => (
                <button key={index} onClick={teste}>
                  {sector}
                </button>
              ))}
            </div>
          )}
          <div>
            <Button label="Enviar" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCall;
