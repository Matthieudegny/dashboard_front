import { SetupGoType, SetupSoType, FailureGoType, FailureSoType } from "../Categories/model_catgories";
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
  setupGoList: Array<SetupGoType>;
  setupSoList: Array<SetupSoType>;
  failureGoList: Array<FailureGoType>;
  failureSoList: Array<FailureSoType>;
}

export interface DecodedToken {
  sub: string; // Sujet (subject),
  firstName: string;
  lastName: string;
  login: string;
  id: number;
}
