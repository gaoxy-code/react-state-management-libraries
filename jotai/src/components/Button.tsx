import React, { ReactNode } from "react";

type Props = {
  onClick: VoidFunction;
  style?: React.CSSProperties;
  children?: ReactNode;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: 160,
        height: 32,
        fontSize: 18,
        fontWeight: "bold",
        border: "none",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
