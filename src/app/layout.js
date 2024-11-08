import "./globals.css";
export const metadata = {
  title: "Cinema App",
  description: "Aplicativo de cinema",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
