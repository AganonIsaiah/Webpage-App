import { useEffect, useRef, useState } from 'react';
import '@/v2/styles/Desktop.css';

const about = [
    "I'm a full-stack developer who enjoys building clean, efficient, and reliable software.",
    "I’ve worked across frontend, backend, and data systems through internships at RBC and TELUS, where I built dashboards, APIs, and production-ready applications.",
    "I focus on writing maintainable code, designing thoughtful user experiences, and solving real problems with modern tools."
];

const skills = [
    "React", "Angular", "Next.js", "Node.js", "FastAPI", "Spring Boot", "Docker", "AWS", "PostgreSQL", "TypeScript", "React", "Java"
];

const stats = [
    { num: "2+", label: "Years of Experience" },
    { num: "3", label: "Industry Internships" },
    { num: "7+", label: "Applications Developed & Shipped" }
];

const services = [
    {
        title: "Full-Stack Development",
        text: "Building end-to-end web applications using React, Angular, FastAPI, and Spring Boot."
    },
    {
        title: "Backend & API Engineering",
        text: "Designing REST APIs, authentication systems, and data pipelines with SQL and Python."
    },
    {
        title: "AI & Automation",
        text: "Developing AI-driven automation tools for outreach, personalization, and data processing."
    },
    {
        title: "UI Engineering & Dashboards",
        text: "Creating responsive interfaces and data dashboards with TypeScript and modern frontend frameworks."
    }
];

export default function BlogBio() {
    const starsContainerRef = useRef(null);
    const [visibleSections, setVisibleSections] = useState(new Set(['section-0']));

    useEffect(() => {
        const starsContainer = starsContainerRef.current;
        if (starsContainer) {
            for (let i = 0; i < 200; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => new Set([...prev, entry.target.id]));
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const renderLetters = (text) => {
        return text.split('').map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
        ));
    };

    return (
        <div className="!font-sans flex flex-col bg-black text-white h-[93dvh] w-[98dvw] rounded-xl shadow-2xl overflow-hidden">
            <div className="!px-3 flex items-center gap-4 w-full h-8 rounded-t-xl flex-shrink-0">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </div>

            <div className="flex-1 overflow-x-hidden relative">


                <div className="noise"></div>

                <div className="stars" ref={starsContainerRef}></div>

                <div className="comet" style={{ animationDelay: '2s' }}></div>
                <div className="comet" style={{ animationDelay: '6s' }}></div>

                <div className="orbit-ring orbit-1"></div>
                <div className="orbit-ring orbit-2"></div>
                <div className="orbit-ring orbit-3"></div>

                <div className="planet planet-1"></div>
                <div className="planet planet-2"></div>
                <div className="planet planet-3"></div>

                <div className="black-hole-container">
                    <div className="black-hole"></div>
                    <div className="accretion-disk"></div>
                </div>

                <div className="container">
                    <div className="hero">
                        <h1>Isaiah Aganon</h1>
                        <p className="subtitle">Software Developer · Designer · Creator</p>
                    </div>

                    <div id="section-0" className={`scroll-section ${visibleSections.has('section-0') ? 'visible' : ''}`}>
                        <span className="section-number">01</span>
                        <h2>{renderLetters('About')}</h2>
                        <span className="flex flex-col">
                            {about.map((item, ind) => (
                                <p key={ind}>{item}</p>
                            ))}
                        </span>
                    </div>

                    <div id="section-1" className={`scroll-section ${visibleSections.has('section-1') ? 'visible' : ''}`}>
                        <span className="section-number">02</span>
                        <h2>{renderLetters('Services')}</h2>
                        <div className="cards-grid">
                            {services.map((item, ind) => (
                                <div className="card" key={ind}>
                                    <div className="card-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div id="section-2" className={`scroll-section ${visibleSections.has('section-2') ? 'visible' : ''}`}>
                        <span className="section-number">03</span>
                        <h2>{renderLetters('Skills')}</h2>
                        <div className="skills-grid">
                            {skills.map((item, ind) => (
                                <div className="skill-item" key={ind}>{item}</div>
                            ))}
                        </div>
                    </div>

                    <div id="section-3" className={`scroll-section ${visibleSections.has('section-3') ? 'visible' : ''}`}>
                        <span className="section-number">04</span>
                        <h2>{renderLetters('Stats')}</h2>
                        <div className="stats-grid">
                            {stats.map((item, ind) => (
                                <div className="stat-item flex flex-col" key={ind}>
                                    <span className="stat-number">{item.num}</span>
                                    <span className="stat-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="section-4" className={`scroll-section contact-section ${visibleSections.has('section-4') ? 'visible' : ''}`}>
                        <h2>{renderLetters('Contact')}</h2>
                        <p className=''>Available for select projects</p>
                        <a
                            href="#"
                            onClick={() => window.open("mailto:IsaiahAganon@cmail.carleton.ca", "_blank")}
                            className="contact-link">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    );
}