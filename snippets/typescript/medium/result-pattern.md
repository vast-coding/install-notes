[Understanding result pattern in typescript](https://medium.aegis-techno.fr/understanding-result-pattern-in-typescript-e82934cea096)

```ts

type Result<T, E> = TSuccess<T> | TError<E>;

// interface Success<T> {
//   success: true;
//   value: T;
// }

type TSuccess<T> = {
    success: true;
    value: T;
  }

interface TError<E> {
  success: false;
  error: E;
}

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: "Division by zero" };
  }

  return { success: true, value: a / b };
}

const result = divide(10, 2);
if (result.success) {
  console.log("Success:", result.value);
} else {
  console.error("Error:", result.error);
}
```
