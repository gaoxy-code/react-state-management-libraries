import React from "react";
import Counter from "@/components/Counter";
import { useAtom } from "jotai";
import { theme } from "@/hooks/theme";

function App() {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => {
    setAppTheme(!appTheme);
  };
  const cardStyles = () => {
    return appTheme
      ? {
          color: "#333333",
          backgroundColor: "#ffffff",
        }
      : {
          color: "#ffffff",
          backgroundColor: "#333333",
        };
  };
  const buttonStyles = () => {
    return appTheme
      ? {
          color: "#ffffff",
          backgroundColor: "#333333",
        }
      : {
          color: "#333333",
          backgroundColor: "#ffffff",
        };
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        ...cardStyles(),
      }}
    >
      <Counter />
      <button
        onClick={handleClick}
        style={{
          width: 160,
          height: 32,
          fontSize: 18,
          fontWeight: "bold",
          border: "none",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
          ...buttonStyles(),
        }}
      >
        {appTheme ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default App;
