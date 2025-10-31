import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eaeaea" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontWeight: 600 }}>
          Bhupal Baral
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
