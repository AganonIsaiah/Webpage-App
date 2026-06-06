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

const services = [
    {
        title: "Full-Stack Engineering",
        text: "End-to-end web applications with React, Angular, FastAPI, and Node.js, from architecture to deployment."
    },
    {
        title: "Enterprise Frontend",
        text: "Complex UIs, virtualized tables, real-time dashboards, and analytics tooling built for large-scale data."
    },
    {
        title: "Data & Pipelines",
        text: "Building data pipelines, processing workflows, and backend systems using Python, pandas, FastAPI, and SQL."
    },
    {
        title: "SaaS Products",
        text: "Building and shipping independent software products, from first commit to paying customers."
    }
];

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

                    {/* What I Build */}
                    <div id="section-services" className={`scroll-section ${visibleSections.has('section-services') ? 'visible' : ''}`}>
                        <span className="section-number">03</span>
                        <h2>{renderLetters('What I Build')}</h2>
                        <div className="cards-grid">
                            {services.map((item, i) => (
                                <div className="card" key={i}>
                                    <div className="card-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
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
