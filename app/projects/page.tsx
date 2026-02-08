import MorphicNavbar from "@/components/MorphicNavbar";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import ProjectsWithRadialNav from "@/components/ProjectsWithRadialNav";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    category: string;
}

const allProjects: Project[] = [
    {
        title: "Crypto Protocol Auditor",
        description: "AI-powered auditor built on MindsDB that unifies scattered crypto/web3 data into one conversational interface. Analyzes smart contracts, transaction patterns, and protocol health.",
        tags: ["MindsDB", "Next.js", "Python", "LLM APIs", "SQL", "REST APIs"],
        link: "https://github.com/ritoban23/crypto-protocol-auditor",
        category: "AI & Web3",
    },
    {
        title: "gh-showcase",
        description: "Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds. Published as an NPM package for easy integration.",
        tags: ["React", "TypeScript", "GitHub API", "NPM Package"],
        link: "https://github.com/ritoban23/gh-showcase",
        category: "Open Source",
    },
    {
        title: "orbWallet",
        description: "A web wallet for Solana & Ethereum. Create multiple wallets, generate public/private key pairs, and manage your crypto assets securely.",
        tags: ["Solana", "Ethereum", "Web3", "Cryptography"],
        link: "https://github.com/ritoban23/orbWallet",
        category: "Blockchain",
    },
    {
        title: "DevOps Pipeline",
        description: "Automated CI/CD pipeline with Docker, Kubernetes orchestration, and comprehensive monitoring dashboards. Includes Terraform infrastructure as code.",
        tags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
        link: "https://github.com/ritoban23",
        category: "DevOps",
    },
    {
        title: "ML Portfolio Optimizer",
        description: "Machine learning model for portfolio optimization using modern portfolio theory and reinforcement learning. Backtested on historical market data.",
        tags: ["Python", "TensorFlow", "Finance", "ML", "Pandas"],
        link: "https://github.com/ritoban23",
        category: "Machine Learning",
    },
    {
        title: "Distributed Cache System",
        description: "High-performance distributed caching system with consistent hashing, replication, and automatic failover. Achieves sub-millisecond latency.",
        tags: ["Go", "Redis", "gRPC", "Distributed Systems"],
        link: "https://github.com/ritoban23",
        category: "Systems",
    },
    {
        title: "Real-time Analytics Dashboard",
        description: "Full-stack analytics platform with real-time data streaming, interactive visualizations, and customizable widgets for business intelligence.",
        tags: ["Next.js", "WebSocket", "D3.js", "PostgreSQL", "Apache Kafka"],
        link: "https://github.com/ritoban23",
        category: "Full Stack",
    },
    {
        title: "Code Review Assistant",
        description: "AI-powered code review bot that integrates with GitHub PRs. Provides automated feedback on code quality, security issues, and best practices.",
        tags: ["Python", "OpenAI", "GitHub API", "FastAPI"],
        link: "https://github.com/ritoban23",
        category: "AI & Developer Tools",
    },
];

export default function ProjectsPage() {
    return (
        <>
            <MorphicNavbar />
            <main>
                <section className="reveal" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
                    <div className="container">
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <h1 className="sectionTitle">all projects</h1>
                            <p style={{ color: "var(--clr-neutral)", maxWidth: "600px", margin: "1rem auto" }}>
                                A collection of projects I&apos;ve built, from AI-powered tools to blockchain applications.
                                Each project represents a unique challenge and learning experience.
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

                        <ProjectsWithRadialNav projects={allProjects} />
                    </div>
                </section>
            </main>
            <BackToTop />
        </>
    );
}
