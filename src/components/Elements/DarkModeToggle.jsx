import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-05 dark:hover:bg-gray-700 transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <LightModeIcon className="text-yellow-500" />
      ) : (
        <DarkModeIcon className="text-gray-01" />
      )}
    </button>
  );
}

export default DarkModeToggle;