import useAuth from "@/hooks/useAuth";
import { usePlaylistPage } from "@/pages/PlaylistPage/usePlaylistaPage";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import { PlaylistAddItemInModal } from "../PlaylistAddItemInModal";
import { PlaylistCreatedItemInModal } from "../PlaylistCreatedItemInModal";
import { usePlaylistAddModal } from "./usePlaylistAddModal";

export const PlaylistAddModal = () => {
  const { show, onClickClose, selectedMusic } = usePlaylistAddModal();
  const { playlists } = usePlaylistPage();

  if (!playlists || !selectedMusic) return <></>;

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={onClickClose}
      overlayClassName="inset-0 fixed bg-black/60 z-[9000]"
      className="absolute top-1/2 bottom-0 left-1/2 right-0 bg-neutral-800 shadow-2xl rounded-sm border-neutral-800 border-[1px]
      w-[350px] -translate-x-[50%] -translate-y-[50%] outline-none h-fit"
    >
      <div className="text-[17px] font-[600] flex flex-col items-center justify-center space-y-[20px] pt-[30px] pb-[22px]">
        <div className="text-white">내 플레이리스트에 추가</div>
        <div className="flex flex-col space-y-[10px] px-[10px] w-[320px] max-h-[240px] overflow-y-auto">
          <PlaylistAddItemInModal />
          {playlists.map((item) => {
            return (
              <PlaylistCreatedItemInModal
                id={item.id}
                title={item.title}
                desc={item.desc}
                cnt={item.cnt}
                selectedMusic={selectedMusic}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </ReactModal>
  );
};
