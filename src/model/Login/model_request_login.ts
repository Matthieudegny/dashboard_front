import { Setup, Failure } from "../Categories/model_catgories";
import { GlobalOrderFillWithDatasDto } from "../Order/model_order";

export interface bodyRequestLoginType {
  login: string;
  password: string;
}

export interface ResponseLoginType {
  access_token: string;
  idUser: number;
  firstName: string;
  lastName: string;
}

export interface ResponseGetMainDatasByIdUserType {
  globalOrderList: Array<GlobalOrderFillWithDatasDto>;
  setupList: Array<Setup>;
  failureList: Array<Failure>;
}

export interface DecodedToken {
  sub: string; // Sujet (subject),
  firstName: string;
  lastName: string;
  login: string;
  id: number;
}
