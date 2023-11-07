# `Const` instead of enums

[My favorite typescript trick pattern](https://medium.com/@jakehockey10/my-favorite-typescript-trick-pattern-2664b2b3e28e)

```tsx
export const SupportedColors = ["red", "blue", "green"] as const;
// export type SupportedColor = typeof SupportedColors[number];
// Formatting adds braces ()
export type TSupportedColor = (typeof SupportedColors)[number];

// type guard.
// if we get a value, we do not know if it is a SupportedColor
export function isSupportedColor(color: unknown): color is TSupportedColor {
  if (color === undefined || color === null) return false;
  if (typeof color !== "string") return false;
  return SupportedColors.includes(color as TSupportedColor);
}

// usage:
function notifyUser(userInput: unknown) {
  if (isSupportedColor(userInput)) {
    // do something
  } else {
    // do something else
  }
}
```
