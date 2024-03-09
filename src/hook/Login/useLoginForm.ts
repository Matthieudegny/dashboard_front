import { toast } from "react-toastify";
import { SubmitHandler, FieldValues } from "react-hook-form";

//model
import { bodyRequestLoginType } from "../../model/Login/model_request_login";

//hook request
import { useLoginRequest } from "../../hook/Login/useLoginRequest";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";

export const useLoginForm = (
  myDivRef: React.RefObject<HTMLDivElement>
): {
  onSubmit: SubmitHandler<FieldValues>;
  closeLoginFormAndOpenLoading: () => void;
  loginMutationFetching: boolean;
} => {
  const { setIsLoggedIn } = useAuthStore();
  const { loginMutation, loginMutationFetching } = useLoginRequest();

  const onSubmit: SubmitHandler<FieldValues> = async (dataForm) => {
    //check form is valid
    if (dataForm.login === "" || dataForm.password === "") {
      toast.error("Please fill in all the fields", {
        theme: "colored",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
      return;
    }

    //request Login
    const data: bodyRequestLoginType = {
      login: dataForm.login,
      password: dataForm.password,
    };
    const response = await loginMutation(data);
    console.log("response", response);
    if (response instanceof Error) {
      toast.error("An error occurred, please try again later", {
        theme: "colored",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    } else {
      closeLoginFormAndOpenLoading();
    }
  };

  const closeLoginFormAndOpenLoading = () => {
    if (myDivRef.current) {
      // Ajouter la classe à l'élément
      myDivRef.current.classList.add("desapearToBottom");
    }
    const timeOutAnimationLogin = setTimeout(() => {
      setIsLoggedIn(true);
      clearTimeout(timeOutAnimationLogin);
    }, 1000);
  };

  return { onSubmit, closeLoginFormAndOpenLoading, loginMutationFetching };
};
