import * as React from "react";
import { useToast } from "@chakra-ui/react";

const NOTIFICATION_SUCCESS = "success";
const NOTIFICATION_ERROR = "error";

const NotificationsContext = React.createContext();

const NotificationsProvider = ({ children }) => {
  const toast = useToast();

  const showSuccessNotification = (description, title = "Success") =>
    toast({
      title,
      description,
      duration: 9000,
      position: "top",
      isClosable: true,
      status: NOTIFICATION_SUCCESS,
    });

  const showErrorNotification = (description, title = "Error") =>
    toast({
      title,
      description,
      duration: 9000,
      position: "top",
      isClosable: true,
      status: NOTIFICATION_ERROR,
    });

  const value = { showSuccessNotification, showErrorNotification };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext, NotificationsProvider };
