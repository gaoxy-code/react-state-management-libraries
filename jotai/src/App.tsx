import React from "react";
import Counter from "@/components/Counter";
import { useAtom } from "jotai";
import { getThemeColor, getThemeText, theme } from "@/hooks/theme";
import Button from "@/components/Button";

function App() {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => {
    setAppTheme(!appTheme);
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
        ...getThemeColor(appTheme),
      }}
    >
      <Counter />
      <Button onClick={handleClick} style={{ ...getThemeColor(!appTheme) }}>
        {getThemeText(appTheme)}
      </Button>
    </div>
  );
}

export default App;
