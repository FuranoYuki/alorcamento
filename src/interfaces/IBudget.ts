interface IBudget {
  qtd: string;
  _id: string;
  cpf: string;
  cnpj: string;
  city: string;
  name: string;
  paid?: string;
  state: string;
  total: string;
  guiaPDF: string;
  budgetPDF: string;
  createdAt: string;
}

export default IBudget;
