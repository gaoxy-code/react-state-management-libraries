import React from "react";
import Todos from "@/features/Todos";
import Filters from "@/features/Filters";
import CreateTodo from "@/features/CreateTodo";
import Card from "@/components/Card";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#333333",
        fontSize: 20,
        boxSizing: "border-box",
      }}
    >
      <Card>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 36, fontWeight: "bold" }}>To-Do List</span>
          <CreateTodo />
          <Filters />
          <Todos />
        </div>
      </Card>
    </div>
  );
}

export default App;
