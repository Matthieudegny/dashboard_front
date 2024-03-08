import { AdressBack } from "../adressBack";

//model
import { bodyRequestLoginType, ResponseLoginType } from "../../model/Login/model_request_login";
import { ResponseGetMainDatasByIdUserType } from "../../model/Login/model_request_login";

//store
const token = localStorage.getItem("token");

export async function loginRequest(data: bodyRequestLoginType): Promise<ResponseLoginType | Error> {
  try {
    const response = await fetch(AdressBack.ADRESS + "/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Gérer les erreurs HTTP autres que 401 Unauthorized
      if (response.status === 401) {
        throw { error: new Error("Invalid credentials") };
      } else {
        throw { error: new Error("Network response was not ok") };
      }
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw { error: error as Error };
  }
}

export async function GetMainDatasByIdUser(idUser: number): Promise<ResponseGetMainDatasByIdUserType> {
  try {
    console.log("isfetching");
    console.log();
    const response = await fetch(AdressBack.ADRESS + "/main-datas/" + idUser, {
      method: "GET",
      // prettier-ignore
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,PATCH,OPTIONS", "Authorization" : `Bearer ${token}` },
    });

    if (!response.ok) {
      // Gérer les erreurs HTTP autres que 401 Unauthorized
      if (response.status === 401) {
        throw { error: new Error("Invalid credentials") };
      } else {
        throw { error: new Error("Network response was not ok") };
      }
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw { error: error as Error };
  }
}
