import React from "react";
import Card from "@/components/Card";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Button from "@/components/Button";
import { getThemeColor, themeValueAtom } from "@/atoms/themeState";
import { createCountAtoms } from "./atom";

const {
  valueAtom: firstAtom,
  incrementAtom: firstIncAtom,
  decrementAtom: firstDecAtom,
} = createCountAtoms(0);
const {
  valueAtom: secondAtom,
  incrementAtom: secondIncAtom,
  decrementAtom: secondDecAtom,
} = createCountAtoms(0);

const Counter = () => {
  const [appTheme] = useAtom(themeValueAtom);

  const [firstNum] = useAtom<number | null>(firstAtom);
  const [, incFirst] = useAtom(firstIncAtom);
  const [, decFirst] = useAtom(firstDecAtom);

  const secondNum = useAtomValue(secondAtom);
  const incSecond = useSetAtom(secondIncAtom);
  const decSecond = useSetAtom(secondDecAtom);

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card>
        <div
          style={{ fontSize: 18, fontWeight: "bold" }}
        >{`Counter1: ${firstNum}`}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            onClick={() => incFirst(1)}
            style={{ ...getThemeColor(appTheme) }}
          >
            +
          </Button>
          <Button
            onClick={() => decFirst(1)}
            style={{ ...getThemeColor(appTheme) }}
          >
            -
          </Button>
        </div>
      </Card>
      <Card>
        <div
          style={{ fontSize: 18, fontWeight: "bold" }}
        >{`Counter2: ${secondNum}`}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            onClick={() => incSecond(1)}
            style={{ ...getThemeColor(appTheme) }}
          >
            +
          </Button>
          <Button
            onClick={() => decSecond(1)}
            style={{ ...getThemeColor(appTheme) }}
          >
            -
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Counter;
