import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Container, Table, THeader, TBody, Tr, Th } from "./styles";
import ProductTableCell from "../ProductTableCell";

const ProductTable: React.FC = () => {
  const handlerClickTh = (e: React.MouseEvent) => {
    const th = e.currentTarget as HTMLTableCellElement;
    const ths = document.getElementsByTagName("th");

    Object.values(ths).forEach((th) => {
      const span = th.firstElementChild as HTMLSpanElement;
      if (span) {
        const arrow = span.firstElementChild as SVGElement;

        th.style.color = "var(--gray-dark-color)";
        th.style.backgroundColor = "transparent";
        arrow.style.transform = "scaleY(1)";
      }
    });

    const span = th.firstElementChild as HTMLSpanElement;
    if (span) {
      const arrow = span.firstElementChild as SVGElement;

      th.style.color = "white";
      arrow.style.transform = "scaleY(-1)";
      th.style.backgroundColor = "var(--dark-blue-hover)";
    }
  };

  return (
    <Container>
      <Table>
        <THeader>
          <Tr>
            <Th onClick={handlerClickTh}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
              </span>
              Name
            </Th>
            <Th onClick={handlerClickTh}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
              </span>
              Valor
            </Th>
            <Th onClick={handlerClickTh}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
              </span>
              Tipo
            </Th>
            <Th onClick={handlerClickTh}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
              </span>
              Acabemento
            </Th>
            <Th onClick={handlerClickTh}>
              <span>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
              </span>
              Code
            </Th>
            <Th>Editar</Th>
            <Th>Deletar</Th>
          </Tr>
        </THeader>
        <TBody>
          <ProductTableCell
            name={"papel de parede mapa mundi"}
            value={"R$90"}
          />
          <ProductTableCell
            name={"papel de parede cimento fresco"}
            value={"R$80"}
          />
        </TBody>
      </Table>
    </Container>
  );
};

export default ProductTable;
