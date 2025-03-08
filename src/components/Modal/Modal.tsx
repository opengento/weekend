import { ReactNode, RefObject } from "react";

interface Modal {
  ref: RefObject<HTMLDialogElement | null>;
  close?: boolean;
  backdrop?: boolean;
  children: ReactNode;
}

const Modal = ({ ref, close = true, backdrop = true, children }: Modal) => {
  return (
    <dialog className="modal" ref={ref}>
      <div className="modal-box">
        <form method="dialog">
          {close && (
            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>
          )}
        </form>
        {children}
      </div>
      {backdrop && (
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      )}
    </dialog>
  );
};

export default Modal;
