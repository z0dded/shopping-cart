import styled from "styled-components";

export const ProductContainer = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  width: 300px;
  /* min-height: 220px; */
`;

export const Title = styled.h1`
  color: black;
  font-size: 1.4rem;
`;

export const Description = styled.p`
  color: gray;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  color: black;
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

export const AddToCart = styled.button`
  border: none;
  background-color: #0e6ef4;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3e87ee;
  }

  &:disabled {
    background-color: #17b117;
    cursor: not-allowed;
  }
`;
