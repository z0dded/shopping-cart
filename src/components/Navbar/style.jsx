import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1.2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PagesList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
`;

export const PagesListItem = styled.li`
  font-size: 1.3rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const CartContainer = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.3rem;
  }
`;
