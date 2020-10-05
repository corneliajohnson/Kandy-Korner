import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { CustomerCard } from "./customers/CustomerCard";
import { ProductCard } from "./products/ProductCard";
import { EmployeeCard } from "./employees/EmployeeCard";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/customers">
        <CustomerCard />
      </Route>

      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      <Route path="/products">
        <ProductCard />
      </Route>

      <Route path="/employees">
        <EmployeeCard />
      </Route>
    </>
  );
};
