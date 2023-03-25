import React from "react";
import { useCart } from "../../context/cartContext";
import {
  ProductContainer,
  Title,
  Description,
  Price,
  AddToCart,
} from "./style";

export const Product = ({ title, description, price, currentItem }) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = item => {
    setCart(prev => [...prev, item]);
    console.log(cart);
  };

  return (
    <ProductContainer>
      <Title>{title}</Title>
      <Description>{description}...</Description>
      <Price>${price}</Price>
      <AddToCart
        onClick={() => handleAddToCart(currentItem)}
        disabled={cart.includes(currentItem)}
      >
        {cart.includes(currentItem) ? "Item Already On Cart" : "+ Add To Cart"}
      </AddToCart>
    </ProductContainer>
  );
};
