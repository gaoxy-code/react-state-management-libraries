import React from "react";
import { RecoilRoot } from "recoil";
import Counter from "@/features/Counter";
import List from "@/features/List";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <Counter />
        <List />
      </div>
    </RecoilRoot>
  );
}

export default App;
