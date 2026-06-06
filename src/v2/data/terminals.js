export const introTerminal = {
    dir: "intro",
    cmd: "$ cat intro.txt",
    content: [
        {
            type: "output",
            segments: [
                { text: "Hey there! 👋 I'm ", className: "" },
                { text: "Isaiah Aganon", className: "pblue font-semibold" },
                { text: ".", className: "" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Full-stack developer & entrepreneur building reliable, scalable software and products.", className: "" },
            ]
        },
        {
            type: "comment",
            segments: [
                { text: "// B.C.S (Hons.) @ Carleton | GPA: 11.04/12.0", className: "" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "", className: "blinking-cursor -my-2!" }
            ]
        }
    ]
};

export const contactTerminal = {
    dir: "contact",
    cmd: "$ cat contact.sh",
    content: [
        {
            type: "comment",
            segments: [
                { text: "#!/bin/bash", className: "" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "PHONE=", className: "" },
                { text: `"+1 (365) 880-9158"\n`, className: "" },

                { text: "EMAIL=", className: "" },
                { text: `"IsaiahAganon@cmail.carleton.ca"\n`, className: "", link: "mailto:IsaiahAganon@cmail.carleton.ca" },

                { text: "GITHUB=", className: "" },
                { text: `"github.com/AganonIsaiah"\n`, className: "", link: "https://github.com/AganonIsaiah" },

                { text: "LINKEDIN=", className: "" },
                { text: `"linkedin.com/in/isaiah-aganon"\n`, className: "", link: "https://linkedin.com/in/isaiah-aganon" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: `echo "Feel free to reach out!"`, className: "pgreen" }
            ]
        }
    ]
};

export const experienceTerminal = {
    dir: "experience",
    cmd: "$ search --experience 'Isaiah Aganon'",
    content: [
        {
            type: "output",
            segments: [
                { text: "Work Experience", className: "ppurple font-semibold uppercase" },
            ]
        },
        // RBC 2026 (current)
        {
            type: "output",
            segments: [
                { text: "Software Developer Intern @ RBC\n", className: "!ml-1 pblue font-semibold" },
                { text: "05-2026 -- Present\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Operational Risk Reporting Dashboard & NLP chat filter.", className: "!mt-2 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "TypeScript, Angular, Python, FastAPI, MS SQL" }
            ]
        },
        // Carleton TA Jan–Apr 2026
        {
            type: "output",
            segments: [
                { text: "Teaching Assistant @ Carleton University\n", className: "!ml-1 pblue font-semibold" },
                { text: "01-2026 -- 04-2026\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "TA'd web dev course, supporting 24+ students.", className: "!mt-2 !ml-4" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "JavaScript, HTML, CSS, Node.js, Express.js, SQLite" }
            ]
        },
        // RBC 2025
        {
            type: "output",
            segments: [
                { text: "Software Developer Intern @ RBC\n", className: "!ml-1 pblue font-semibold" },
                { text: "05-2025 -- 12-2025\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Regulatory Audit Tracker, analytics dashboard & virtualized data table.", className: "!mt-2 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "TypeScript, Angular, NgRx, RxJS, Tailwind CSS, Vitest, Playwright" }
            ]
        },
        // Carleton TA Sep 2024–Apr 2025
        {
            type: "output",
            segments: [
                { text: "Teaching Assistant @ Carleton University\n", className: "!ml-1 pblue font-semibold" },
                { text: "09-2024 -- 04-2025\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Instructed weekly tutorials for 33 students.", className: "!mt-2 !ml-4" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "JavaScript, HTML, CSS, Node.js, Express.js, SQLite, MongoDB, React" }
            ]
        },
    ]
};

export const entrepreneurTerminal = {
    dir: "entrepreneurial",
    cmd: "$ cat ventures.md",
    content: [
        {
            type: "output",
            segments: [
                { text: "Entrepreneurial Experience", className: "ppurple font-semibold uppercase" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "SaaS AI-Powered Email Outreach Platform\n", className: "!ml-1 pblue font-semibold" },
                { text: "01-2026 -- Present\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "• Converts uploaded leads into personalized automated campaigns.", className: "!mt-2 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "• Scored & ranked leads with scikit-learn + GPT-4o-mini generation.", className: "!mt-1 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "• 3-step drip via AWS SES; WebSocket real-time progress streaming.", className: "!mt-1 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "Python, FastAPI, Next.js, React, pandas, scikit-learn, AWS, Supabase" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "GitHub", className: "paqua !ml-4", link: "https://github.com/AganonIsaiah/Lyyvora-outreach-core-service" },
                 { text: "•", className: "!mx-2" },
                     { text: "Live Site", className: "paqua", link: "https://lyyvora-outreach-ui-dev.aganonlabs.com/login" }
            
            ]
        }
    ]
};

export const projectTerminal = {
    dir: "projects",
    cmd: "$ git log --projects --oneline",
    content: [
        {
            type: "output",
            segments: [
                { text: "AI French Conversational Tutor", className: "pblue" },
                { text: "\nCreated an AI-powered conversation app for French learning with Angular and Spring Boot." },
                { text: "\nGitHub", className: "paqua", link: "https://github.com/AganonIsaiah/French-Speaking-App" },
                { text: "•", className: "!mx-2" },
                { text: "Webpage", className: "paqua", link: "https://francaispro.vercel.app/" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Stock Price Cloud Data Pipeline/Dashboard", className: "pblue" },
                { text: "\nCreated a data pipeline and dashboard for real-time stock prices using Kafka, FastAPI, and React." },
                { text: "\nGitHub", className: "paqua", link: "https://github.com/AganonIsaiah/Cloud-Data-Dashboard" },
                { text: "•", className: "!mx-2" },
                { text: "Webpage", className: "paqua", link: "https://cloud-data-dashboard.vercel.app/" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Portfolio", className: "pblue" },
                { text: "\nCreated a portfolio with React." },
                { text: "\nGitHub", className: "paqua", link: "https://github.com/AganonIsaiah/Webpage-App" },
                { text: "•", className: "!mx-2" },
                { text: "Webpage", className: "paqua", link: "https://isaiahaganon.vercel.app/" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "C++ Insulin Pump Machine", className: "pblue" },
                { text: "\nCreated a mock insulin pump machine with C++ and Qt." },
                { text: "\nGitHub", className: "paqua", link: "https://github.com/AganonIsaiah/Team9-GroupProject-COMP3004" }
            ]
        },
    ]
};

export const navTerminal = {
    dir: "navigation",
    cmd: "$ ls -la navigation/",
    content: [
        {
            type: "output",
            segments: [
                { text: "To navigate through the portfolio, select one of the workspaces at the top left!" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Summary - Workspace 1\n"},
                { text: "About/Skills - Workspace 2\n" },
                { text: "View Portfolio Webpage V1 - Workspace 3" }
            ]
        }
    ]
};
