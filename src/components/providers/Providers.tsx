"use client";

import { Provider as ReduxProvider } from "react-redux";
import { useEffect } from "react";
import { store } from "@/store";
import { ThemeProvider } from "@/context/ThemeContext";
import { registerGsap } from "@/lib/gsap";
import { destroyLenis, initLenis } from "@/lib/lenis";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Preloader />
        <Cursor />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}
