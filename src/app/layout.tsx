"use-client";

import { ReactElement } from "react";

import RootLayoutWrapper from "@/layouts/RootLayoutWrapper";

import NonSSRWrapper from "@/components/NonSSRWrapper";
import ParentProvider from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body>
        <NonSSRWrapper>
          <ParentProvider>
            <RootLayoutWrapper>{children}</RootLayoutWrapper>
          </ParentProvider>
        </NonSSRWrapper>
      </body>
    </html>
  );
}
