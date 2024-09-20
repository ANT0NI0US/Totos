import { HashRouter } from "react-router-dom";

const RoutesProvider = ({ children }) => {
  return <HashRouter hashType="hashbang">{children}</HashRouter>;
};

export default RoutesProvider;
