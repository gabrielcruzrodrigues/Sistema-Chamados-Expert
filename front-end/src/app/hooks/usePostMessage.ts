/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { callDTO } from "../interfaces/callDTO";

export default function usePostMessage() {
  const api: string | undefined = process.env.NEXT_PUBLIC_API;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSucess, setIsSucess] = useState<boolean>(false);

  const sendMessage = async (message: callDTO) => {
    setIsLoading(true);
    setError(null);
    setIsSucess(false);
    try {
      const res = await axios.post(`${api}/Called`, message);
      if (res.status == 201) {
        setIsSucess(true);
        setIsLoading(false);
        return res.data;
      }
    } catch (error) {
      setError(error as Error);
      console.error(error);
    }
  };
  return { sendMessage, isSucess, isLoading, error };
}
