export const introTerminal = {
    x: "left-10",
    y: "top-15",
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
    x: "left-15",
    y: "top-95",
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
    x: "right-50",
    y: "top-75",
    dir: "experience",
    cmd: "$ search --experience 'Isaiah Aganon'",
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
    x: "left-40",
    y: "bottom-55",
    dir: "project",
    cmd: "$ git log --projects --oneline",
    content: [
        {
            type: "output",
            segments: [
                { text: "" }
            ]
        }
    ]
};

export const navTerminal = {
    x: "right-30",
    y: "top-17",
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
                { text: "Work Experience - Workspace 2\n" },
                { text: "Projects - Workspace 3\n" },
                { text: "About/Skills - Workspace 4\n" }
            ]
        }
    ]
};