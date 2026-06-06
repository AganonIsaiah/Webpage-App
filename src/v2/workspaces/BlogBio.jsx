import { useEffect, useState } from 'react';
import '@/v2/styles/Desktop.css';

const about = [
    "I'm a full-stack developer and entrepreneur based in Toronto, ON.",
    "On track to complete an Honours B.C.S. at Carleton University in June 2027.",
    "I've shipped production software across multiple internship terms at a major bank, building data-heavy dashboards, analytics tooling, and intelligent interfaces used daily by analysts and senior leadership.",
    "Outside of work, I build and operate my own SaaS products. Most recently, an AI-powered email outreach platform that reduced a client's annual tooling costs by 90%.",
    "I care about clean architecture, maintainable code, and software that solves real problems."
];

const experience = [
    {
        role: "Software Developer Intern",
        company: "Royal Bank of Canada",
        period: "May 2026 – Present",
        stack: "TypeScript · Angular · Python · FastAPI · MS SQL",
        bullets: ["Operational Risk Reporting Dashboard."],
    },
    {
        role: "Teaching Assistant",
        company: "Carleton University",
        period: "Jan 2026 – Apr 2026",
        stack: "JavaScript · HTML · CSS · Node.js · Express.js · SQLite",
        bullets: ["TA'd web dev course, supporting 24+ students."],
    },
    {
        role: "Software Developer Intern",
        company: "Royal Bank of Canada",
        period: "May 2025 – Dec 2025",
        stack: "TypeScript · Angular · NgRx · RxJS · Tailwind · Vitest · Playwright",
        bullets: ["Regulatory Audit Tracker, analytics dashboard & virtualized data table."],
    },
    {
        role: "Teaching Assistant",
        company: "Carleton University",
        period: "Sep 2024 – Apr 2025",
        stack: "JavaScript · HTML · CSS · React · Node.js · Express.js · MongoDB · SQLite",
        bullets: ["Instructed weekly tutorials for 33 students."],
    }
];

const skills = [
    "TypeScript", "Python", "JavaScript", "Java", "SQL",
    "React", "Angular", "Next.js", "Tailwind CSS", "NgRx", "RxJS", "Redux",
    "FastAPI", "Node.js", "Express.js", "pandas", "scikit-learn",
    "AWS (EC2, SES)", "Docker", "Supabase", "Vercel", "Figma", "Git"
];

const stats = [
    { num: "11.04", label: "GPA / 12.0" },
    { num: "3×", label: "Software Developer Co-op Terms" },
    { num: "1", label: "SaaS Product Shipped" },
];

const venture = {
    name: "AI-Powered Email Outreach Platform",
    period: "Jan 2026 – Present",
    stack: "Python · FastAPI · TypeScript · Next.js · React · pandas · scikit-learn · AWS · Supabase · Vercel",
    link: "https://lyyvora-outreach-ui-dev.aganonlabs.com",
    description: "A SaaS platform that converts uploaded lead lists into personalized, automated email campaigns with no manual effort required.",
    bullets: [
        "Scores and ranks leads with a scikit-learn model, then uses OpenAI GPT-4o-mini to generate tailored emails, parallelized across concurrent threads for throughput.",
        "Automates a 3-step drip sequence via AWS SES and APScheduler, delivering during business hours and streaming real-time generation progress to the frontend via WebSockets.",
        "Next.js dashboard with JWT auth, role-based access control, a filterable lead table, and CSV export via streaming response to avoid memory bottlenecks.",
    ],
    caseStudy: {
        client: "Lyyvora",
        industry: "Healthcare",
        problem: "Paying $2,100/yr across multiple outreach tools with no automation or personalization.",
        solution: "Onboarded onto the platform as the first client. Uploaded their lead list, configured campaigns, and went live within a day.",
        result: "Annual tooling cost dropped from $2,100 to $200, a 90% reduction, with fully automated personalized outreach replacing their previous manual process.",
    }
};

export default function BlogBio() {
    const [visibleSections, setVisibleSections] = useState(new Set(['hero']));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
        );

        document.querySelectorAll('.scroll-section').forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const renderLetters = (text) =>
        text.split('').map((letter, i) => (
            <span key={i} className="letter">{letter === ' ' ? ' ' : letter}</span>
        ));

    return (
        <div className="!font-sans flex flex-col bg-black text-white h-[93dvh] w-[98dvw] rounded-xl shadow-2xl overflow-hidden">

            {/* Title bar */}
            <div className="!px-3 flex items-center gap-4 w-full h-8 rounded-t-xl flex-shrink-0">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </div>

            <div className="flex-1 overflow-x-hidden overflow-y-auto relative">
 

                <div className="container">

                    {/* Hero */}
                    <div className="hero">
                        <h1>Isaiah Aganon</h1>
                        <p className="subtitle">Full-Stack Developer</p>
                    </div>

                    {/* About */}
                    <div id="section-about" className={`scroll-section ${visibleSections.has('section-about') ? 'visible' : ''}`}>
                        <span className="section-number">01</span>
                        <h2>{renderLetters('About')}</h2>
                        <span className="flex flex-col mt-4!">
                            {about.map((item, i) => <p key={i}>{item}</p>)}
                        </span>
                    </div>

                    {/* Experience */}
                    <div id="section-exp" className={`scroll-section ${visibleSections.has('section-exp') ? 'visible' : ''}`}>
                        <span className="section-number">02</span>
                        <h2>{renderLetters('Experience')}</h2>
                        <div className="blog-timeline">
                            {experience.map((item, i) => (
                                <div className="blog-timeline-item" key={i}>
                                    <div className="flex flex-col gap-1 mb-3">
                                        <span className="text-white font-semibold text-xl">{item.role}</span>
                                        <span className="flex flex-wrap items-center gap-2 text-sm">
                                            <span style={{ color: '#7aa2f7' }}>{item.company}</span>
                                            <span style={{ color: '#414868' }}>·</span>
                                            <span className="text-gray-500">{item.period}</span>
                                        </span>
                                        <span className="text-xs mt-1 font-mono" style={{ color: '#414868' }}>{item.stack}</span>
                                    </div>
                                    <ul className="flex flex-col gap-1">
                                        {item.bullets.map((b, j) => (
                                            <li key={j} className="text-gray-400 text-base flex gap-2">
                                                <span style={{ color: '#7aa2f7' }} className="mt-0.5 flex-shrink-0">›</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Venture */}
                    <div id="section-services" className={`scroll-section ${visibleSections.has('section-services') ? 'visible' : ''}`}>
                        <span className="section-number">03</span>
                        <h2>{renderLetters('Venture')}</h2>
                        <div className="blog-timeline">
                            <div className="blog-timeline-item">
                                <div className="flex flex-col gap-1 mb-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="text-white font-semibold text-xl">{venture.name}</span>
                                        <a
                                            href={venture.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-mono flex items-center gap-1 flex-shrink-0 transition-opacity hover:opacity-70"
                                            style={{ color: '#9ece6a' }}
                                        >
                                            Live Site
                                            <span style={{ fontSize: '10px' }}>↗</span>
                                        </a>
                                    </div>
                                    <span className="flex flex-wrap items-center gap-2 text-sm">
                                        <span style={{ color: '#7aa2f7' }}>Founder &amp; Builder</span>
                                        <span style={{ color: '#414868' }}>·</span>
                                        <span className="text-gray-500">{venture.period}</span>
                                    </span>
                                    <span className="text-xs mt-1 font-mono" style={{ color: '#414868' }}>{venture.stack}</span>
                                </div>
                                <p className="text-gray-400 text-base mb-2! mt-1.5!">{venture.description}</p>
                                <ul className="flex flex-col gap-2 mb-5">
                                    {venture.bullets.map((b, i) => (
                                        <li key={i} className="text-gray-400 text-base flex gap-2">
                                            <span style={{ color: '#7aa2f7' }} className="mt-0.5 flex-shrink-0">›</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-7! rounded-lg overflow-hidden" style={{ border: '1px solid #1e2a3a' }}>
                                    <div className="px-2! py-1!" style={{ background: '#0d1117', borderBottom: '1px solid #1e2a3a' }}>
                                        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#7aa2f7' }}>Case Study</span>
                                    </div>
                                    <div className="p-2.5!" style={{ background: '#080b10' }}>
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className="text-white font-semibold text-lg">{venture.caseStudy.client}</span>
                                            <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: '#0d1117', color: '#7aa2f7', border: '1px solid #1e2a3a' }}>{venture.caseStudy.industry}</span>
                                        </div>
                                        <div className="flex flex-col mt-3!">
                                            <div>
                                                <span className="text-xs uppercase tracking-wider font-mono mb-1 block" style={{ color: '#414868' }}>Problem</span>
                                                <p className="text-gray-400 text-sm">{venture.caseStudy.problem}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wider font-mono mb-1 block" style={{ color: '#414868' }}>Solution</span>
                                                <p className="text-gray-400 text-sm">{venture.caseStudy.solution}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wider font-mono mb-1 block" style={{ color: '#414868' }}>Result</span>
                                                <p className="text-gray-400 text-sm">{venture.caseStudy.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div id="section-skills" className={`scroll-section ${visibleSections.has('section-skills') ? 'visible' : ''}`}>
                        <span className="section-number">04</span>
                        <h2>{renderLetters('Skills')}</h2>
                        <div className="skills-grid">
                            {skills.map((item, i) => (
                                <div className="skill-item" key={i}>{item}</div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div id="section-stats" className={`scroll-section ${visibleSections.has('section-stats') ? 'visible' : ''}`}>
                        <span className="section-number">05</span>
                        <h2>{renderLetters('Stats')}</h2>
                        <div className="stats-grid">
                            {stats.map((item, i) => (
                                <div className="stat-item flex flex-col" key={i}>
                                    <span className="stat-number">{item.num}</span>
                                    <span className="stat-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div id="section-contact" className={`scroll-section contact-section ${visibleSections.has('section-contact') ? 'visible' : ''}`}>
                        <h2>{renderLetters('Contact')}</h2>
                        <p>Open to internships, contracts, and select projects.</p>
                        <a
                            href="#"
                            onClick={() => window.open('mailto:IsaiahAganon@cmail.carleton.ca', '_blank')}
                            className="contact-link"
                        >
                            Get in Touch
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
