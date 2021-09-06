import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import ModalDelete from "../ModalDelete";
import { successStyle, errorStyle } from "../Notifications";
import { Container, Table, THeader, TBody, Field } from "./styles";
import CustomerTableCell from "../CustomerTableCell";
import { login, logout } from "../../service/token";
import refreshToken from "../../functions/refreshToken";

interface Customer {
  _id: string;
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  neighbor: string;
  cep: string;
  email: string;
  cnpj: string;
  cpf: string;
}

const CustomerTable: React.FC = () => {
  const history = useHistory();
  const [id, setid] = useState("");
  const [modal, setmodal] = useState(false);
  const [filterOrder, setfilterOrder] = useState(true);
  const [customers, setcustomers] = useState<Customer[]>([]);

  const handlerDeleteRowClick = () => {
    api
      .post("/alorcamentos/customer/delete", { id })
      .then((res) => {
        toast.success("Cliente excluido", successStyle);
        setmodal(false);
        setcustomers(res.data.customers);
      })
      .catch(() => {
        setmodal(true);
        toast.error("Falha ao excluir o cliente", errorStyle);
      });
  };

  const handlerDeleteModal = (idRow = "") => {
    setid(idRow);
    setmodal(!modal);
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
          customers.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          break;
        case "E-mail":
          customers.sort((a, b) =>
            a.email > b.email ? 1 : b.email > a.email ? -1 : 0
          );
          break;
        case "Estado":
          customers.sort((a, b) =>
            a.state > b.state ? 1 : b.state > a.state ? -1 : 0
          );
          break;
        case "Cidade":
          customers.sort((a, b) =>
            a.city > b.city ? 1 : b.city > a.city ? -1 : 0
          );
          break;
        case "Bairro":
          customers.sort((a, b) =>
            a.neighbor > b.neighbor ? 1 : b.neighbor > a.neighbor ? -1 : 0
          );
          break;
        case "Endereço":
          customers.sort((a, b) =>
            a.address > b.address ? 1 : b.address > a.address ? -1 : 0
          );
          break;
        case "CEP":
          customers.sort((a, b) =>
            a.cep > b.cep ? 1 : b.cep > a.cep ? -1 : 0
          );
          break;
        case "CPF":
          customers.sort((a, b) =>
            a.cpf > b.cpf ? 1 : b.cpf > a.cpf ? -1 : 0
          );
          break;
        case "CNPJ":
          customers.sort((a, b) =>
            a.cnpj > b.cnpj ? 1 : b.cnpj > a.cnpj ? -1 : 0
          );
          break;
        case "Telefone":
          customers.sort((a, b) =>
            a.phoneNumber > b.phoneNumber
              ? 1
              : b.phoneNumber > a.phoneNumber
              ? -1
              : 0
          );
          break;
        default:
          break;
      }
    } else {
      switch (filterName) {
        case "Nome":
          customers.sort((a, b) =>
            a.name > b.name ? -1 : b.name > a.name ? 1 : 0
          );
          break;
        case "E-mail":
          customers.sort((a, b) =>
            a.email > b.email ? -1 : b.email > a.email ? 1 : 0
          );
          break;
        case "Estado":
          customers.sort((a, b) =>
            a.state > b.state ? -1 : b.state > a.state ? 1 : 0
          );
          break;
        case "Cidade":
          customers.sort((a, b) =>
            a.city > b.city ? -1 : b.city > a.city ? 1 : 0
          );
          break;
        case "Bairro":
          customers.sort((a, b) =>
            a.neighbor > b.neighbor ? -1 : b.neighbor > a.neighbor ? 1 : 0
          );
          break;
        case "Endereço":
          customers.sort((a, b) =>
            a.address > b.address ? -1 : b.address > a.address ? 1 : 0
          );
          break;
        case "CEP":
          customers.sort((a, b) =>
            a.cep > b.cep ? -1 : b.cep > a.cep ? 1 : 0
          );
          break;
        case "CPF":
          customers.sort((a, b) =>
            a.cpf > b.cpf ? -1 : b.cpf > a.cpf ? 1 : 0
          );
          break;
        case "CNPJ":
          customers.sort((a, b) =>
            a.cnpj > b.cnpj ? -1 : b.cnpj > a.cnpj ? 1 : 0
          );
          break;
        case "Telefone":
          customers.sort((a, b) =>
            a.phoneNumber > b.phoneNumber
              ? -1
              : b.phoneNumber > a.phoneNumber
              ? 1
              : 0
          );
          break;
        default:
          break;
      }
    }
  };

  const findAll = () => {
    api
      .post("/alorcamentos/customer/findAll")
      .then((res) => {
        setcustomers(res.data.customers);
      })
      .catch(async (error) => {
        if (error.response.data.tokenExpired) {
          const newToken = await refreshToken();

          if (newToken != "failedRefresh") {
            login(newToken);
            findAll();
          } else {
            logout();
            history.push("/login");
          }
        }
      });
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <Container>
      {modal && (
        <ModalDelete
          handlerDeleteModal={handlerDeleteModal}
          handlerDeleteRowClick={handlerDeleteRowClick}
        />
      )}
      <Table>
        <THeader>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Nome</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>E-mail</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Estado</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Cidade</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Bairro</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Endereço</span>
          </Field>
          <Field className="tableHeaderField" onClick={handlerFieldClick}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CEP</span>
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
            <span>Telefone</span>
          </Field>
          <Field>
            <span>Editar</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody>
          {customers.map((customer) => (
            <CustomerTableCell
              key={customer._id}
              customer={customer}
              handlerDeleteModal={handlerDeleteModal}
            />
          ))}
        </TBody>
      </Table>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default CustomerTable;
