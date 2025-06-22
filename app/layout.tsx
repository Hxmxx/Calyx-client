import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { GlobalStylesProvider } from "@/app/components/GlobalStylesProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          <GlobalStylesProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
