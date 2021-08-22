import React from "react";

import ProductTable from "../ProductTable";
import { Container } from "./styles";

const ProductContent: React.FC = () => {
  return (
    <Container>
      <ProductTable />
    </Container>
  );
};

export default ProductContent;
