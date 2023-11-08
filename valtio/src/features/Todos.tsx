import { store } from "@/store/todo";
import React from "react";
import { useSnapshot } from "valtio";

const Todos = () => {
  const snap = useSnapshot(store);
  const todos = snap.todos.filter(
    ({ status }) => status === snap.filter || snap.filter === "all"
  );

  const handleClickRemove = (target: number) => {
    store.todos = todos.filter((todo) => todo.id !== target);
  };

  return (
    <div
      style={{
        height: "500px",
        overflowY: "auto",
        padding: 8,
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
              height: 40,
              lineHeight: "40px",
              alignItems: "center",
              padding: "0 8px",
              borderRadius: 8,
            }}
          >
            <span
              style={{ color: todo.status === "completed" ? "red" : "#333333" }}
            >
              {todo.description}
            </span>
            <button
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                border: "none",
                color: "#ffffff",
                backgroundColor: "#666666",
                fontSize: 24,
              }}
              onClick={() => handleClickRemove(todo.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
