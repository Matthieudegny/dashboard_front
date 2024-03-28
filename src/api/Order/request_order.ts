import { AdressBack } from "../adressBack";

//model
import { Global_Order } from "../../model/Order/model_order";

//store
const token = localStorage.getItem("token");

export async function CreateOrder(order: Global_Order): Promise<Global_Order> {
  try {
    const response = await fetch(AdressBack.ADRESS + "/global-order", {
      method: "POST",
      // prettier-ignore
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,PATCH,OPTIONS", "Authorization" : `Bearer ${token}` },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
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
