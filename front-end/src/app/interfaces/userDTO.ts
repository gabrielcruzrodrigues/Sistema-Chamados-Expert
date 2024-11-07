import { callDTO } from "./callDTO";

export interface userDTO {
  id: number;
  name: string;
  email: string;
  calls: callDTO[];
}
