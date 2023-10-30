import React, { ReactElement } from "react";
import { useAtom } from "jotai";
import { theme } from "@/hooks/theme";

type CardProps = {
  children: ReactElement | ReactElement[];
};
const Card = ({ children }: CardProps) => {
  const [appTheme] = useAtom(theme);
  const themeColor = () => {
    return appTheme
      ? {
          color: "#ffffff",
          backgroundColor: "#333333",
        }
      : {
          color: "#333333",
          backgroundColor: "#ffffff",
        };
  };

  return (
    <div
      style={{
        borderRadius: 12,
        padding: "1rem",
        margin: "0 auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        ...themeColor(),
      }}
    >
      {children}
    </div>
  );
};

export default Card;
