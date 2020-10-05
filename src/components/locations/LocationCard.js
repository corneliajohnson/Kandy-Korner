import React from "react";

export const LocationCard = ({ location }) => {
  return (
    <section className="location">
      <p className="location__squareFootage">
        Square Feet: {location.squareFootage}
      </p>
      <p className="location__handicapAccessible">
        Handicap Accessible: {location.handicapAccessible}
      </p>
    </section>
  );
};
