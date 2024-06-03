/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import { AlertProvider } from "components/Alert";
import { SnackbarProvider } from "components/SnackBar";
import Application from "navigation/Application";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import palette from "./theme/palette";
import typography from "./theme/typography";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const theme = createTheme({
  palette,
  typography,
});
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <StyledEngineProvider injectFirst>
                <BrowserRouter>
                  <SnackbarProvider>
                    <AlertProvider>
                      <Application />
                    </AlertProvider>
                  </SnackbarProvider>
                </BrowserRouter>
              </StyledEngineProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              width: "320px",
              textAlign: "start",
              padding: "8px",
              marginTop: "8px",
              marginBottom: "8px",
              zIndex: 9999,
            },
            duration: 5000,
          }}
        />
      </Provider>
    </>
  );
}

export default App;
