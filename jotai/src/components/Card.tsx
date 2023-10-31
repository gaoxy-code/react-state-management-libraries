import React, { ReactElement } from "react";
import { atom, useAtom } from "jotai";
import { getThemeColor, theme } from "@/hooks/theme";

type CardProps = {
  children: ReactElement | ReactElement[];
};
const Card = ({ children }: CardProps) => {
  // NOTE: readonly atom
  const readOnlyAtom = atom((get) => get(theme));
  const [appTheme] = useAtom(readOnlyAtom);

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
