import styled from "styled-components";

export const StoreContainer = styled.div`
  padding: 2rem 0;
`;

export const StoreList = styled.ul`
  width: 100%;
  display: grid;
  place-items: start center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
`;

export const StoreListItem = styled.div`
  list-style-type: none;
`;
