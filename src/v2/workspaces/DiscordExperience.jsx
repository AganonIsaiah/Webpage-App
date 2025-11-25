'use client';

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import '@/v2/styles/Desktop.css'

const telusExp = {
    title: [
        "telus-fullstack",
        "Full-Stack Developer (Contract) @ TELUS x Riipen",
        "Dec 2025 - Jan 2026"
    ],
    company: "TELUS x Riipen",
    icon: { text: "TELUS", color: "#4B286D" },
    role: { text: "Full-Stack Dev", color: "#66CC00" },
    dates: "December 2025 - January 2026",
    summary: "Was awarded the TELUS Friendly Future Foundation Scholarship 2025 and was matched by TELUS x Riipen with a Canadian company to work as a contracted Full-Stack Developer. I delivered an AI-powered outreach system for Lyyvora, automating personalized emails to valid Canadian health clinics for loan applications.",
    skills: ["Python", "pandas", "scikit-learn", "pytest", "FastAPI", "TypeScript", "React", "SQLite"],
    achievements: [
        "Delivered an AI outreach automation MVP as the sole developer, earning $1,400 and providing a functional system for Lyyvora, a healthcare lending-as-a-service platform.",
        "Constructed daily outreach engine sending 10+ personalized emails with 2 automated follow-ups per clinic, reducing manual workload by 100%.",
        "Automated data pipeline cleaning 600+ clinic records with 90%+ validity.",
        "Engineered AI personalization pipeline generating 3+ message variants per clinic across email, SMS, and LinkedIn, boosting engagement by 15%."
    ],
    // contents: [
    //     { logo: "p1", text: "placeholder 1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, wefqewfeqwfefwqefwqqewqewefwefwfefewqfewefwqfqeomnis. Eveniet nobis ad ipsum itaque soluta, earum sint illum, voluptas temporibus a doloremque aperiam iure. Dolor voluptatem in ullam cumque.", dates: "Dec 1 - Dec 30" },
    //     { logo: "p1", text: "placeholder 1", dates: "Dec 1 - Dec 30" },
    //     { logo: "p1", text: "placeholder 1", dates: "Dec 1 - Dec 30" },
    //     { logo: "p1", text: "placeholder 1", dates: "Dec 1 - Dec 30" }
    // ]
};

const rbcSoftware = {
    title: [
        "rbc-software-intern",
        "Software Developer Intern @ RBC",
        "Sep 2025 - Dec 2025"
    ],

    company: "Royal Bank of Canada",
    icon: { text: "RBC", color: "#005DAA" },
    role: { text: "Software Dev Intern", color: "#FFD200" },
    dates: "Sep 2025 - Dec 2025",
    summary: "For my second co-op term, I've worked on internal web applications for RBC as full-stack software developer using Angular and FastAPI.",
    skills: ["TypeScript", "Angular", "Python", "FastAPI", "MS SQL", "Tailwind CSS"],
    achievements: [
        "Implemented features for a Regulatory Audit Tracker using Angular and FastAPI in an Agile environment, enabling real-time audit management across 12+ teams.",
        "Constructed an Angular filter component with FastAPI backend and SQL data for filtering and exporting 900+ audit records across 14 columns, reducing report generation time from 6 minutes to under 30 seconds.",
        "Engineered a login page in Angular integrated with FastAPI backend, enforcing JWT-based authentication and role-based access control for 200+ internal users."
    ],
};

const rbcFrontend = {
    title: [
        "rbc-frontend-intern",
        "Frontend Developer Intern @ RBC",
        "May 2025 - Aug 2025"
    ],
    company: "RBC",

    icon: { text: "RBC", color: "#FFD200" },
    role: { text: "Frontend Dev Intern", color: "#005DAA" },

    dates: "May 2025 - Aug 2025",
    summary: "For my first co-op term, I worked as frontend developer for RBC. I developed UI components and created unit and end-to-end tests for RBC projects.",
    skills: ["TypeScript", "Angular", "Tailwind CSS", "Vitest", "Playwright", "Figma"],
    achievements: [
        "Developed frontend components for an Operational Risk Reporting Dashboard, improving visibility of 40+ critical risk domains for senior management and regulatory stakeholders.",
        "Developed interactive Angular charts for core metrics like incident response time, configuration drift, and capacity breaches, boosting visibility of 25+ risk indicators in weekly reports",
        "Wrote frontend unit and end-to-end tests with Vitest and Playwright, maintaining 97%+ SonarQube coverage."
    ],
};


const carletonTa = {
    title: [
        "carleton-ta",
        "Teaching Assistant @ Carleton University",
        "Sep 2024 - Apr 2025"
    ],

    company: "Carleton University",
    icon: { text: "CU", color: "#C8102E" }, 
    role: { text: "Teaching Assistant", color: "#6B7280" },  
    dates: "Sep 2024 - Apr 2025",
    summary: "Worked as a teaching assistant for a course on the fundamentals of web development during the Fall 2024 and Winter 2025 semesters.",
    skills: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "React", "SQLite", "MongoDB"],
    achievements: [
        "Instructed weekly tutorials for 33 students on full-stack web development using JavaScript, React, Node.js, Express.js, SQLite, MongoBD, HTML, and CSS",
        "Guided 5+ major class projects on full-stack web development, covering RESTful API design, client-server architecture, and database integration.",
        "Conducted 10+ office hours, mentoring students on debugging, version control, and best practices."
    ],
};

/**
 * 
 * Key Achievements/summary at top with total day-day
 * 
 * Bottom is tasks completed on specific days/months
 * 
 */
export default function DiscordExperience() {
    const [selectExperience, setSelectExperience] = useState('work1');
    const [channel, setChannel] = useState(telusExp);

    function Sidebar() {
        return (
            <div className="!w-18 flex flex-col items-center rounded-bl-xl !mr-2">
                <span className="!mt-2 flex gap-2 w-full flex items-center">
                    <span className="bg-white w-1 rounded-br-xl rounded-tr-xl h-10"></span>
                    <span className="cursor-pointer flex justify-center items-center rounded-xl bg-[#5865F2] !p-3 text-xl">
                        💼
                    </span>
                </span>

                <span className="!ml-3 !mt-2 border-b border-gray-600 w-1/2"></span>
            </div>
        );
    }

    function NavLinks() {
        return (
            <div className="rounded-tl-xl flex flex-col bg-[#2b2d31] w-50 !whitespace-nowrap">
                <span className="flex justify-between items-center !px-2 !py-1 border-b border-[#1a1b1e]  h-10 cursor-pointer hover:bg-[#35373c] rounded-tl-xl">
                    <p className="text-white font-medium">Isaiah's Portfolio</p>
                    <IoIosArrowDown size={16} className="text-gray-400" />
                </span>

                <span className="!text-[#949BA4] flex flex-col gap-1 items-start !text-sm !px-2">
                    <h3 className="font-bold !mb-2 !mt-4 flex items-center tracking-tighter uppercase gap-2 hover:text-white cursor-pointer">Work Experience   <IoIosArrowDown size={16} className="" /></h3>

                    <button
                        key="work1"
                        onClick={() => { setSelectExperience("work1"); setChannel(telusExp); }}
                        className={`discord-links ${selectExperience === 'work1' ? 'active' : ''}`}>
                        # telus-fullstack
                    </button>

                    <button
                        key="work2"
                        onClick={() => { setSelectExperience("work2"); setChannel(rbcSoftware) }}
                        className={`discord-links ${selectExperience === 'work2' ? 'active' : ''}`}>
                        # rbc-software-intern
                    </button>

                    <button
                        key="work3"
                        onClick={() => { setSelectExperience("work3"); setChannel(rbcFrontend); }}
                        className={`discord-links ${selectExperience === 'work3' ? 'active' : ''}`}>
                        # rbc-frontend-intern
                    </button>

                    <button
                        key="work4"
                        onClick={() => { setSelectExperience("work4"); setChannel(carletonTa); }}
                        className={`discord-links ${selectExperience === 'work4' ? 'active' : ''}`}>
                        # carleton-ta
                    </button>
                </span>

                <span className="flex items-center !px-2 h-12 !mt-auto w-full bg-[#232428]">
                    <span className="flex items-center justify-center text-sm text-white font-semibold bg-[#5865F2] rounded-3xl h-8 w-8">
                        IA
                    </span>

                    <span className="!ml-2">
                        <p className="text-xs text-white font-semibold">Isaiah Aganon</p>
                        <p className="text-xs flex items-center gap-1">
                            <span className="bg-[#9ece6a] h-2 w-2 rounded-full"></span>
                            Online
                        </p>
                    </span>
                </span>
            </div>
        );
    }

    /**
     * title: String[] #title[0] = # telus-fullstack, title[1] = Full-Stack Dev @ TELUS x Riipen, title[2] = Dec 2025 - Jan 2026
     * icon: {
     *  text: String
     *  color: String
     * }
     * company: String 
     * role: {
     *  text: String
     *  color: String
     * }
     * dates: String
     * summary: String
     * skills: String[]
     * achievements: String[]
     * contents: contentItem[]
     *  contentItem: {
     *      logo: string
     *      dates: String
     *      text: String
     *  }
     */
    function DisplayChannel({ title, icon, company, role, dates, summary, skills, achievements, contents }) {
        return (
            <div className="flex flex-col w-full bg-[#313338] ">

                <h2 className="!mb-8 flex gap-6 items-center !px-4 !py-1 border-b border-[#1a1b1e] h-10 !whitespace-nowrap">
                    <span className="flex gap-2 items-center font-semibold text-[#949ba4]">#
                        <p className="!text-white">{title[0]}</p>
                    </span>

                    <p className="text-[#949ba4] text-xs !mt-1">
                        {title[1]} • {title[2]}
                    </p>
                </h2>

                <div className="flex gap-2 !px-4">
                    <span
                        style={{ backgroundColor: icon?.color }}
                        className={`flex-shrink-0 flex items-center justify-center rounded-full h-10 w-10 !overflow-hidden  text-white font-semibold leading-none text-xs`}>
                        {icon.text}
                    </span>

                    <div className="flex flex-col">
                        <span className="flex gap-2 items-center text-sm">
                            <p className="text-white font-semibold">{company}</p>
                            <span className={`flex items-center text-white font-semibold rounded-sm !px-1`}
                                style={{ backgroundColor: role.color }}>{role.text}</span>
                            <p className="text-[#949ba4] text-xs font-medium">{dates}</p>
                        </span>

                        <p className="text-[#dbdee1] !mt-1 text-sm">{summary}</p>

                        <span className="flex gap-2 !my-2">
                            {skills.map((item, ind) => (
                                <span
                                    className="bg-[#5865F2] text-white text-sm font-medium !px-2 rounded-sm"
                                    key={ind}>{item}
                                </span>
                            ))}
                        </span>

                        <span className="flex !mt-4 w-150 text-sm bg-[#2b2d31] rounded-xl">
                            <span className="!h-full w-2 bg-[#57f287] rounded-tl-xl rounded-bl-xl"></span>
                            <span className="!py-3 !px-2">
                                <p className="!pl-2 !mb-2 font-semibold text-[#00aff4]">Key Achievements</p>

                                <ul className="flex flex-col gap-1 list-disc !pl-7 text-[#dbdee1]">
                                    {achievements.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </span>
                        </span>

                    </div>
                </div>

                {contents?.length > 0 && (
                    <div className="!mt-4 flex flex-col gap-6">
                        {contents.map((item, ind) => (
                            <div key={ind} className="flex gap-2 !px-4">
                                <span
                                    className={`flex-shrink-0 flex items-center justify-center rounded-full h-10 w-10 bg-[${icon.color}] text-white font-semibold leading-none text-xs`}>
                                    {icon.text}
                                </span>

                                <div className="flex flex-col !ml-1">
                                    <span className="flex gap-2 items-center text-sm">
                                        <p className="text-white font-semibold">{company}</p>
                                        {item.logo && (
                                            <span
                                                className={`flex items-center text-white font-semibold rounded-sm !px-1`}
                                                style={{ backgroundColor: role?.color }}>{item.logo}</span>
                                        )}
                                        {item.dates && <p className="text-[#949ba4] text-xs font-medium">{item.dates}</p>}
                                    </span>

                                    {item.text && <p className="text-[#dbdee1] !mt-1 text-sm">{item.text}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            style={{
                fontFamily: "'gg sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            }}
            className="flex flex-col bg-[#23272A] h-[93dvh] w-[98dvw] rounded-xl shadow-2xl p-6">
            <header className="!px-3 flex items-center gap-4 w-full h-8 rounded-t-xl">
                <span className="flex gap-2">
                    <button className="terminal-btn bg-[#f7768e]" />
                    <button className="terminal-btn bg-[#e0af68]" />
                    <button className="terminal-btn bg-[#9ece6a]" />
                </span>
            </header>

            <div className="flex h-full ">
                <Sidebar />
                <NavLinks />
                <DisplayChannel {...channel} />
            </div>
        </div>
    );
}