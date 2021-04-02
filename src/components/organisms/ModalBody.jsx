import React from "react";
import ModalMainTitle from "../atoms/Modal/ModalMainTitle";
import ModalOutline from "../molecules/Modal/ModalOutline";
import ModalTitle from "../molecules/Modal/ModalTitle";

//新しいリストの要素
export function CreateModalBody() {
  return (
    <>
      <ModalMainTitle />
      <ModalTitle />
      <ModalOutline />
    </>
  );
}
