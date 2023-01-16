import { modalStyles } from "@/constants/css";
import ReactModal from "react-modal";
import Player from "./Player";
import { useModal } from "./useModal";

function Modal() {
  const { show } = useModal();

  return (
    <div>
      <ReactModal isOpen={show} style={modalStyles}>
        <Player />
      </ReactModal>
    </div>
  );
}

export default Modal;
