const express = require("express");
import { Products } from "./interface";
require("dotenv/config");
const app = express();

let api = process.env.API_URL;

app.get("/", (req: any, res: any) => {
  res.send("Main page");
});

app.get(`${api}/products`, (req: any, res: any) => {
  const products: Products = {
    id: "1",
    name: "food-no-1",
    price: 500,
  };

  res.send(products);
});

app.get(`${api}/providers`, (req: any, res: any) => {
  res.send("Providers page");
});

app.get(`${api}/customers`, (req: any, res: any) => {
  res.send("Customers page");
});

app.get(`${api}/admin`, (req: any, res: any) => {
  res.send("Admin page");
});

app.listen(3000, () => {
  //receive from port 3000
  console.log("Server on!");
});
