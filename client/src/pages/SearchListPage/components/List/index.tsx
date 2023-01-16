import { useSearchBar } from "@/components/SeachBar/useSearchBar";
import { ItemState } from "@/types/music";
import { LegacyRef, useCallback, useEffect, useRef } from "react";
import ListItem from "../ListItem";
import { useList } from "./useList";

function List() {
  const { musicList } = useList();
  const { title, limit, loading, handleScrolling, resetSearchLimit } =
    useSearchBar();

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: LegacyRef<HTMLDivElement> | Element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && limit < 100) {
          handleScrolling(limit + 20, title);
        }
      });
      if (node) observer.current.observe(node as Element);
    },
    [limit, title, loading]
  );

  useEffect(() => {
    if (limit >= 100) {
      resetSearchLimit();
    }
  }, []);

  if (!musicList) return <></>;

  return (
    <>
      <div className="space-y-0 bg-black px-[230px]">
        {musicList.map((music: ItemState, i: number) => {
          if (musicList.length === i + 1) {
            return (
              <div
                ref={lastElementRef as LegacyRef<HTMLDivElement>}
                key={music.videoId}
              >
                <ListItem item={music} />
              </div>
            );
          } else {
            return <ListItem item={music} key={music.videoId} />;
          }
        })}
      </div>
      {loading && (
        <div className="text-white text-center text-[20px]">Loading...</div>
      )}
    </>
  );
}

export default List;
