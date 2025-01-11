import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import InfoProvider from "./provider/InfoProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'




// Create a client
const queryClient = new QueryClient()
// 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <InfoProvider>
            <Router />
          </InfoProvider>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
