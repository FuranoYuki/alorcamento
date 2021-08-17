import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import ProductTable from "../ProductTable";
import {
  Container,
  Filters,
  ViewPages,
  Pages,
  Search,
  SearchIcon,
  PagesInfo,
  PagesController,
  Controller,
} from "./styles";

const ProductContent: React.FC = () => {
  return (
    <Container>
      <Filters>
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
      </Filters>

      <ProductTable />

      <PagesInfo>
        <span>Mostrando de 1 até 1 de 1 registro</span>
        <PagesController>
          <Controller type="button">Anterior</Controller>
          <Controller type="button">Próximo</Controller>
        </PagesController>
      </PagesInfo>
    </Container>
  );
};

export default ProductContent;
