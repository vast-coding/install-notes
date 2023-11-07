// https://www.youtube.com/watch?v=9i38FPugxB8

type Props = {
  name: string;
} & (
  | {
      gender: "male";
      salary: number;
    }
  | {
      gender: "female";
      weight: number;
    }
);
const maleGroup: Props = { gender: "male", name: "Josh", salary: 1000 };
const femaleGroup: Props = { gender: "female", name: "Jen", weight: 1000 };

// cannot destructure props, need to use type guard instead
const Child = (props: Props) => {
  // need to use type guard
  if (props.gender === "male") {
    console.log(props.salary);
  }
  if (props.gender === "female") {
    console.log(props.weight);
  }
};

// api response

type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

const apiResponse: ApiResponse<number> = { status: "success", data: 123 };
const apiResponse2: ApiResponse<number> = { status: "error", message: "oops" };
