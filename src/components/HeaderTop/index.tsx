import React from "react";
import { useDispatch } from "react-redux";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { navbar } from "../../store/actions";
import { Container, Button, ButtonIcon, Logout, LogoutIcon } from "./styles";

const HeaderTop: React.FC = () => {
  const dispatch = useDispatch();

  const handlerButtonNavClick = () => {
    dispatch(navbar());
  };

  return (
    <Container>
      <Button onClick={handlerButtonNavClick}>
        <ButtonIcon icon={faBars} />
      </Button>
      <Logout to="/login">
        <LogoutIcon icon={faSignOutAlt} />
        <span>Sair</span>
      </Logout>
    </Container>
  );
};

export default HeaderTop;
