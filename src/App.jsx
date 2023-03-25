import { GlobalStyle } from "./styles/globals";
import styled from "styled-components";
import { useItems } from "./context/itemsContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./pages/Cart/Cart";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f7f9fb;
`;

function App() {
  const { shoppingItems } = useItems();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
