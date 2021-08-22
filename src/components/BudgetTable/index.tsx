import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import IBudget from "../../interfaces/IBudget";
import BudgetTableCell from "../BudgetTableCell";
import { Container, Table, THeader, TBody, Field } from "./styles";

const BudgetTable: React.FC = () => {
  const [filterOrder, setfilterOrder] = useState(true);
  const [budgets, setbudgets] = useState<IBudget[]>([]);

  const handlerUnsetFields = () => {
    const fields = document.querySelectorAll(".tableHeaderField");
    fields.forEach((field) => {
      const unsetFields = field as HTMLDivElement;
      const unsetIcon = field.firstElementChild as SVGAElement;

      unsetIcon.style.display = "none";
      unsetFields.style.backgroundColor = "transparent";
    });
  };

  const handlerOrderCustomer = (filterName: string) => {
    if (filterOrder) {
      switch (filterName) {
        case "Nome":
          budgets.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          break;
        case "CPF":
          budgets.sort((a, b) => (a.cpf > b.cpf ? 1 : b.cpf > a.cpf ? -1 : 0));
          break;
        case "CNPJ":
          budgets.sort((a, b) =>
            a.cnpj > b.cnpj ? 1 : b.cnpj > a.cnpj ? -1 : 0
          );
          break;
        case "Cidade":
          budgets.sort((a, b) =>
            a.city > b.city ? 1 : b.city > a.city ? -1 : 0
          );
          break;
        case "Estado":
          budgets.sort((a, b) =>
            a.state > b.state ? 1 : b.state > a.state ? -1 : 0
          );
          break;
        case "QTD":
          budgets.sort((a, b) => (a.qtd > b.qtd ? 1 : b.qtd > a.qtd ? -1 : 0));
          break;
        case "Total":
          budgets.sort((a, b) =>
            a.total > b.total ? 1 : b.total > a.total ? -1 : 0
          );
          break;
        case "Criacao":
          budgets.sort((a, b) =>
            a.createdAt > b.createdAt ? 1 : b.createdAt > a.createdAt ? -1 : 0
          );
          break;
        default:
          break;
      }
    } else {
      switch (filterName) {
        case "Nome":
          budgets.sort((a, b) =>
            a.name > b.name ? -1 : b.name > a.name ? 1 : 0
          );
          break;
        case "CPF":
          budgets.sort((a, b) => (a.cpf > b.cpf ? -1 : b.cpf > a.cpf ? 1 : 0));
          break;
        case "CNPJ":
          budgets.sort((a, b) =>
            a.cnpj > b.cnpj ? -1 : b.cnpj > a.cnpj ? 1 : 0
          );
          break;
        case "Cidade":
          budgets.sort((a, b) =>
            a.city > b.city ? -1 : b.city > a.city ? 1 : 0
          );
          break;
        case "Estado":
          budgets.sort((a, b) =>
            a.state > b.state ? -1 : b.state > a.state ? 1 : 0
          );
          break;
        case "QTD":
          budgets.sort((a, b) => (a.qtd > b.qtd ? -1 : b.qtd > a.qtd ? 1 : 0));
          break;
        case "Total":
          budgets.sort((a, b) =>
            a.total > b.total ? -1 : b.total > a.total ? 1 : 0
          );
          break;
        case "Criacao":
          budgets.sort((a, b) =>
            a.createdAt > b.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0
          );
          break;
        default:
          break;
      }
    }
  };

  const handlerFieldClick = (e: React.MouseEvent) => {
    const field = e.currentTarget as HTMLDivElement;
    const icon = field.firstElementChild as SVGAElement;
    const fieldName = field.lastElementChild as HTMLSpanElement;

    handlerUnsetFields();

    if (icon.style.transform == "scaleY(1)") {
      icon.style.transform = "scaleY(-1)";
      setfilterOrder(true);
    } else {
      icon.style.transform = "scaleY(1)";
      setfilterOrder(false);
    }

    icon.style.display = "flex";
    field.style.backgroundColor = "var(--dark-blue)";

    handlerOrderCustomer(fieldName.innerText);
  };

  const handlerDeleteRowClick = (id: string) => {
    api
      .delete("alorcamentos/budget/deleteOne", {
        data: {
          id,
        },
      })
      .then((res) => {
        setbudgets(res.data.budgets);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    api
      .get("/alorcamentos/budget/findAll")
      .then((res) => {
        setbudgets(res.data.budgets);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Table>
        <THeader>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Nome</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CPF</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CNPJ</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Cidade</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Estado</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>QTD</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Total</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Criacao</span>
          </Field>
          <Field>
            <span>Orçamento</span>
          </Field>
          <Field>
            <span>Guia</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody>
          {budgets &&
            budgets.map((budget: IBudget) => (
              <BudgetTableCell
                budget={budget}
                key={budget._id}
                handlerDeleteRowClick={handlerDeleteRowClick}
              />
            ))}
        </TBody>
      </Table>
    </Container>
  );
};

export default BudgetTable;
