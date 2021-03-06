import ProductInterface from "../interfaces/products";

let productList = new Array<ProductInterface>();

productList = [
  {
    id: "1",
    name: "Vietnamese Bread",
    details: "Vietnamese Bread",
    rated: 5,
    type: "Normal food",
    imageSource:
      "https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg",
  },
  {
    id: "2",
    name: "Chung Cake",
    details: "Chung Cake",
    type: "Tradition food",
    rated: 5,
    imageSource:
      "https://file1.dangcongsan.vn/data/0/images/2021/02/08/duongntcd/13-chung-tet-td.jpg?dpi=150&quality=100&w=680",
  },
  {
    id: "3",
    name: "Coffee",
    details: "Coffee",
    type: "Soft Drink",
    rated: 5,
    imageSource:
      "https://nld.mediacdn.vn/2020/5/12/23723766-0-image-a-181579697765141-15892455662811158088874.jpg",
  },
  {
    id: "4",
    name: "Monster Energy Drink",
    details: "Soft Drink",
    rated: 5,
    imageSource: "https://cf.shopee.vn/file/51c5951bd49d08fff242c509b4785c40",
  },
  {
    id: "5",
    name: "Nem cuộn",
    details: "Fast Food",
    rated: 5,
    imageSource:
      "https://image.cooky.vn/recipe/g2/14542/s640/recipe14542-635621834873923230.jpg",
  },
];

export default productList;
