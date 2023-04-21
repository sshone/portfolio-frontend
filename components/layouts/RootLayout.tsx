import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}