import React from "react";
import { useStore, reset } from "@/hooks/store";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card>
        <div
          style={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 36,
              textAlign: "center",
            }}
          >
            {count}
          </div>
          <div style={{ width: "100%", display: "flex", gap: 8 }}>
            <Button text="+" onClick={increase} />
            <Button text="-" onClick={decrease} />
          </div>
          <Button text="RESET" onClick={reset} />
        </div>
      </Card>
    </div>
  );
};

export default Counter;
