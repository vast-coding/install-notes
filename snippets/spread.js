const names = ["John", "Jane", "Joe"];

// use when you don't want to mutate the original array
const nameLookupMutate = names.reduce((acc, name) => {
  acc[name] = "random value";
  return acc;
}, {});

const nameLookupFunctional = names.reduce(
  (acc, name) => ({
    ...acc,
    [name]: "random value",
  }),
  {}
);
