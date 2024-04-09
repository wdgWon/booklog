import { PropsWithChildren } from "react";

import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;