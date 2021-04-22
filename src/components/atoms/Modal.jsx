import Modal from "react-modal";
import styled from "styled-components";
import { TextInput } from "./InputText";
import { Textarea } from "./Textarea";

//以下、Modalの定義
export const ModalBody = styled(Modal)`
  background-color: white;
  border: 1px solid rgb(225, 228, 232);
  outline-style: none;
  border-radius: 6px;
  width: 60%;
  min-width: 400px;
  margin: 40px auto;
  padding: 20px;
`;
export const ModalContainer = styled.div`
  margin: 0 auto;
  padding: 0px 40px;
`;
export const ModalTitle = styled.h2``;

export const ModalContent = styled.div`
  margin-top: 60px;
`;

export const ModalContent1 = styled.div``;
export const ModalContent2 = styled.div`
  margin-top: 40px;
`;

export const ModalTextInput = styled(TextInput)`
  margin: 0px;
  width: 100%;
`;

export const ModalTextarea = styled(Textarea)`
  margin: 0px;
  width: 100%;
`;

export const ModalSelect = styled.select``;

export const ModalOption = styled.option``;

export const ModalFooter = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;
