import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";
import { increment, decrement } from "./counterSlice";
import { countSelector } from "./counterSelector";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(countSelector);

  const handleClickAdd = () => {
    dispatch(increment(1));
  };

  const handleClickDec = () => {
    dispatch(decrement(1));
  };

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
        <div style={{ fontSize: 18, fontWeight: "bold" }}>{count}</div>
        <Button onClick={handleClickAdd}>+</Button>
        <Button onClick={handleClickDec}>-</Button>
      </Card>
    </div>
  );
};

export default Counter;
