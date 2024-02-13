import ReactModal from "react-modal";
import { ModalInterface } from ".";
export const Modal: React.FC<ModalInterface> = ({
  isOpen,
  title,
  children,
  className = "",
  onAfterClose,
  onAfterOpen,
  onRequestHide,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        overlayClassName={
          "fixed w-full h-full bg-primary/40 backdrop-sm inset-0 z-[9999999999] flex justify-center items-center"
        }
        className={`${className} p-2 bg-white min-w-96  shadow-inner outline-none`}
        onAfterClose={() => {
          onAfterClose?.();
        }}
        onAfterOpen={() => {
          onAfterOpen?.();
        }}
        onRequestClose={() => onRequestHide?.()}
        ariaHideApp={false}
      >
        <p className="w-full text-center text-sm mb-2">{title}</p>
        {children}
      </ReactModal>
    </>
  );
};
