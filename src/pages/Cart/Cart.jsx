import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import {
  CartContainer,
  CartItem,
  CartItemsContainer,
  ItemName,
  ItemPrice,
  Total,
} from "./style";

export const Cart = () => {
  const { cart } = useCart();

  const prices = cart.map(e => e.price);

  const cartTotal = prices.reduce((acc, item) => {
    return acc + Number(item);
  }, 0);

  return (
    <CartContainer>
      <CartItemsContainer>
        {cart.map(item => (
          <CartItem key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price}</ItemPrice>
          </CartItem>
        ))}
        <Total>Total: ${cartTotal.toFixed(2)}</Total>
      </CartItemsContainer>
    </CartContainer>
  );
};
