import React from "react";

export const EmployeeCard = ({ location }) => {
  return (
    <section className="locations">
      <p className="location__address">{location.address}</p>
      <p className="location__squareFootage">{location.squareFootage}</p>
      <p className="location__handicapAccessible">
        {location.handicapAccessible}
      </p>
    </section>
  );
};
