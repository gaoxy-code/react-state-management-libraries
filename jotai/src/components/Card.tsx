import React, { ReactElement } from "react";
import { useAtom } from "jotai";
import { getThemeColor, themeValueAtom } from "@/atoms/themeState";

type CardProps = {
  children: ReactElement | ReactElement[];
};
const Card = ({ children }: CardProps) => {
  const [appTheme] = useAtom(themeValueAtom);

  return (
    <div
      style={{
        borderRadius: 12,
        padding: "1rem",
        margin: "0 auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        ...getThemeColor(!appTheme),
      }}
    >
      {children}
    </div>
  );
};

export default Card;
