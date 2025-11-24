export const introTerminal = {
    dir: "intro",
    cmd: "$ cat intro.txt",
    position: { top: 50, left: 50 },
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
                { text: "A passionate developer who loves building things and breaking things. Currently crafting elegant solutions to complex problems.", className: "" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "I spend my time ricing Linux, writing code, and pretending I understand my own Neovim config.", className: "" },
            ]
        },
        {
            type: "comment",
            segments: [
                { text: "// This site was made with React and Next.js ", className: "" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "", className: "blinking-cursor" }
            ]
        }
    ]
};

export const contactTerminal = {
    dir: "contact",
    cmd: "$ cat contact.sh",
    position: { top: 280, left: 520 },
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
    position: { top: 350, left: 60 },
    content: [
        {
            type: "output",
            segments: [
                { text: "Work Experience", className: "ppurple font-semibold uppercase" },
            ]
        },
        // Riipen
        {
            type: "output",
            segments: [
                { text: "Full-Stack Developer (Contract) @ TELUS x Riipen\n", className: "!ml-1 pblue font-semibold" },
                { text: "12-2026 -- Present\n", className: "!ml-4 pgray" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Developed an AI outreach automation engine for Lyyvora.", className: "!mt-2 !ml-4" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "Python, pandas, scikit-learn, FastAPI, " },
                { text: "TypeScript, React, SQLite", className: "!ml-4" }
            ]
        },
        // RBC 
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
                { text: "Developed features for internal web applications at RBC.", className: "!mt-2 !ml-4" },

            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "TypeScript, Angular, Python, FastAPI, MS SQL" }
            ]
        },

        // TA
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
                { text: "TA'd for a web development course.", className: "!mt-2 !ml-4" },
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Tech Stack: ", className: "pblue !mt-2 !ml-4" },
                { text: "JavaScript, HTML, CSS, Node.js, Express.js " },
            ]
        },


    ]
};

export const projectTerminal = {
    dir: "project",
    cmd: "$ git log --projects --oneline",
    position: { top: 350, left: 955 },
    content: [
        {
            type: "output",
            segments: [
                { text: "French Speaking App", className: "pblue" },
                { text: "\nCreated an AI-powered conversation app for French Speaking with Angular and Spring Boot." },
                { text: "\nGitHub", className: "paqua", link: "https://github.com/AganonIsaiah/French-Speaking-App" },
                { text: "•", className: "!mx-2" },
                { text: "Webpage", className: "paqua", link: "https://francaispro.vercel.app/" }
            ]
        },
        {
            type: "output",
            segments: [
                { text: "Stock Price Cloud Data Pipeline/Dashboard", className: "pblue" },
                { text: "\nCreated a data pipeline and dashboard for real-time stock prices using FastAPI and React." },
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
    position: { top: 40, left: 650 },
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
                { text: "About/Skills - Workspace 2\n" }, // Blog styled black webpage infinite scrolling
                { text: "Work Experience - Workspace 3\n" }, // Chat gpt styled webpage
                { text: "Projects - Workspace 4\n" }, // Spotify styled webpage
                { text: "View Portfolio Webpage V1 - Workspace 5" } // Basic Google Clone
            ]
        }
    ]
};