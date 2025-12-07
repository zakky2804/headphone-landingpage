"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const MobileMenu = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        className="md:hidden"
        size={28}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`transition duration-200 ${isOpen ? "opacity-100 scale-100 " : "opacity-0 scale-110 pointer-events-none"} absolute top-10 left-4 right-5 md:hidden backdrop-blur-2xl bg-white/40 rounded-2xl text-brand-dark font-varela-round  z-100`}
      >
        {children}
      </div>
    </>
  );
};

export default MobileMenu;
