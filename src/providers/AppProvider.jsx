import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StoreProvider from "./StoreProvider";
import RoutesProvider from "./RoutesProvider";
import Navigations from "../navigations/Navigations";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppProvider = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigations />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </RoutesProvider>
    </StoreProvider>
  );
};

export default AppProvider;
