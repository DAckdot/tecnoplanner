// app/providers traido de la documentacion de next.ui
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
