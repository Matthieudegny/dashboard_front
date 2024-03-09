//2 ways to login
//one with a form
//one with a visitor mode
import React, { useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import "../../style/animations.css";

//hook
import { useLoginForm } from "../../hook/Login/useLoginForm";

//composant
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
  const myDivRef = useRef<HTMLDivElement>(null);
  const { onSubmit, closeLoginFormAndOpenLoading, loginMutationFetching } = useLoginForm(myDivRef);

  return (
    <div style={{ overflow: "hidden", maxHeight: "100%" }}>
      <div ref={myDivRef} className="appearFromBottom" style={{ width: "25vw" }}>
        <LoginForm onSubmit={onSubmit} loginMutationFetching={loginMutationFetching} closeLoginFormAndOpenLoading={closeLoginFormAndOpenLoading} />
      </div>
    </div>
  );
};

export default LoginFormContainer;
