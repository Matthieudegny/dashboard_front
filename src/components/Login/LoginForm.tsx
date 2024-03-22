import React from "react";
import { Button, TextField, CircularProgress, Typography, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const LoginForm: React.FC<{
  onSubmit: SubmitHandler<FieldValues>;
  loginMutationFetching: boolean;
  closeLoginFormAndOpenLoading: () => void;
}> = ({ onSubmit, loginMutationFetching, closeLoginFormAndOpenLoading }) => {
  //hook form
  const { handleSubmit, register } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* header */}
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0 3vw",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Connexion
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Login to the app, or visit it with visitor mode.
        </Typography>
      </header>

      {/* section form */}
      <div
        style={{
          padding: "0 3vw",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box>
          <TextField id="login" label="Login" variant="outlined" fullWidth {...register("login")} />
        </Box>
        <Box>
          <TextField id="password" label="Password" type="password" variant="outlined" fullWidth {...register("password")} />
        </Box>
      </div>

      {/* Section boutons */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 3vw",
        }}
      >
        <LoadingButton
          style={{ width: "45%" }}
          loading={loginMutationFetching}
          loadingPosition="start"
          startIcon={loginMutationFetching ? <CircularProgress style={{ marginRight: "-28px" }} /> : <Box></Box>}
          variant="contained"
          color="primary"
          type="submit"
        >
          {loginMutationFetching ? <span>chargement</span> : <>Login</>}
        </LoadingButton>
        <Button style={{ width: "45%" }} type="button" variant="contained" color="primary" onClick={() => closeLoginFormAndOpenLoading()}>
          Visitor
        </Button>
      </section>
    </form>
  );
};

export default LoginForm;
