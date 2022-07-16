import ProductInterface from "../interfaces/products";

let productList = new Array<ProductInterface>();

productList = [
  {
    id: "1",
    name: "Bánh Mì Việt Nam",
    details: "A typical Vietnamese roll or sandwich is a fusion of meats and vegetables from native Vietnamese cuisine such as chả lụa (pork sausage), coriander leaf (cilantro), cucumber, pickled carrots, and pickled daikon combined with condiments from French cuisine such as pâté, along with red chili and buttery mayonnaise.[7] However, a wide variety of popular fillings are used, from xíu mại (a Chinese cuisine) to even ice cream. In Vietnam, bread rolls and sandwiches are typically eaten for breakfast or as a snack.",
    rated: 5,
    imageSource:
      "https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2019_12_19/battongnucuoicuabanvoicachlamtrangrangbangcacnguyenlieudongiantrangrangbangnuocgao021537172872880width600height450.jpg",
  },
  {
    id: "2",
    name: "Bánh Chưng",
    details: "Chung Cake",
    rated: 5,
    imageSource:
      "https://file1.dangcongsan.vn/data/0/images/2021/02/08/duongntcd/13-chung-tet-td.jpg?dpi=150&quality=100&w=680",
  },
  {
    id: "3",
    name: "Cà Phê",
    details: "Coffee",
    rated: 5,
    imageSource:
      "https://nld.mediacdn.vn/2020/5/12/23723766-0-image-a-181579697765141-15892455662811158088874.jpg",
  },
  {
    id: "4",
    name: "Nước tăng lực Monster",
    details: "Dm Dat",
    rated: 5,
    imageSource: "https://cf.shopee.vn/file/51c5951bd49d08fff242c509b4785c40",
  },
  {
    id: "5",
    name: "Nem cuộn",
    details: "?? :D ??",
    rated: 5,
    imageSource:
      "https://image.cooky.vn/recipe/g2/14542/s640/recipe14542-635621834873923230.jpg",
  },
];

export default productList;
