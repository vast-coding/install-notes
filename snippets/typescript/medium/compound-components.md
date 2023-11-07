# Compound components

[The React Pattern You Never Heard of That You Should Be Using](https://brianjenney.medium.com/the-react-pattern-you-never-heard-of-that-you-should-be-using-5e92c2cfc1dd)

```js
import React, { createContext, useContext } from 'react';
const CartContext = createContext();

function Cart({ children }) {
// Here we would typically fetch and manage cart state
  const cartState = {/*...*/};
  return (
    <CartContext.Provider value={cartState}>
      <div>{children}</div>
    </CartContext.Provider>
  );
}
Cart.Item = function CartItem({ id }) {
  const { items } = useContext(CartContext);
  const item = items.find(item => item.id === id);
  return (
    // Render item based on its data
  );
};
Cart.Total = function CartTotal() {
  const { total } = useContext(CartContext);
  return (
    // Render total price
  );
};
```

## Only show the total

```tsx
<Cart>
  <Cart.Total />
</Cart>
```

## Show items first, then total

```tsx
<Cart>
  <Cart.Item id={1} />
  <Cart.Item id={2} />
  <Cart.Total />
</Cart>
```

## Show total first, then items

```tsx
<Cart>
  <Cart.Total />
  <Cart.Item id={1} />
  <Cart.Item id={2} />
</Cart>
```
