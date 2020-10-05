import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./locations/LocationCard";
import { CustomerCard } from "./customers/CustomerCard";
import { ProductCard } from "./products/ProductCard";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/customers">
        <CustomerCard />
      </Route>

      <Route path="/locations">
        <LocationCard />
      </Route>

      <Route path="/products">
        <ProductCard />
      </Route>
    </>
  );
};
