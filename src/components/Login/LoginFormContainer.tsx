//2 ways to login
//one with a form
//one with a visitor mode
import React, { useRef } from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../style/animations.css";

//hook
import { useLogin } from "../../hook/Login/useLogin";

//model
import { bodyRequestLoginType } from "../../model/Login/model_request_login";

//store
import { useAuthStore } from "../../store/useAuthStore";

//composant
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
  const myDivRef = useRef<HTMLDivElement>(null);
  //store
  const { setIsLoggedIn } = useAuthStore();

  //request login
  const { loginMutation, loginMutationFetching } = useLogin();

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

  return (
    <div style={{ overflow: "hidden", maxHeight: "100%" }}>
      <div ref={myDivRef} className="appearFromBottom" style={{ width: "25vw" }}>
        <LoginForm onSubmit={onSubmit} loginMutationFetching={loginMutationFetching} closeLoginFormAndOpenLoading={closeLoginFormAndOpenLoading} />
      </div>
    </div>
  );
};

export default LoginFormContainer;
