import { FaMoon } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";

import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <header className="flex flex-row justify-around mt-2 shadow-xl p-3 sticky dark:bg-gray-900 dark:text-white">
        <h1 className="text-center text-3xl font-bold ">CodeHelp Blogs</h1>

        <div className="space-x-5">
          <button
            className="hover:scale-110 duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? <MdOutlineLightMode size={30} /> : <FaMoon size={30} />}
          </button>
        </div>
      </header>
    </div>
  );
};
export default Header;
