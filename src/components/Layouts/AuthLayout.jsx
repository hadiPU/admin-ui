import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
    const { children } = props;

  return (
    <>
      <main className="min-h-screen bg-special-mainBg flex items-center justify-center">
        {/* container start */}
        <div className="w-full max-w-sm">
        <Logo />
        {children}
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;