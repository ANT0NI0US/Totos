import StoreProvider from "./StoreProvider";
import RoutesProvider from "./RoutesProvider";
import Navigations from "../navigations/Navigations";
import "react-multi-carousel/lib/styles.css";

export default function AppProvider() {
  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigations />
      </RoutesProvider>
    </StoreProvider>
  );
}
