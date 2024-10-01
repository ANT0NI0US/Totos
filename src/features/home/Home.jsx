import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import ComingSoon from "./components/ComingSoon";
import PlayingNowList from "./components/playingNow/PlayingNowList";

export default function Home() {
  return (
    <>
      <PlayingNowList />
      <div className="container">
        <Trending />
        <TopRated />
        <Popular />
        <ComingSoon />
      </div>
    </>
  );
}
