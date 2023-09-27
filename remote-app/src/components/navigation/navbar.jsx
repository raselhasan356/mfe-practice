import Todo from "../todo";
import Header from "./header";
import HeaderMenu from "./headerMenu";

import { store } from "webpackHost/store";

export const Navbar = () => {
  console.log(store);
  return (
    <>
      <Header />
      <HeaderMenu />
      <Todo />
    </>
  );
};

export default Navbar;
