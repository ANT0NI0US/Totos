import RoutesProvider from "./RoutesProvider";
import Navigations from "../navigations/Navigations";
import "react-multi-carousel/lib/styles.css";

export default function AppProvider() {
  return (
    <RoutesProvider>
      <Navigations />
    </RoutesProvider>
  );
}
