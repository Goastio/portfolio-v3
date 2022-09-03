import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="relative z-50 mr-5 flex self-center ease-in-out sm:transition-all">
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FaSun className="text-lg transition-all hover:text-indigo-500 dark:hover:text-indigo-400" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <FaMoon className=" transition-all hover:text-indigo-500 dark:hover:text-indigo-400" />
        </button>
      )}
    </div>
  );
};

export default Toggle;
