import { useState, useRef } from "react";

export default function CustomModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function detectOutSideClick(event: any) {
    // console.log(dialogRef.current.contains(event.target) , "LOOk THIS")
    if (dialogRef.current) {
      const dialogDimensions = dialogRef.current.getBoundingClientRect();
      if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
      ) {
        dialogRef.current.close();
      }
    }
  }

  return (
    <>
      <div className="row">
        <div className="column">
          <dialog
            ref={dialogRef}
            className="m-auto"
            onClick={(event) => detectOutSideClick(event)}
          >
            <img src="/flowerImages/p5.jpg" className="modal--image" />
          </dialog>
          <div onClick={() => dialogRef.current?.showModal()}><img src="/flowerImages/p5.jpg" /></div>
        </div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </>
  );
}
