import axios from "axios";
import { useState } from "react";
import { sectorDTO } from "../interfaces/sectorDTO";

export default function useSector() {
  const api = "http://localhost:8080";

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllSectors = async (): Promise<sectorDTO[] | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${api}/Sector`);
      if (res.status == 200) {
        console.log(res.data.map((sector: sectorDTO) => sector));
        return res.data.map((sector: sectorDTO) => sector);
      }
    } catch (err) {
      setError(err as Error);
      return undefined;
    } finally {
      setLoading(true);
    }
  };

  const getSector = async (id: number): Promise<sectorDTO | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${api}/Sector/${id}`);
      if (res.status == 200) return res.data.name;
    } catch (err) {
      console.error(err);
    }
  };

  const createSector = async (sector: sectorDTO) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${api}/Sector`, sector);
      if (res.status == 201) return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSector = async (sectorId: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.delete(`${api}/Sector/${sectorId}`);
      if (res.status == 201) return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getAllSectors,
    getSector,
    createSector,
    deleteSector,
    loading,
    error,
  };
}
