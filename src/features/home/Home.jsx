import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import ComingSoon from "./components/ComingSoon";

export default function Home() {
  return (
    <>
      <Trending />
      <TopRated />
      <Popular />
      <ComingSoon />
    </>
  );
}
