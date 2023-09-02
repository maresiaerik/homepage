"use client";

import { PropsWithChildren, ReactElement, useState } from "react";
import Header, { FullScreenNavBar } from "./Header";
import Main from "./Main";
import LayoutContext from "@/lib/contexts/LayoutContext";

export default function RootLayoutWrapper({ children }: PropsWithChildren): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isMobileMenuOpen,
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        openMobileMenu: () => setIsMobileMenuOpen(true),
      }}
    >
      {isMobileMenuOpen ? (
        <FullScreenNavBar />
      ) : (
        <>
          <Header />
          <Main>{children}</Main>
        </>
      )}
    </LayoutContext.Provider>
  );
}
