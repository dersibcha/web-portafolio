import React from "react";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { NotificationsProvider } from "../context/notifications.context";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
