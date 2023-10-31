import React from "react";
import Card from "@/components/Card";
import { atom, useAtom } from "jotai";
import Button from "@/components/Button";
import { getThemeColor, theme } from "@/hooks/theme";

const counterAtom = atom(0);

const Counter = () => {
  const [appTheme] = useAtom(theme);
  const readWriteAtom = atom(
    (get) => get(counterAtom),
    (get, set, update: number) => {
      set(counterAtom, get(counterAtom) + update);
    }
  );
  const [num, setNum] = useAtom(readWriteAtom);

  const handleClickPlus = () => {
    setNum(1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>{num}</div>
        <Button
          onClick={handleClickPlus}
          style={{ ...getThemeColor(appTheme) }}
        >
          +
        </Button>
      </Card>
    </div>
  );
};

export default Counter;
