"use client";

import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
          fontSize: "50px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "4px",
        },
      },
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
}
