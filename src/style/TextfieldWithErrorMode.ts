export const textfieldWithErrorMode = (isEmpty: boolean) => {
  return {
    width: "100%",
    "& .MuiInputBase-root": {
      paddingBottom: "2px",
    },
    "& label": {
      color: isEmpty ? "var(--colorItemSecondary)" : "white",
    },
    "& label.Mui-focused": {
      color: isEmpty ? "var(--colorItemSecondary)" : "#15c5e0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: isEmpty ? "var(--colorItemSecondary)" : "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: isEmpty ? "var(--colorItemSecondary)" : "white",
      },
      "&:hover fieldset": {
        borderColor: isEmpty ? "var(--colorItemSecondary)" : "white",
        borderWidth: 2,
      },
      "&.Mui-focused fieldset": {
        borderColor: isEmpty ? "var(--colorItemSecondary)" : "#15c5e0",
      },
      "& .MuiOutlinedInput-input": {
        color: isEmpty ? "var(--colorItemSecondary)" : "white",
      },
      "& .MuiOutlinedInput-input::placeholder": {
        color: isEmpty ? "var(--colorItemSecondary)" : "white",
      },
    },
  };
};
