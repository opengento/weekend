import {IndividualProps} from "@/components/Individual/individual.types";
import Image from "next/image";
import { useCallback, useRef } from "react";

interface Avatar {
  individual: IndividualProps;
}

const IndividualAvatar = ({ individual }: Avatar) => {

  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {ref.current?.showModal();}, [ref]);

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <div className="avatar">
          <div
            className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <Image
              src={individual.avatarSrc}
              alt={individual.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        </div>
      </button>
      <dialog className="modal" ref={ref}>
        <form method="dialog">
          <button color="ghost" className="absolute right-2 top-2">x</button>
        </form>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default IndividualAvatar;
