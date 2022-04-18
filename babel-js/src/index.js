import "core-js/stable";
import "regenerator-runtime/runtime";
import { func_a } from "./a";
import { func_b } from "./b";

export const func = () => {
  func_a();
  func_b();
};
