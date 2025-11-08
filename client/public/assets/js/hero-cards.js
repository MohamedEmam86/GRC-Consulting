// hero-cards.js

// Data for the Hero section animation
const heroHeadlines = [
    "Compliance Excellence",
    "Risk Management Frameworks",
    "Regulatory Readiness",
    "Digital GRC Transformation"
];

// Data for the slide panel content
const panelContent = {
    "policy": {
        title: "Compliance Policy Development",
        content: `
            <p class="text-lg mb-4">We specialize in developing clear, comprehensive, and actionable compliance policies that align with global standards and local regulations (e.g., AML/CFT, Sanctions, Code of Conduct).</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Key Deliverables:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Anti-Money Laundering (AML) & Counter-Terrorist Financing (CTF) policies</li>
                <li>Sanctions compliance frameworks and screening procedures</li>
                <li>Conflict of Interest policies and disclosure procedures</li>
                <li>Code of Conduct and Ethics policies</li>
                <li>Anti-Bribery and Anti-Corruption frameworks</li>
                <li>Vendor due diligence policies</li>
                <li>Whistleblowing and incident reporting procedures</li>
                <li>Board governance policies</li>
                <li>Policy gap analysis and implementation roadmaps</li>
                <li>Compliance with local regulatory requirements</li>
                <li>Professional policy documents aligned with international standards</li>
            </ul>
        `
    },
    "risk": {
        title: "Risk Management Framework Design",
        content: `
            <p class="text-lg mb-4">Establish a robust Enterprise Risk Management (ERM) framework to identify, assess, and mitigate risks effectively, turning potential threats into strategic opportunities.</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Key Deliverables:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Risk assessment methodology development</li>
                <li>Risk appetite and tolerance framework</li>
                <li>Risk register design and implementation</li>
                <li>Key Risk Indicators (KRI) development</li>
                <li>Risk reporting dashboards and visualizations</li>
                <li>Three Lines of Defense model implementation</li>
                <li>Customized ERM framework documentation</li>
                <li>Risk assessment templates and tools</li>
                <li>Training materials for risk owners</li>
                <li>Risk governance structure recommendations</li>
            </ul>
        `
    },
    "training": {
        title: "Compliance Training & Advisory",
        content: `
            <p class="text-lg mb-4">Provide expert consultation and bespoke training programs to foster a strong culture of compliance within your organization, ensuring all stakeholders understand their responsibilities.</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Key Deliverables:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Compliance program health checks and assessments</li>
                <li>Regulatory interpretation and guidance</li>
                <li>AML/CFT transaction monitoring optimization</li>
                <li>Sanctions screening process improvement</li>
                <li>Compliance culture development workshops</li>
                <li>Board and senior management training</li>
                <li>Regulatory change impact assessments</li>
                <li>Compliance technology selection advisory</li>
                <li>Customized training presentations</li>
                <li>Workshop facilitation and expert consultation</li>
                <li>Advisory reports with actionable recommendations</li>
                <li>Ongoing consultation support</li>
            </ul>
        `
    },
    "audit": {
        title: "Regulatory Readiness & Audit Support",
        content: `
            <p class="text-lg mb-4">Prepare your firm for regulatory audits and inspections with comprehensive readiness assessments, gap analysis, and remediation support, minimizing regulatory risk.</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Key Deliverables:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Pre-audit readiness assessments</li>
                <li>Gap analysis against regulatory requirements</li>
                <li>Remediation action plans with timelines</li>
                <li>Mock audit exercises and simulations</li>
                <li>Regulatory filing and reporting support</li>
                <li>Response letter drafting for regulatory inquiries</li>
                <li>Compliance program maturity assessments</li>
                <li>Audit readiness reports and documentation</li>
                <li>Gap remediation roadmaps</li>
                <li>Supporting documentation packages</li>
                <li>Regulatory communication drafting</li>
            </ul>
        `
    },
    "presentations": {
        title: "Custom Compliance Presentations",
        content: `
            <p class="text-lg mb-4">Deliver professional, engaging, and interactive HTML-based presentations for board reporting, investor relations, and internal training, simplifying complex GRC topics.</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Key Deliverables:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Board reporting dashboards and scorecards</li>
                <li>Compliance training presentations</li>
                <li>Regulatory submissions and filings</li>
                <li>Investor presentations (compliance aspects)</li>
                <li>Client-facing compliance credentials</li>
                <li>Internal awareness campaigns</li>
                <li>Interactive HTML presentations</li>
                <li>Branded slide decks with custom design</li>
                <li>Data visualization and infographics</li>
                <li>Presentation coaching and delivery support</li>
            </ul>
        `
    },
    "aml-cft": {
        title: "Case Study: AML/CFT Program Implementation",
        content: `
            <p class="text-lg mb-4"><strong>Client:</strong> Regional Fintech Startup</p>
            <p class="text-lg mb-4"><strong>Challenge:</strong> The client needed a robust, scalable AML/CFT program to meet regulatory requirements for their rapid expansion into new markets, while minimizing operational friction.</p>
            <p class="text-lg mb-4"><strong>Solution:</strong> Designed and implemented a risk-based AML/CFT framework, including policy development, automated transaction monitoring rules, and staff training. This resulted in a 60% reduction in manual alert reviews and full compliance with target market regulations.</p>
            <p class="text-lg mb-4"><strong>Outcome:</strong> Improved compliance coverage and reduced manual effort by 60%. The client successfully secured a new operating license.</p>
            <a href="https://youtu.be/s4kLWH-lKd8?si=nvCc5uR9AK50ApT1" target="_blank" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mt-4">
                Watch Video Summary <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
        `
    },
    "risk-transform": {
        title: "Case Study: Risk Framework Transformation",
        content: `
            <p class="text-lg mb-4"><strong>Client:</strong> Mid-sized Financial Services Firm</p>
            <p class="text-lg mb-4"><strong>Challenge:</strong> The existing risk management process was siloed and reactive, lacking a unified view of enterprise-wide risks and a clear risk appetite statement.</p>
            <p class="text-lg mb-4"><strong>Solution:</strong> Developed and implemented a new Enterprise Risk Management (ERM) framework, including a formalized risk appetite statement, a centralized risk register, and a dashboard for board reporting. This established a proactive, top-down approach to risk governance.</p>
            <p class="text-lg mb-4"><strong>Outcome:</strong> Enhanced board visibility into key risks and established a clear, measurable risk appetite, improving strategic decision-making.</p>
            <a href="https://youtu.be/ryeF5JwZYvk?si=HIud3P3Y1NdQGyKj" target="_blank" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mt-4">
                Watch Video Summary <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
        `
    },
    "readiness-assess": {
        title: "Case Study: Compliance Readiness Assessment",
        content: `
            <p class="text-lg mb-4"><strong>Client:</strong> Growing Technology Company</p>
            <p class="text-lg mb-4"><strong>Challenge:</strong> The client was preparing for a major regulatory audit and needed an independent assessment of their compliance posture to identify and remediate gaps before the audit date.</p>
            <p class="text-lg mb-4"><strong>Solution:</strong> Conducted a comprehensive compliance readiness assessment against the target regulation, provided a detailed gap analysis, and developed a prioritized remediation roadmap. We also provided mock audit support to prepare the team.</p>
            <p class="text-lg mb-4"><strong>Outcome:</strong> The client successfully passed the regulatory audit with no major findings, saving significant time and potential penalties.</p>
            <a href="https://youtu.be/b5R_bkt2NT4?si=M2L_ekdPTSwxKrun" target="_blank" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mt-4">
                Watch Video Summary <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
        `
    },
    "about-me": {
        title: "About Mohamed Emam",
        content: `
            <p class="text-lg mb-4">Mohamed Emam is a seasoned Governance, Risk, and Compliance (GRC) consultant with a focus on transforming regulatory challenges into strategic advantages. With deep expertise in AML/CFT, Enterprise Risk Management, and regulatory technology, he helps businesses in the MENA region and beyond build resilient and efficient compliance programs.</p>
            <p class="text-lg mb-4">His approach is rooted in practical implementation, ensuring that compliance frameworks are not just theoretical documents but integrated parts of the business operation that drive growth and trust.</p>
            <h4 class="text-xl font-semibold mb-2 text-indigo-600">Connect:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li><a href="https://www.linkedin.com/in/mohamed-emam-grc/" target="_blank" class="text-indigo-600 hover:text-indigo-800">LinkedIn Profile</a></li>
                <li><a href="#contact" class="text-indigo-600 hover:text-indigo-800">Contact for Consultation</a></li>
            </ul>
        `
    }
};

// --- Hero Headline Animation Logic ---
let headlineIndex = 0;
const headlineElement = document.getElementById('hero-headline');

function animateHeadline() {
    if (!headlineElement) return;

    headlineElement.style.opacity = 0;
    setTimeout(() => {
        headlineElement.textContent = heroHeadlines[headlineIndex];
        headlineElement.style.opacity = 1;
        headlineIndex = (headlineIndex + 1) % heroHeadlines.length;
    }, 500); // Fade in after 500ms

    setTimeout(animateHeadline, 5000); // Change every 5 seconds
}

// --- Slide Panel Logic ---
const slidePanel = document.createElement('div');
slidePanel.id = 'slide-panel';
slidePanel.className = 'fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 h-full bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-500 ease-in-out overflow-y-auto';
slidePanel.innerHTML = `
    <div class="p-6 md:p-10">
        <button id="close-panel" class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <h2 id="panel-title" class="text-3xl font-bold mb-6 text-gray-800 pt-10 md:pt-0"></h2>
        <div id="panel-content" class="text-gray-600"></div>
    </div>
`;
document.body.appendChild(slidePanel);

const closeButton = document.getElementById('close-panel');
const panelTitle = document.getElementById('panel-title');
const panelContentDiv = document.getElementById('panel-content');

function openPanel(articleId) {
    const content = panelContent[articleId];
    if (content) {
        panelTitle.innerHTML = content.title;
        panelContentDiv.innerHTML = content.content;
        slidePanel.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closePanel() {
    slidePanel.classList.add('translate-x-full');
    document.body.style.overflow = ''; // Restore background scrolling
}

closeButton.addEventListener('click', closePanel);

// Global click listener for cards
document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-article]');
    if (target) {
        event.preventDefault();
        const articleId = target.getAttribute('data-article');
        openPanel(articleId);
    }
});

// Start the animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    animateHeadline();
});
