import React, { useRef } from "react";
import { toast } from "react-toastify";

import api from "../../service/http";
import { successStyle, errorStyle } from "../Notifications";
import {
  Container,
  Modal,
  Header,
  Field,
  Label,
  Input,
  Buttons,
  ButtonCancel,
  ButtonDelete,
} from "./styles";

interface Props {
  handlerDeleteModal: () => void;
  handlerDeleteRowClick: () => void;
}

const ModalDelete: React.FC<Props> = (Props) => {
  const passwordDeleteRef = useRef<HTMLInputElement>(null);

  const handlerDeleteButtonClick = () => {
    const password = passwordDeleteRef.current as HTMLInputElement;
    toast.success("verificando senha..", successStyle);

    api
      .post("/alorcamentos/user/VerifyPasswordDelete", {
        passwordDelete: password.value,
      })
      .then(() => {
        toast.info("Senha correta", successStyle);
        Props.handlerDeleteRowClick();
      })
      .catch(() => {
        toast.error("Senha incorreta", errorStyle);
      });
  };

  const handlerCloseModal = () => {
    Props.handlerDeleteModal();
  };

  const handlerOutClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      handlerCloseModal();
    }
  };

  return (
    <Container onClick={handlerOutClick}>
      <Modal>
        <Header>Delete</Header>
        <Field>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            ref={passwordDeleteRef}
          />
        </Field>
        <Buttons>
          <ButtonCancel type="button" onClick={handlerCloseModal}>
            Cancelar
          </ButtonCancel>
          <ButtonDelete type="button" onClick={handlerDeleteButtonClick}>
            Deletar
          </ButtonDelete>
        </Buttons>
      </Modal>
    </Container>
  );
};

export default ModalDelete;
