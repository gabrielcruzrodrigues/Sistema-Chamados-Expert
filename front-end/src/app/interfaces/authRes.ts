import { userDTO } from "./userDTO";

export interface authRes {
  token: string;
  refreshToken: string;
  expireRefreshToken: Date;
  user: userDTO;
}
