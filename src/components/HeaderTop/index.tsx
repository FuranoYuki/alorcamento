import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { navbar } from "../../store/actions";
import { logout } from "../../service/token";
import { Container, Button, ButtonIcon, Logout, LogoutIcon } from "./styles";

const HeaderTop: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerButtonNavClick = () => {
    dispatch(navbar());
  };

  const handlerLogoutClick = () => {
    logout();
    history.push("/login");
  };

  return (
    <Container>
      <Button onClick={handlerButtonNavClick}>
        <ButtonIcon icon={faBars} />
      </Button>
      <Logout onClick={handlerLogoutClick}>
        <LogoutIcon icon={faSignOutAlt} />
        <span>Sair</span>
      </Logout>
    </Container>
  );
};

export default HeaderTop;
