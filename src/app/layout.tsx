import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import FloatingSidebar from "@/components/FloatingSidebar";

export const metadata = {
  title: "YARNSHOP - Fashion for Everyone",
  description: "Ecommerce clothing store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">
        <Header />
        <FloatingSidebar />
        <main className="min-h-screen container mx-auto px-4 py-8">
          {children}
          <Toaster richColors position="top-center" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
