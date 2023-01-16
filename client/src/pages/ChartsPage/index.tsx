import { PlaylistAddModal } from "@/components/PlaylistAddModal";
import { PlaylistModal } from "@/components/PlaylistModal";
import { Songs } from "@/components/Songs";

export const ChartsPage = () => {
  return (
    <>
      <Songs />
      <PlaylistAddModal />
      <PlaylistModal />
    </>
  );
};
