import RoutesProvider from "./RoutesProvider";
import Navigation from "../navigation/Navigation";
import "react-multi-carousel/lib/styles.css";

export default function AppProvider() {
  return (
    <RoutesProvider>
      <Navigation />
    </RoutesProvider>
  );
}
