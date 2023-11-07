import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { listSelector } from "./selector";
import { useRecoilValue } from "recoil";

const Counter = () => {
  const { list, completed } = useRecoilValue(listSelector);

  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {completed.map((item, index) => (
          <div
            key={index}
            style={{
              height: 40,
              padding: "4px 8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ flexGrow: 2, fontWeight: "bold", color: "#333333" }}>
              {item.value}
            </div>
            <div style={{ flexGrow: 1, color: "#999999", textAlign: "right" }}>
              {item.status}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ textAlign: "right", marginTop: "48px" }}
      >{`${completed.length}/${list.length}`}</div>
    </Card>
  );
};

export default Counter;
