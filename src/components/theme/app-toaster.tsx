"use client";

import { Toaster } from "sonner";
import { useTheme } from "@/hooks/use-theme";

export function AppToaster() {
  const { colorScheme } = useTheme();
  const isLight = colorScheme === "light";

  return (
    <Toaster
      theme={isLight ? "light" : "dark"}
      position="top-right"
      toastOptions={
        isLight
          ? {
              style: {
                background: "oklch(1 0 0)",
                border: "1px solid oklch(0.9 0.01 260)",
                color: "oklch(0.22 0.025 260)",
              },
            }
          : {
              style: {
                background: "rgb(30 41 59)",
                border: "1px solid rgb(51 65 85)",
                color: "white",
              },
            }
      }
    />
  );
}
