import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

//hook
import { useAuthStore } from "../../store/useAuthStore";
import { useGetDatas } from "./useGetDatas";

//model
import { DecodedToken } from "../../model/Login/model_request_login";

export const useDetectionToken = () => {
  const { setToken, setIdUser } = useAuthStore();
  const {} = useGetDatas();

  //detection if token
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
      setIdUser(decodedToken.id);
    }
  }, [token]);
  return {};
};
