import HamburgerButton from "../components/HamburgerButton";
import Menu from "../components/Menu";

import { useState } from "react";



export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
        <div className="md:hidden relative">
          <div className="flex justify-end">
            <HamburgerButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
          </div>

          {menuOpen && (
            <div className="absolute right-4 p-2 pb-4 px-4 w-48 bg-(--background)/30 backdrop-blur-md shadow-lg z-50">
              <Menu />
            </div>
          )}
        </div>
  )
}
