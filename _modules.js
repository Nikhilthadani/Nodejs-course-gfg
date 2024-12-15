class A {
  constructor() {
    console.log("Class initialized");
  }
}

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

export const mod = () => {};

//named export
export { add, div, sub, mul };

// default export
export default A;
