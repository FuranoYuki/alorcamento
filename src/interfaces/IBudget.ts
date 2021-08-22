interface IBudget {
  _id: string;
  name: string;
  cpf: string;
  cnpj: string;
  city: string;
  state: string;
  qtd: string;
  total: string;
  createdAt: string;
  budgetPDF: string;
  guiaPDF: string;
}

export default IBudget;
