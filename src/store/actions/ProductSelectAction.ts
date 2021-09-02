/* eslint-disable require-jsdoc */
export interface IProductSelect {
  type: string;
  payload: IProduct;
}

export interface IProduct {
  name: string;
  value: string;
  finish: string;
}

function ProductSelectAction(data: IProduct): IProductSelect {
  return {
    type: "navbar",
    payload: data,
  };
}

export default ProductSelectAction;
