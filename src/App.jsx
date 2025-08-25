import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Halaman/Home
function Home() {
  return (
    <section className="home">
      <h2>Hi, Saya Maulana 👋</h2>
      <p>Saya adalah seorang Programmer pemula yang sedang mempelajari React + Vite.</p>
    </section>
  );
}

// Halaman/About
function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        Saya adalah seorang pelajar SMKN 8 MALANG yang sedang mempelajari bahasa pemrograman web seperti HTML, CSS, JavaScript, Flutter dan React.
      </p>
    </section>
  );
}

// Halaman/Projects
function Projects() {
  return (
    <section className="section projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Website sederhana yang menggunakan React.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Portfolio menggunakan HTML, Javascript dan CSS.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>UI Telkomsel Flutter.</p>
        </div>
      </div>
    </section>
  );
}

// Halaman/Contact
function Contact() {
  return (
    <section className="section">
      <h2>Contact Me</h2>
      <p>Hubungi saya via email!</p>
      <a href="mailto:yourname@email.com" className="btn">
        Say Hello
      </a>
    </section>
  );
}

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Maulana. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
