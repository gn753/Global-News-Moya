import React from "react";
import ReactDOM from "react-dom";
import App from "@src/App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import CssBaseline from "@mui/material/CssBaseline";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RecoilRoot>
        <CssBaseline />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
