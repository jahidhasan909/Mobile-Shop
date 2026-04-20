// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export const ProvidersTheme = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}