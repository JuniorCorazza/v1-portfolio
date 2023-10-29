import { createTheme } from "@mui/material/styles";
import { colors } from "../constants/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "inherit",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: colors.backgroundLight,
            },
            "&:hover fieldset, &.Mui-focused fieldset": {
              borderColor: colors.backgroundGrey,
            },
          },
          "& label.MuiInputLabel-root": {
            color: colors.backgroundLight,
          },
          "& label.MuiInputLabel-root.Mui-focused": {
            color: colors.backgroundGrey,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&.Mui-focused ": {
            color: colors.black,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: colors.headerActive,
        },
        tooltip: {
          backgroundColor: colors.headerActive,
        },
      },
    },
  },
});

export default theme;
