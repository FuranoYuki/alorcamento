import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCalculator } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Image, List, Item } from "./styles";

const NavBar: React.FC = () => {
  const state = useSelector<RootState>((state) => state.navBar);
  const navRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLSpanElement>(null);
  const budgetRef = useRef<HTMLSpanElement>(null);
  const field1Ref = useRef<HTMLAnchorElement>(null);
  const field2Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const nav = navRef.current as HTMLDivElement;
    const client = clientRef.current as HTMLSpanElement;
    const budget = budgetRef.current as HTMLSpanElement;
    const field1 = field1Ref.current as HTMLAnchorElement;
    const field2 = field2Ref.current as HTMLAnchorElement;

    if (state) {
      nav.style.width = 80 + "px";
      client.style.display = "none";
      budget.style.display = "none";
      field1.style.justifyContent = "center";
      field2.style.justifyContent = "center";
    } else {
      nav.style.width = 200 + "px";
      client.style.display = "flex";
      budget.style.display = "flex";
      field1.style.justifyContent = "flex-start";
      field2.style.justifyContent = "flex-start";
    }
  }, [state]);

  return (
    <Container ref={navRef}>
      <Header>
        <Link to="/home">
          <Image
            src="/Logo Rosa Fundo Transparente-03.png"
            alt="alopapers brand"
          />
        </Link>
      </Header>
      <List>
        <Item>
          <Link to="/customer" ref={field1Ref}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span ref={clientRef}>Clientes</span>
          </Link>
        </Item>
        <Item>
          <Link to="/budget" ref={field2Ref}>
            <FontAwesomeIcon icon={faCalculator} />
            <span ref={budgetRef}>Orcamento</span>
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default NavBar;
