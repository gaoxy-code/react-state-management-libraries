import React from "react";
import Counter from "@/features/Counter";
import { Provider, useAtom } from "jotai";
import {
  getThemeColor,
  getThemeText,
  themeValueAtom,
  changeThemeAtom,
} from "@/atoms/themeState";
import Button from "@/components/Button";

function App() {
  const [appTheme] = useAtom(themeValueAtom);
  const [, changeTheme] = useAtom(changeThemeAtom);

  const handleClick = () => {
    changeTheme();
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
      <Provider>
        <Counter />
      </Provider>
      <Provider>
        <Counter />
      </Provider>
      <Button onClick={handleClick} style={{ ...getThemeColor(!appTheme) }}>
        {getThemeText(appTheme)}
      </Button>
    </div>
  );
}

export default App;
