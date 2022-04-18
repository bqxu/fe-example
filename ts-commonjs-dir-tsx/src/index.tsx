import React from "react";
import { func_a, CompontentA } from "./a";
import { func_b } from "./b";

export const func = () => {
  func_a();
  func_b();
  return <CompontentA />;
};
