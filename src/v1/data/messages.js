const resumePDF = '/assets/Resume_Isaiah_Aganon.pdf';
const createMessages = (texts) => texts.map(text => ({ text, sender: "Isaiah Aganon" }));

const span = {
    language: (text) => `<span class="language">${text}</span>`,
    number: (text) => `<span class="number">${text}</span>`,
    result: (text) => `<span class="result">${text}</span>`,
    company: (text) => `<span class="company">${text}</span>`,
    header: (text) => `<span class="header">${text}</span>`,
    accent: (text) => `<span class="accent">${text}</span>`,
    highlight: (text) => `<span class="highlight">${text}</span>`,
    subtle: (text) => `<span class="subtle">${text}</span>`
};

const messages = {
    "view all cmds": createMessages([
        '💬 Type <b>"send all"</b> to view everything',
        '👤 Type <b>"bio"</b> to view my biography',
        '🛠️ Type <b>"skills"</b> to view my skill set',
        '💼 Type <b>"experience"</b> to view all of my experience',
        '🚀 Type <b>"projects"</b> to view all of my projects',
        '📞 Type <b>"info"</b> to view my contact information',
        '📄 Type <b>"resume"</b> to view my resume',
        '👋 Type <b>"bye"</b> to exit'
    ]),

    "bio": createMessages([
        `<div class="section-header">${span.header("ABOUT ME")}</div>`,
        "👋 Hey! I'm <b>Isaiah Aganon</b>!",
        `🏫 I am a <b>${span.highlight("4th year")}</b> @ <b>${span.company("Carleton University")}</b>, class of <b>${span.highlight("2027")}</b>.`,
        `🖥️ I am currently pursuing a <b>Bachelors</b> in <b>${span.highlight("Computer Science (Honours) degree")}</b>.`,
        `🧮 I minor in <b>${span.highlight("Mathematics")}</b> and have an interest in <b>${span.highlight("Web Development")}</b>!`
    ]),

    "skills": createMessages([
        `<div class="section-header">${span.header("SKILLS")}</div>`,
        `💻 <b>Programming Languages:</b><br/>${span.language("Java")}, ${span.language("JavaScript")}, ${span.language("TypeScript")}, ${span.language("Python")}, ${span.language("C")}, ${span.language("C++")}, ${span.language("SQL")}`,

        `🎨 <b>Frontend Frameworks & Libraries:</b><br/>${span.language("React")}, ${span.language("Angular")}, ${span.language("Next.js")}, ${span.language("RxJS")}, ${span.language("Tailwind CSS")}`,

        `🖥️ <b>Backend Frameworks & Tools:</b><br/>${span.language("Spring Boot")}, ${span.language("FastAPI")}, ${span.language("Node.js")}, ${span.language("Express.js")}, ${span.language("Deno")}`,

        `🧪 <b>Testing & QA:</b><br/>${span.language("Playwright")} (E2E Tests) and ${span.language("Vitest")} (Unit Tests)`,

        `☁️ <b>Cloud & Deployment:</b><br/>${span.language("Vercel")}, ${span.language("Render")}, ${span.language("Docker")}, ${span.language("Supabase")}`,

        `🛠️ <b>Developer Tools:</b><br/>${span.language("Git")}, ${span.language("Figma")}, ${span.language("Jira")}, ${span.language("Confluence")}, ${span.language("Postman")}, ${span.language("Snyk")}, ${span.language("Vim")}, ${span.language("IntelliJ")}, ${span.language("VS Code")}`,
    ]),

    "resume": createMessages([
        `<div class="section-header">${span.header("RESUME")}</div>`,
        `<iframe src="${resumePDF}"></iframe>`
    ]),

    "experience": createMessages([
        `<div class="section-header">${span.header("EXPERIENCE")}</div>`,

        `<div class="job-title">💻 <b><u>Software Developer Intern</u></b></div>`,
        `<div class="job-meta">${span.company("RBC")} • <b>Toronto, ON</b> • ${span.subtle("May 2025 – Present")}</div>`,
        `<div class="skills-line"><b>Skills:</b> ${span.language("TypeScript")}, ${span.language("Angular")}, ${span.language("Tailwind CSS")}, ${span.language("Python")}, ${span.language("FastAPI")}, ${span.language("Figma")}</div>`,

        `• Developed <b>${span.number("5+ dynamic Angular components")}</b> for a ${span.result("regulatory audit tracker")}, enabling <b>real-time management</b> and <b>visualization</b> of audit issues.`,
        `• Built a reusable ${span.language("Angular filter component")} integrated with ${span.language("FastAPI")}, reducing report generation time by <b>${span.number("40%")}</b>.`,
        `• Created a secure ${span.result("JWT-based login page")} in Angular integrated with ${span.language("FastAPI")}, enabling access control via RBC's internal login URL.`,
        `• Implemented <b>unit tests</b> with ${span.language("Vitest")} and <b>E2E tests</b> using ${span.language("Playwright")}, achieving <b>${span.number("100% test coverage")}</b> across critical components.`,

        `<div class="job-title">🏫 <b><u>Teaching Assistant</u></b></div>`,
        `<div class="job-meta">${span.company("Carleton University")} • <b>Ottawa, ON</b> • ${span.subtle("Sep. 2024 – Apr. 2025")}</div>`,
        `<div class="skills-line"><b>Skills:</b> ${span.language("JavaScript")}, ${span.language("HTML")}, ${span.language("CSS")}, ${span.language("SQLite")}, ${span.language("Node.js")}, ${span.language("Express.js")}, ${span.language("React")}</div>`,

        `• Delivered weekly tutorials to a class section of <b>${span.number("33 students")}</b>, covering the fundamentals of web development with ${span.language("JavaScript")}, ${span.language("HTML")}, ${span.language("CSS")}, ${span.language("SQLite")}, and ${span.language("Node.js")}.`,
        `• Guided students through <b>hands-on projects</b> using ${span.language("Node.js")}, ${span.language("Express.js")}, and ${span.language("React")}, emphasizing <b>RESTful APIs</b>, <b>component-based architecture</b>, and <b>state management</b>.`,
        `• Hosted <b>weekly office hours</b> and <b>collaborative study sessions</b>, contributing to <b>${span.number("85%")}</b> of students in the section earning an ${span.result("A or higher")}.`,
        `• Efficiently graded <b>${span.number("150+")}</b> <b>assignments</b> and <b>tests</b> each term, delivering clear, actionable feedback that contributed to a <b>${span.number("30%")}</b> ${span.result("improvement")} in students' performance on later projects.`
    ]),

   "projects": createMessages([
    `<div class="section-header">${span.header("PROJECTS")}</div>`,

    `<div class="project-title">🇫🇷 <b><u>French Speaking App</u></b></div>`,
    `<div class="skills-line"><b>Skills:</b> ${span.language("Java")}, ${span.language("Spring Boot")}, ${span.language("TypeScript")}, ${span.language("Angular")}, ${span.language("PostgreSQL")}, ${span.language("Docker")}, ${span.language("Vercel")}, ${span.language("Render")}</div>`,
    `• Developed a gamified French language learning platform enabling users to practice <b>${span.result("real-time conversations")}</b> through an interactive ${span.language("Angular")} frontend and a robust ${span.language("Spring Boot")} backend.`,
    `• Integrated the ${span.language("Google Gemini API")} to provide <b>${span.number("AI-powered, dynamic feedback")}</b> and generate conversational prompts that enhance user engagement and learning outcomes.`,
    `• Designed and maintained a ${span.language("PostgreSQL")} database, with ${span.language("Supabase")} to store user profiles and progress, while deploying the frontend on ${span.language("Vercel")} and backend on ${span.language("Render")} for <b>${span.number("scalable cloud hosting")}</b>.`,
    `<div class="project-link">🔗 <a href="https://github.com/AganonIsaiah/French-Learning-App" target="_blank">https://github.com/AganonIsaiah/French-Learning-App</a></div>`,

    `<div class="project-title">📄 <b><u>Webpage App</u></b></div>`,
    `<div class="skills-line"><b>Skills:</b> ${span.language("JavaScript")}, ${span.language("Next.js")}, ${span.language("React")}, ${span.language("Tailwind CSS")}, ${span.language("Vercel")}</div>`,
    `• Built an <b>${span.result("iMessage-styled interactive webpage")}</b> with ${span.language("React")} and ${span.language("Next.js")} to showcase my biography, resume, experience, and projects, leveraging <b>${span.number("server-side rendering")}</b> to improve SEO and load performance.`,
    `• Deployed on ${span.language("Vercel")} using its <b>${span.number("serverless architecture")}</b> for fast performance and seamless CI/CD integration.`,
    `<div class="project-link">🔗 <a href="https://github.com/AganonIsaiah/Webpage-App" target="_blank">https://github.com/AganonIsaiah/Webpage-App</a></div>`
]),

    "info": createMessages([
        `<div class="section-header">${span.header("CONTACT INFORMATION")}</div>`,
        `<div class="contact-item">☎️ <b>Phone:</b> ${span.highlight("+1 (365) 880-9158")}</div>`,
        `<div class="contact-item">📧 <b>Email:</b> ${span.highlight("IsaiahAganon@cmail.carleton.ca")}</div>`,
        `<div class="contact-item">💻 <b>GitHub:</b> <a href="https://github.com/AganonIsaiah" target="_blank">github.com/AganonIsaiah</a></div>`,
        `<div class="contact-item">💼 <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/isaiah-aganon" target="_blank">linkedin.com/in/isaiah-aganon</a></div>`
    ]),

    "clear": createMessages([
        "Welcome to my webpage!"
    ]),

};

messages["send all"] = [
    // Bio section
    { text: "bio", sender: "User" },
    ...messages["bio"],
    
    // Skills section
    { text: "skills", sender: "User" },
    ...messages["skills"],
    
    // Experience section
    { text: "experience", sender: "User" },
    ...messages["experience"],
    
    // Projects section
    { text: "projects", sender: "User" },
    ...messages["projects"],
    
    // Info section
    { text: "info", sender: "User" },
    ...messages["info"],
    
    // Resume section
    { text: "resume", sender: "User" },
    ...messages["resume"],
];

messages["default"] = [
    ...createMessages(["Hey!"]),
    ...messages["view all cmds"]
];

export default messages;