import { Song } from "../Song";
import { useSongs } from "./useSongs";

export const Songs = () => {
  const { songs } = useSongs();
  if (!songs) return <></>;
  return (
    <div className="space-y-0 bg-black px-[230px]">
      {songs.items.map((item, i) => (
        <Song {...item} key={i} />
      ))}
    </div>
  );
};
