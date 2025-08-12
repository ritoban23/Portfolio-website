import Image from 'next/image';
import Link from 'next/link';

export default function RepCounterPage(){
  return (
    <main className="container" style={{padding:"3rem 1rem"}}>
      <h1 className="sectionTitle">Rep Counter <strong>Web App</strong></h1>
      <p className="pill">Simple set-and-rep tracking for focused workouts</p>
      <p>Try it online: <a href="https://gilded-sable-10eb04.netlify.app/" target="_blank" rel="noreferrer">Live demo</a></p>
      <Image src="/img/repCounterSS.png" alt="Screenshot of Rep Counter web app" width={1200} height={675} />
      <p>The Rep Counter is a minimal web app to track reps and sets quickly. Built with HTML, CSS, and JavaScript. The focus is on speed and clarity with keyboard support and snappy UI updates.</p>
      <ul>
        <li>Zero-dependency frontend</li>
        <li>Clear increment/decrement actions and set management</li>
        <li>Local state persistence (optional enhancement)</li>
      </ul>
      <p><Link href="/">← Back</Link></p>
    </main>
  );
}
