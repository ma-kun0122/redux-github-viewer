import React from "react";
import ModalMainTitle from "../../atoms/Modal/ModalMainTitle";
import ModalTitleContent from "../../atoms/Modal/ModalTitleContent";
import ModalTitleName from "../../atoms/Modal/ModalTitleName";

function ModalTitle() {
  return (
    <>
      <ModalMainTitle />
      <ModalTitleName />
      <ModalTitleContent />
    </>
  );
}

export default ModalTitle;
