import React, { ReactElement } from "react";

type CardProps = {
  children: ReactElement | ReactElement[];
};
const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: "1rem",
        margin: "0 auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
