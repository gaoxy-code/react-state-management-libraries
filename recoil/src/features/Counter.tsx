import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const counterAtom = atom({
  key: "Counter",
  default: 0,
});

const Counter = () => {
  const count = useRecoilValue(counterAtom);
  const setCount = useSetRecoilState(counterAtom);

  const handleClickAdd = () => setCount(count + 1);
  return (
    <Card>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <div style={{ fontSize: 26, fontWeight: "bold" }}>{count}</div>
        <Button onClick={handleClickAdd}>+</Button>
      </div>
    </Card>
  );
};

export default Counter;
