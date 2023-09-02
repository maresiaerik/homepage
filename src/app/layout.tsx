import { ReactElement } from "react";

import RootLayoutWrapper from "@/layouts/RootLayoutWrapper";

import ParentProvider from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body>
        <ParentProvider>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </ParentProvider>
      </body>
    </html>
  );
}
