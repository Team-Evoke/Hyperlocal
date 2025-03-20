import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "white" }}>
        <h2>Hyper Delivery</h2>
        <div>
          <Link href="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Home</Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </div>
      </nav>
      
      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Hello World</h1>
        <Link href="/about">
          <button style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>
            Go to About Page
          </button>
        </Link>
      </div>
    </div>
  );
}