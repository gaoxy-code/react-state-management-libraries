import Button from "@/components/Button";
import React, { useRef } from "react";
import { store } from "@/store/todo";

const CreateTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const description = inputRef.current?.value;
    if (description) {
      store.todos.push({
        description: description,
        status: "pending",
        id: Math.floor(Math.random() * 16),
      });
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input
        type="text"
        name="description"
        minLength={2}
        ref={inputRef}
        style={{ height: 40, borderRadius: 8, border: "solid 1px #666666" }}
      />
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "#51aaf7", color: "#ffffff" }}
      >
        Add New
      </Button>
    </div>
  );
};

export default CreateTodo;
