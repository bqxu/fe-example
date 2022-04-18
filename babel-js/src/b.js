export const func_b = () => {
  console.log("b");
};

export const func_c = async () => {
  console.log(c);
};

export const func_d = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });
};

export class c4 {
  constructor() {
    console.log("init");
  }
}
