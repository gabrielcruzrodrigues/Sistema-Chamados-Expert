/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { callDTO } from "../interfaces/callDTO";

export default function usePostMessage() {
  const api: string | undefined = process.env.NEXT_PUBLIC_API;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sendMessage = async (message: callDTO) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${api}/Called`, { message });
      if (res.status == 201) return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { sendMessage, loading, error };
}
