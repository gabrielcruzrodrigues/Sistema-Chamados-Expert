/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { MessageDTO } from "../interfaces/messageDTO";

export default function usePostMessage() {
  const api: string = process.env.NEXT_PUBLIC_API;
  const post = (message: MessageDTO) => {
    const req = axios.post(api, message, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };
}
