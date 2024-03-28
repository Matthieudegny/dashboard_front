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
      marginBottom: "-8px",
    },
  },
  palette: {
    primary: {
      main: "#15c5e0",
    },
    secondary: {
      main: "#15c5e0",
    },
    error: {
      main: "#bc60f1",
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
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight: "38px",
          paddingLeft: "5px",
          paddingRight: "5px",
          "@media (min-width: 600px)": {
            minHeight: "38px",
            paddingLeft: "5px",
            paddingRight: "5px",
          },

          borderRadius: "8px",
          border: "1px solid white",
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
          minWidth: "170px",
          fontWeight: "bolder",
          lineHeight: "50px",
          padding: "0 20px",
          letterSpacing: "0.08vw",
          "&:hover": {
            backgroundColor: "#15c5e0",
            color: "white",
          },
        },
        startIcon: {
          paddingBottom: "2px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          padding: "4px",
          color: "white",
          borderRadius: "8px", // Coins arrondis
          // backgroundColor: "white",
          // "&:hover": {
          //   backgroundColor: "var(--backgroundItemLighter)",
          //   color: "white",
          //   borderRadius: "8px", // Coins arrondis au survol
          // },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          // Add your styles here
          position: "absolute",
          left: "0",
          bottom: "-21px",
          fontSize: "0.8rem",
          width: "100%",
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
              color: "#15c5e0",
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Couleur de la bordure au survol
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Couleur de la bordure au survol
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white",
          "& label": {
            color: "white",
          },
          "& label.Mui-focused": {
            color: "#15c5e0",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
            backgroundColor: "white",
            fill: "white",
          },
        },
      },
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              backgroundColor: "var(--backgroundItemDark)",
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "white", // Couleur de texte blanche
          backgroundColor: "var(--backgroundItemDark)", // Arrière-plan rouge par défaut
          "&:hover": {
            backgroundColor: "#253d49", // Arrière-plan au survol
          },
        },
      },
    },
  },
});

export default theme;
