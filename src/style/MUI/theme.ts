import { createTheme } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";

import "../index.css";

const theme = createTheme({
  typography: {
    body2: {
      fontSize: "20px",
    },
    h1: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH1)",
      color: "var(--colorText)",
    },
    h2: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH2)",
    },
    h3: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH3)",
    },
    h4: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH4)",
    },
    h5: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH5)",
    },
    h6: {
      fontFamily: "var(--fontTitle)",
      fontSize: "var(--fontSizeH6)",
    },
  },
  palette: {
    primary: {
      main: "#15c5e0",
    },
    secondary: {
      main: "#15c5e0",
    },

    action: {
      disabledBackground: "#15c5e0",
      disabled: "#FFFFFF",
    },
  },
  components: {
    MuiFormControlLabel: {
      // Définissez le composant FormControlLabel
      styleOverrides: {
        label: {
          fontSize: "1rem",
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "0px",
          paddingLeft: "15px",
          paddingRight: "4px",
          color: "white",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0px",
          paddingLeft: "15px",
          paddingBottom: "2px",
          paddingRight: "4px",
          color: "white",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: "50px",
          width: "180px",
          "&:hover": {
            backgroundColor: "#15c5e0",
            color: "white",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          padding: "4px",
          color: "#15c5e0",
          borderRadius: "8px", // Coins arrondis
          "&:hover": {
            backgroundColor: "#15c5e0",
            color: "white",
            borderRadius: "8px", // Coins arrondis au survol
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& label": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
                borderWidth: 2,
              },
              "&.Mui-focused fieldset": {
                borderColor: "#15c5e0",
              },
              "& .MuiOutlinedInput-input": {
                // Style pour le texte à l'intérieur du TextField
                color: "white", // Couleur du texte
              },
              "& .MuiOutlinedInput-input::placeholder": {
                // Style pour le placeholder
                color: "white", // Couleur du placeholder
              },
            },
          },
        },
      ],
    },
  },
});

export default theme;
