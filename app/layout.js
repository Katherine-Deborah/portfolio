import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Retro game themed ML portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
