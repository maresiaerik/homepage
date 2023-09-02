import { createContext } from "react";

export type LayoutContext = {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
};

export default createContext<LayoutContext>({
  isMobileMenuOpen: false,
  closeMobileMenu: () => {},
  openMobileMenu: () => {},
});
