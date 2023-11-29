import { useState, useRef } from "react";
import { ProductsType } from "@/types";

export default function CustomModal({ prod }: any) {
  const { name, description, price, image, ratings, inStock, fastDelivery } =
    prod;
  const dialogRef = useRef<HTMLDialogElement>(null);

  function detectOutSideClick(event: any) {
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
      <div onClick={() => dialogRef.current?.showModal()}>
        <img src={image} className="modal--botton" />
      </div>
      <dialog
        ref={dialogRef}
        className="m-auto"
        onClick={(event) => detectOutSideClick(event)}
      >
        <img src={image} />
      </dialog>
    </>
  );
}
