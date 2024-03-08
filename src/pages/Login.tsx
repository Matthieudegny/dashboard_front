//isLoggedIn determine in LoginFormContainer or on click visitor
//after the user is logged in, the user is redirected to the loading page
import React from "react";

//store
import { useAuthStore } from "../store/useAuthStore";

//composant
import Loading from "../components/Login/Loading";
import LoginFormContainer from "../components/Login/LoginFormContainer";

const Login = () => {
  //store
  const { isLoggedIn } = useAuthStore();

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {!isLoggedIn ? <LoginFormContainer /> : <Loading />}
    </main>
  );
};

export default Login;
