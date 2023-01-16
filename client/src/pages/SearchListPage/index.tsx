import { PlaylistAddModal } from "@/components/PlaylistAddModal";
import { PlaylistModal } from "@/components/PlaylistModal";
import List from "./components/List";

export const SearchListPage = () => {
  return (
    <>
      <List />
      <PlaylistAddModal />
      <PlaylistModal />
    </>
  );
};
