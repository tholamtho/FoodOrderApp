import UserComments from "./comments";
export interface Products {
  id: String;
  name: String;
  price: Number;
  image?: String;
  description?: String;
  isInStock: Boolean;
  provider: String;
  rated?: Array<UserComments>;
}
