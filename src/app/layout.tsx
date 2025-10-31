import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bhupal Baral",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <main style={{ flex: 1, padding: "48px 0" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
