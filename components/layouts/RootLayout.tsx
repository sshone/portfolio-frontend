import Header from "@/components/Header";
import ScrollToTopButton from "../ScrollToTopButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen font-standard p-4">
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col">
        <main className="flex-grow">{children}</main>
        <ScrollToTopButton />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
