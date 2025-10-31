import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="site-nav" style={{ display: "flex", gap: 16 }}>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
