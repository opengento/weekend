"use client";

import { useCallback, useRef } from "react";
import Modal from "@/components/Modal/Modal";
import Drawer from "@/components/Drawer/Drawer";

export default function Home() {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <>
      <button onClick={handleShow}>OPEN</button>
      <Modal ref={ref} close={true} backdrop={true}>
        BONJOUR
      </Modal>

      <Drawer button={(<div className="btn btn-primary">OpEn</div>)} size="2xl">
        COUCOU
      </Drawer>
    </>
  );
}
