import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        width: "100%",
        height: 50,
        fontSize: 24,
        backgroundColor: "#7B9D7F",
        border: "none",
        color: "#ffffff",
        borderRadius: 12,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
