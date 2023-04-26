import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Inter } from "next/font/google";
import RootLayout from "@/components/layouts/RootLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--poppins-font",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--inter-font",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${inter.variable}`}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </main>
  );
}
