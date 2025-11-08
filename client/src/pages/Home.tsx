import React, { useEffect, useState } from "react";

/**
 * Home.tsx - deliverable version
 * - Uses vanilla React + Tailwind classes (no framer-motion or lucide)
 * - Hero word-by-word animate using CSS classes applied by JS (respects prefers-reduced-motion)
 * - Slide panel implemented with React state and CSS transitions
 *
 * Place this file in your React project (e.g., src/pages/Home.tsx or src/Home.tsx)
 */

export default function Home() {
  const heroText = "Reinventing Compliance for Growth";
  const words = heroText.split(" ");
  const [visibleWords, setVisibleWords] = useState<number>(-1);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelTitle, setPanelTitle] = useState("");
  const [panelHtml, setPanelHtml] = useState("");
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setVisibleWords(words.length - 1);
      return;
    }
    let t = 0;
    words.forEach((_, i) => {
      t = window.setTimeout(() => setVisibleWords(i), 90 * i);
    });
    return () => {
      window.clearTimeout(t);
    };
  }, []);

  // Panel content map (edit as needed)
  const panelContent = {
    "policy": {
      title: "Compliance Policy Development",
      html: `<p class="mb-4">We develop clear, practical policies that align operations with regulations and industry best practice.</p>`
    },
    "risk": {
      title: "Risk Management Framework Design",
      html: `<p class="mb-4">Enterprise risk frameworks tailored to your business objectives and regulatory profile.</p>`
    },
    "training": {
      title: "Compliance Training & Advisory",
      html: `<p class="mb-4">Practical, role-based training programs to embed a culture of compliance.</p>`
    },
    "audit": {
      title: "Regulatory Readiness & Audit Support",
      html: `<p class="mb-4">Readiness assessments, remediation roadmaps and audit support to ensure compliance.</p>`
    },
    "presentations": {
      title: "Custom Compliance Presentations",
      html: `<p class="mb-4">Board-ready materials and training decks that tell the compliance story clearly.</p>`
    },
    "automation": {
      title: "GRC Automation & Tooling",
      html: `<p class="mb-4">Practical automation to streamline controls, monitoring and reporting.</p>`
    },
    "about-me": {
      title: "About Mohamed Emam",
      html: `<p class="mb-4">Mohamed Emam is a seasoned GRC consultant focused on transforming regulatory requirements into measurable business value.</p><p>Contact: <a href="#" class="text-indigo-600">LinkedIn</a></p>`
    }
  };

  function openPanel(id) {
    const entry = panelContent[id] || { title: "Details", html: "<p>Coming soon</p>" };
    setPanelTitle(entry.title);
    setPanelHtml(entry.html);
    setPanelOpen(true);
    // lock scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  function closePanel() {
    setPanelOpen(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  const services = [
    { id: "policy", title: "Compliance Policy Development", excerpt: "Clear policies that align operations with regulations.", imagePath: "/assets/images/services/policy-dev.svg" },
    { id: "risk", title: "Risk Management Framework Design", excerpt: "Actionable risk analysis and prioritized remediation.", imagePath: "/assets/images/services/risk-assessment.svg" },
    { id: "training", title: "Compliance Training & Advisory", excerpt: "Bespoke training and advisory to build a culture of compliance.", imagePath: "/assets/images/services/training.svg" },
    { id: "audit", title: "Regulatory Readiness & Audit Support", excerpt: "Pre-audit assessments and remediation roadmaps.", imagePath: "/assets/images/services/audit.svg" },
    { id: "presentations", title: "Custom Compliance Presentations", excerpt: "Engaging materials for boards and staff awareness.", imagePath: "/assets/images/services/presentations.svg" },
    { id: "automation", title: "GRC Automation & Tooling", excerpt: "Streamline controls, monitoring & reporting with tooling.", imagePath: "/assets/images/services/automation.svg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600">GRC Consulting</a>
          <nav className="hidden lg:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About Me</a>
            <a href="#case-studies" className="text-gray-600 hover:text-indigo-600">Case Studies</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-full">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center pt-20 lg:pt-0">
        <div className="absolute inset-0">
          {/* YouTube background embed */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/lqm1XqA-FjE?autoplay=1&mute=1&loop=1&playlist=lqm1XqA-FjE&controls=0&showinfo=0&modestbranding=1"
            title="Compliance Channel Background Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" aria-hidden />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
          <img src="/assets/images/channels4_profile.jpg" alt="GRC Consulting logo" className="h-20 lg:h-28 object-contain" />
          <div>
            <h1 id="hero-headline" className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              {words.map((w, i) => (
                <span
                  key={i}
                  className={`inline-block mr-2 transform transition-all duration-500 ${visibleWords >= i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  aria-hidden={true}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p id="hero-sub" className="mt-4 text-lg text-white/90 max-w-3xl">
              We transform compliance from a cost center into a strategic enabler — bridging governance, risk, and technology.
            </p>
            <a href="#services" className="inline-block mt-6 rounded-full px-5 py-3 bg-white text-black font-medium focus:ring-4 focus:ring-white/40 hover:bg-gray-200 transition">See what we do</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => openPanel(s.id)}
                className={`group block rounded-2xl overflow-hidden shadow-lg relative border-0 p-0 bg-white`}
                aria-label={`Open ${s.title}`}
              >
                <div className="relative h-56 md:h-64">
                  {/* placeholder SVG as background */}
                  <img src={s.imagePath} alt={`${s.title} image`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    <p className="text-sm text-white/90 mt-1 hidden md:block">{s.excerpt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <button aria-label="Open About profile" onClick={() => openPanel('about-me')} className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-96">
                  <img src="/assets/images/emam-photo-new.jpg" alt="Mohamed Emam profile photo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white">Mohamed Emam</h3>
                    <p className="text-sm text-white/90 mt-1 hidden md:block">GRC Consultant — Strategy & Controls</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl text-gray-600 mb-6">I’m Mohamed Emam — a GRC consultant dedicated to turning regulatory compliance into measurable business value.</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services Summary:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <li>Compliance program design & policies</li>
                <li>Risk & control assessments</li>
                <li>Regulatory readiness & remediation</li>
                <li>GRC automation & tooling</li>
                <li>Training & awareness programs</li>
              </ul>
              <a href="#contact" className="inline-block mt-8 bg-indigo-600 text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg">Let's Connect</a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies (reuse service placeholder approach) */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <button onClick={() => openPanel('aml-cft')} className="group block rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-56 md:h-64 bg-gradient-to-br from-indigo-600 to-blue-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">AML/CFT Program Implementation</h3>
                  <p className="text-white/90 mt-1 hidden md:block">Improved compliance coverage and reduced manual effort by 60%.</p>
                </div>
              </div>
            </button>
            {/* add more as needed */}
          </div>
        </div>
      </section>

      {/* Slide panel */}
      <div
        id="slide-panel"
        className={`fixed top-0 right-0 w-full md:w-2/5 lg:w-1/3 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${panelOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!panelOpen}
      >
        <div className="p-6 md:p-10 relative">
          <button id="close-panel" onClick={closePanel} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100" aria-label="Close panel">
            {/* simple X */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          {panelTitle && <h2 className="text-3xl font-bold mb-6 text-gray-800">{panelTitle}</h2>}
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: panelHtml }} />
        </div>
      </div>
    </div>
  );
}
