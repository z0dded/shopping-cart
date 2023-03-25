import styled from "styled-components";

export const CartContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItemsContainer = styled.div`
  /* border: 1px solid red; */
`;

export const CartItem = styled.div`
  padding: 1rem;
  width: 44rem;
  border: 1px solid black;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

export const ItemName = styled.h2`
  font-size: 1.5rem;
`;

export const ItemPrice = styled.p`
  font-size: 1.1rem;
`;

export const Total = styled.h1`
  text-align: right;
`;
