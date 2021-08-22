interface IPdf {
  _id: string;
  size?: string;
  filename?: string;
  mimetype?: string;
  originalname?: string;
  path?: string;
  budget?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IPdf;
