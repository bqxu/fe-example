export const func_a = () => {
  console.log("a");

  [1, 2].forEach((element) => {
    console.log(element);
  });

  [1, 2].filter((element) => element);

  [1, 2].map((element) => {
    return element;
  });
};
