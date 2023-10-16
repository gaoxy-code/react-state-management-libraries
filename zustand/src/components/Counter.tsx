import React from "react";
import { useStore } from "@/hooks/store";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Counter = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const reset = useStore((state) => state.reset);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
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
          <div style={{ display: "flex", gap: 8 }}>
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
