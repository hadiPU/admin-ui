import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="flex min-h-screen">

        {/* ===== SIDEBAR (ASIDE) ===== */}
        <aside className="flex flex-col justify-between bg-special-bg text-white w-28 sm:w-64 py-6 px-4">

          {/* Bagian Atas: Logo + Nav */}
          <div>
            {/* Logo — langkah 12 */}
            <div className="mb-6">
              <Logo variant="secondary" />
            </div>

            {/* Navigasi Menu — langkah 11 */}
            <nav className="flex flex-col gap-1">
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">O</div>
                <div className="ms-3 hidden sm:block">Overview</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">B</div>
                <div className="ms-3 hidden sm:block">Balances</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">T</div>
                <div className="ms-3 hidden sm:block">Transactions</div>
              </div>
            </nav>
          </div>

          {/* Bagian Bawah: Logout + Divider + User — langkah 6,7,8,9,10 */}
          <div>
            {/* Logout — langkah 9 */}
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">L</div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>

            {/* Divider — langkah 8 */}
            <div className="border my-10 border-b-special-bg"></div>

            {/* User Info — langkah 10 */}
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">icon</div>
            </div>
          </div>

        </aside>

        {/* ===== BAGIAN KANAN ===== */}
        <div className="flex flex-col flex-1 min-h-0">

          {/* Header — langkah 14, 15, 16 */}
          <header className="flex justify-between items-center bg-special-mainBg border-b border-gray-03 px-6 py-4">

            {/* Kiri header: Username (atas) + Datetime (bawah) — langkah 15 */}
            <div className="flex items-center">
              <div className="flex flex-col mr-3">
                <div className="font-bold text-gray-01">Username</div>
                <div className="text-sm text-gray-02">May 19, 2023</div>
              </div>
            </div>

            {/* Kanan header: Icon + Search Box — langkah 15, 16 */}
            <div className="flex items-center gap-3">
              <div className="text-gray-01">Icon</div>
              <Input
                placeholder="Search..."
                backgroundColor="bg-white"
                border="border-white"
              />
            </div>

          </header>

          {/* Main Content — langkah 17 */}
          <main className="flex-1 min-h-0 px-6 py-6 bg-special-mainBg overflow-auto">
            {children}
          </main>

        </div>
      </div>
    </>
  );
}

export default MainLayout;