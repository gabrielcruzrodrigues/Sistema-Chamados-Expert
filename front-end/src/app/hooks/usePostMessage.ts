/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { callDTO } from "../interfaces/callDTO";
import { enqueueSnackbar, useSnackbar } from "notistack";

export default function usePostMessage() {
  const api: string | undefined = process.env.NEXT_PUBLIC_API;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSucess, setIsSucess] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const sendMessage = async (message: callDTO) => {
    setIsLoading(true);
    setError(null);
    setIsSucess(false);
    try {
      const completePathRequest = `${api}/Called`;
      const res = await axios.post(completePathRequest, message);
      if (res.status == 201) {
        setIsSucess(true);
        setIsLoading(false);
        enqueueSnackbar("Chamado enviado com sucesso!", { variant: "success" });
        return res.data;
      }
    } catch (error) {
      enqueueSnackbar("Houve um erro ao enviar o chamado!", { variant: "error" });
    }
  };
  return { sendMessage, isSucess, isLoading, error };
}
