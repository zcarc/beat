import ReactModal from "react-modal";
import { usePlaylistModal } from "./usePlaylistModal";

export const PlaylistModal = () => {
  const {
    show,
    title,
    description,
    handleChangeTitle,
    handleChangeDescription,
    handleShowFalse,
    handleClickCreate,
  } = usePlaylistModal();
  return (
    <ReactModal
      isOpen={show}
      overlayClassName="inset-0 fixed bg-black/60 z-[10000] "
      className="absolute top-1/2 bottom-0 left-1/2 right-0 bg-neutral-800 shadow-lg rounded-md border-gray-500 border-[1px]
      w-[560px] -translate-x-[50%] -translate-y-[50%] outline-none h-fit"
    >
      <div className="text-[24px] flex flex-col justify-center space-y-[50px] p-[29px]">
        <div className="text-white">새 플레이리스트</div>
        <div className="flex flex-col space-y-[40px]">
          <input
            className="bg-transparent border-b-[1px] border-b-zinc-400 placeholder:text-zinc-300 font-light text-white text-[15px] pb-[10px] outline-none"
            value={title}
            onChange={handleChangeTitle}
            autoFocus
            placeholder="제목"
          />
          <input
            className="bg-transparent border-b-[1px] border-b-zinc-400 placeholder:text-zinc-300 font-light text-white text-[15px] pb-[10px] outline-none"
            value={description}
            onChange={handleChangeDescription}
            placeholder="설명"
          />
        </div>
        <div>
          <div className="space-x-[32px] flex justify-end items-center mt-[10px]">
            <button
              className="text-white text-[15px] font-light "
              onClick={handleShowFalse}
            >
              취소
            </button>
            <button
              className={` text-[15px] font-[400]  px-[15px] py-[7px] rounded-sm ${
                !title.trim()
                  ? "bg-neutral-700 text-neutral-500"
                  : "bg-white text-neutral-500"
              }`}
              onClick={handleClickCreate}
              disabled={!title.trim()}
            >
              만들기
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
