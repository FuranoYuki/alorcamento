import React from "react";

// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CustomerTable from "../CustomerTable";
import {
  Container,
  // Filters,
  // ViewPages,
  // Pages,
  // Search,
  // SearchIcon,
  // PagesInfo,
  // PagesController,
  // Controller,
} from "./styles";

const ClientContent: React.FC = () => {
  return (
    <Container>
      {/* <Filters>
        <ViewPages>
          <Pages name="pages" id="pages">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Pages>
          <span>resultados por página</span>
        </ViewPages>
        <Search>
          <label htmlFor="search">
            Pesquisar
            <SearchIcon icon={faSearch} />
          </label>
          <input name="search" id="search" />
        </Search>
      </Filters> */}

      <CustomerTable />

      {/* <PagesInfo>
        <span>Mostrando de 1 até 1 de 1 registro</span>
        <PagesController>
          <Controller type="button">Anterior</Controller>
          <Controller type="button">Próximo</Controller>
        </PagesController>
      </PagesInfo> */}
    </Container>
  );
};

export default ClientContent;
