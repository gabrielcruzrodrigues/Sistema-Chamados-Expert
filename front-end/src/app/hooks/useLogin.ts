/* eslint-disable @typescript-eslint/no-unused-vars */
// import { authRes } from "../interfaces/authRes"
import { useState } from "react";
import { loginCredentials } from "../interfaces/loginCredentials";
import axios from "axios";
import { authRes } from "../interfaces/authRes";

export default function useLogin() {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<authRes | null>(null);
  
  const login = async (credentials: loginCredentials) => {
    const api = process.env.NEXT_PUBLIC_API;
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post<AuthRes>(api)
    }
  };
}
