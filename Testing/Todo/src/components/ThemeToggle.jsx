import { useTheme } from "react-theme-kit-ui";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
    className="border border-[#ccc]"
    onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;