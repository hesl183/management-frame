import MallLayout from "@/views/mall/MallLayout";
import Goods from "./mall/Goods";

export default [
  {
    path: "/mall",
    name: "mall",
    component: MallLayout,
    children: [...Goods]
  },
  {
    path: "/",
    redirect: { name: "goodsList" }
  }
];
