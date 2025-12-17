import Topbar from "@/components/Topbar";
import BackToTop from "@/components/BackToTop";

export default function BeyondPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Topbar />
      <main style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <section className="reveal" style={{ textAlign: "center" }}>
          <div className="container">
            <h1 className="sectionTitle" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}>
              <span style={{ color: "var(--clr-accent)" }}>beyond</span> code.
            </h1>
            <div style={{ maxWidth: "700px", margin: "0 auto", color: "var(--clr-neutral)", fontSize: "1.5rem", lineHeight: "1.6" }}>
              <p>
                🚧 Work in Progress 🚧
              </p>
              <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
                Check back soon for updates on my creative pursuits!
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Built by Ritoban Dutta and fueled by an alarming number of open Chrome
          tabs 😛
        </p>
      </footer>
      <BackToTop />
    </div>
  );
}
