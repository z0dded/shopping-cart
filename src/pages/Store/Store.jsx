import React from "react";
import { Product } from "../../components/Product/Product";
import { useItems } from "../../context/itemsContext";
import { StoreContainer, StoreList, StoreListItem } from "./style";

export const Store = () => {
  const { shoppingItems } = useItems();

  return (
    <StoreContainer>
      <StoreList>
        {shoppingItems.map(item => (
          <StoreListItem key={item.id}>
            <Product
              title={item.name}
              description={item.description.split(" ", 15).join(" ")}
              price={item.price}
              currentItem={item}
            />
          </StoreListItem>
        ))}
      </StoreList>
    </StoreContainer>
  );
};
