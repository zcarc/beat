import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlaylistMusicList } from "./components/PlaylistMusicList";

export const MyListPage = () => {
  const [comp, setComp] = useState<JSX.Element | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  if (!params.mylistId) return <></>;

  const { mylistId } = params;
  const id = parseInt(mylistId);

  useEffect(() => {
    if (id <= 0) {
      return navigate("/");
    } else {
      setComp(
        <div className="space-y-0 bg-black px-[230px]">
          <PlaylistMusicList id={id} />
        </div>
      );
    }
  }, []);

  return comp;
};
