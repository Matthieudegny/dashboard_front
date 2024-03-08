import { useMutation, UseMutateAsyncFunction, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//store
import { useAuthStore } from "../../store/useAuthStore";

//model
import { bodyRequestLoginType, ResponseLoginType, DecodedToken } from "../../model/Login/model_request_login";

//request
import { loginRequest } from "../../api/Login/request_Login";

export const useLogin = (): {
  loginMutation: UseMutateAsyncFunction<ResponseLoginType | Error, Error, bodyRequestLoginType, unknown>;
  loginMutationFetching: boolean;
} => {
  const { setToken, setIdUser } = useAuthStore();

  const showToast = (message: string) => {
    toast.error(message, {
      theme: "colored",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  };

  //request Login
  const { mutateAsync: loginMutation, isPending: loginMutationFetching } = useMutation({
    mutationFn: (datas: bodyRequestLoginType) => {
      return loginRequest(datas);
    },
    onSuccess: (data, variables) => {
      if (data instanceof Error) {
        // Gérer l'erreur
        showToast("You are not authorized to access this page. Please login with visitor mode.");
      } else {
        // Gérer la réponse réussie
        const responseData = data as ResponseLoginType;
        const token = responseData.access_token;
        localStorage.setItem("token", token);
        setIdUser(responseData.idUser);
        setToken(token);
      }
    },
    onError: (error) => {
      console.log("error", error);
      showToast("You are not authorized to access this page. Please login with visitor mode.");
    },
  });

  return { loginMutation, loginMutationFetching };
};
