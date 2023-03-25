import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  NavbarContainer,
  PagesList,
  PagesListItem,
  CartContainer,
} from "./style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <PagesList>
        <PagesListItem>
          <Link to={"/home"}>Home</Link>
        </PagesListItem>
        <PagesListItem>
          <Link to={"/"}>Store</Link>
        </PagesListItem>
        <PagesListItem>
          <Link to={"/about"}>About</Link>
        </PagesListItem>
      </PagesList>
      <CartContainer>
        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faCartShopping} size="sm" />
          Cart
        </Link>
      </CartContainer>
    </NavbarContainer>
  );
};
