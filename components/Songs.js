import { useRecoilValue } from "recoil";
import { playListState } from "../atoms/playlistAtom";
import Song from "./Song";

function  Songs() {
  const playList = useRecoilValue(playListState);
  console.log(playList)

  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playList?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i}/>
      ))}
    </div>
  );
}

export default Songs;
