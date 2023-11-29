import { useState, useRef } from "react";

export default function CustomModal() {
    // const myDialog = useRef<any>();
    // function handleClick(){
    //     myDialog.current.showModal();
    // }
  return (
    <>
      <div className="row">
        <div className="column">
          <dialog>hello</dialog>
        </div>
       
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>

    </>
  );
}
