"use client";

import { CunninghamProvider } from "@openfun/cunningham-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CunninghamProvider>{children}</CunninghamProvider>;
}
