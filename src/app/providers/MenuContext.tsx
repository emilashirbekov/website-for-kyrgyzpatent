"use client";
import React, { createContext, useContext, useState } from "react";

interface MenuContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
