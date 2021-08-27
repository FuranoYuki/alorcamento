const formatCNPJ = (cnpjSample: string): string => {
  const x = cnpjSample
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/) as RegExpMatchArray;
  const formatedCNPJ = !x[2]
    ? x[1]
    : x[1] + "." + x[2] + "." + x[3] + "/" + x[4] + (x[5] ? "-" + x[5] : "");

  return formatedCNPJ;
};

const formatCPF = (cpfSample: string): string => {
  const x = cpfSample
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/) as RegExpMatchArray;
  const formatedCPF = !x[2] ? x[1] : `${x[1]}.${x[2]}.${x[3]}-${x[4]}`;

  return formatedCPF;
};

const formatPhone = (phoneSample: string): string => {
  const x = phoneSample
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/) as RegExpMatchArray;
  const formatedPhone = !x[2] ? x[1] : `(${x[1]}) ${x[2]}-${x[3]}`;

  return formatedPhone;
};

export { formatCPF, formatCNPJ, formatPhone };
