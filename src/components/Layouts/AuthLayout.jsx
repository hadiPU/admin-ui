import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import DarkModeToggle from "../Elements/DarkModeToggle";
import { ThemeContext } from "../../context/ThemeContext";

function AuthLayout(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main
        className={`min-h-screen bg-special-mainBg dark:bg-gray-900 flex items-center justify-center ${theme.name}`}
      >
        {/* container start */}
        <div className="w-full max-w-sm">
          <Logo />
          {children}
          <div className="flex justify-center mt-6">
            <DarkModeToggle />
          </div>
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;