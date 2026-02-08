import MorphicNavbar from "@/components/MorphicNavbar";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import WritingWithRadialNav from "@/components/WritingWithRadialNav";

export default function WritingPage() {
    return (
        <>
            <MorphicNavbar />
            <main>
                <section className="reveal" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
                    <div className="container">
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <h1 className="sectionTitle">thoughts & writings</h1>
                            <p style={{ color: "var(--clr-neutral)", maxWidth: "600px", margin: "1rem auto" }}>
                                Research papers, published works, and blog posts exploring technology,
                                creativity, and everything in between.
                            </p>
                            <Link
                                href="/"
                                style={{
                                    color: "var(--clr-accent)",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginTop: "1rem"
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Back to home
                            </Link>
                        </div>

                        <WritingWithRadialNav />
                    </div>
                </section>
            </main>
            <BackToTop />
        </>
    );
}
