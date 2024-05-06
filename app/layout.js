import { Quicksand } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const inter = Quicksand({
  subsets: ["latin"],
  weight: '500',
});

export const metadata = {
  title: "Rutuja Kothekar",
  description: "Software Development Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
