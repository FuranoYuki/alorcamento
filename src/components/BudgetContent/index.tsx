import React from "react";

import BudgetTable from "../BudgetTable";
import { Container } from "./styles";

const BudgetContent: React.FC = () => {
  return (
    <Container>
      <BudgetTable />
    </Container>
  );
};

export default BudgetContent;
