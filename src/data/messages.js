const resumePDF = '/assets/Resume_Isaiah_Aganon.pdf';
const createMessages = (texts) => texts.map(text => ({ text, sender: "Isaiah Aganon" }));

// Span helpers
const span = {
    language: (text) => `<span class="language">${text}</span>`,
    number: (text) => `<span class="number">${text}</span>`,
    result: (text) => `<span class="result">${text}</span>`,
    company: (text) => `<span class="company">${text}</span>`,
    header: (text) => `<span class="header">${text}</span>`
};

const messages = {
    "view all cmds": createMessages([
        'Type "send all" to view everything',
        'Type "bio" to view my biography',
        'Type "skills" to view my skill set',
        'Type "experience" to view all of my experience',
        'Type "projects" to view all of my projects',
        'Type "info" to view my contact information',
        'Type "resume" to view my resume',
    ]),

    "bio": createMessages([
        `<b>${span.header("ABOUT ME")}</b>`,
        "👋 Hey! I'm <b>Isaiah Aganon</b>!",
        "🏫 I am a <b>3rd year</b> @ <b> Carleton University</b>, class of <b>2027</b>.",
        "🖥️ I am currently pursuing a Bachelors in <b>Computer Science (Honours) </b> degree.",
        "🧮 I minor in <b>Mathematics</b> and have an interest in <b>Web Development</b>!"
    ]),

    "skills": createMessages([
        `<b>${span.header("SKILLS")}</b>`,
        `💻 <b>Programming Languages: </b> Java, JavaScript, TypeScript, SQL `,
        `📦 <b>Frameworks & Libraries: </b> React, Angular, Spring Boot, Node.js, Next.js, Express.js, Tailwind CSS`,
        `🛠️ <b>Developer Tools: </b> Git, Figma, Docker, Linux, AWS, Vim, VS Code, IntelliJ, Vercel, Maven`,
    ]),

    "resume": createMessages([
        `<b>${span.header("RESUME")}</b>`,
        `<iframe src="${resumePDF}"></iframe>`
    ]),

    "experience": createMessages([
        `<b>${span.header("EXPERIENCE")}</b>`,

        "💻🛠️ <b>Frontend Developer TI Risk Intern</b>",
        `${span.company("RBC")} @ <b>Toronto, ON</b>`,
        "🗓️ May. 2025 – Present",
        `<b>Skills: </b> ${span.language("TypeScript")}, ${span.language("Angular")}, ${span.language("Tailwind CSS")}`,

        `Developed ${span.number("6+ core UI Components")} for an ${span.result("Operational Risk Reporting Dashboard")} used by <b>senior leadership</b> and <b>regulators</b>.`,
        `Built dynamic, data-driven ${span.language("Angular")} components to visualize ${span.number("14 KPIs")} across risk domains, enhancing clarity and accessibility of insights.`,
        `Collaborated with backend and data science teams to integrate ${span.result("APIs")} and support visualization of <b>ML insights</b>, contributing to ${span.result("risk reduction strategies")}.`,
        `Created <b>automated unit</b> and <b>integration tests</b> for ${span.language("Angular")} components using ${span.language("Angular CLI")} and ${span.language("Jasmine")}, increasing <b>code coverage</b> and reducing <b>production bugs</b> by <b>${span.number("20%")}</b>.`,

        "🏫💡 <b>Teaching Assistant</b>",
        `${span.company("Carleton University")} @ <b>Ottawa, ON</b>`,
        "🗓️ Sep. 2024 – Apr. 2025",
        `<b>Skills: </b> ${span.language("JavaScript")}, ${span.language("HTML")}, ${span.language("CSS")}, ${span.language("SQLite")}, ${span.language("Node.js")}, ${span.language("Express.js")}, ${span.language("React")}`,

        `Delivered weekly tutorials to a class section of ${span.number("33 students")}, covering the fundamentals of web development with ${span.language("JavaScript")}, ${span.language("HTML")}, ${span.language("CSS")}, ${span.language("SQLite")}, and ${span.language("Node.js")}.`,
        `Guided students through <b>hands-on projects</b> using ${span.language("Node.js")}, ${span.language("Express.js")}, and ${span.language("React")}, emphasizing <b>RESTful APIs</b>, <b>component-based architecture</b>, and <b>state management</b>.`,
        `Hosted <b>weekly office hours</b> and <b>collaborative study sessions</b>, contributing to <b>${span.number("85%")}</b> of students in the section earning an ${span.result("A or higher")}.`,
        `Efficiently graded ${span.number("150+")} <b>assignments</b> and <b>tests</b> each term, delivering clear, actionable feedback that contributed to a <b>${span.number("30%")}</b> ${span.result("improvement")} in students' performance on later projects.`
    ]),

    "projects": createMessages([
        `<b>${span.header("PROJECTS")}</b>`,

        "📄 <b>Webpage App</b>",
        `<b>Skills: </b> ${span.language("JavaScript")}, ${span.language("Next.js")}, ${span.language("React")}, ${span.language("CSS")}, ${span.language("Vercel")}`,
        `Built an iMessage-styled interactive webpage with ${span.language("React")} and ${span.language("Next.js")} to showcase my biography, resume, experience, and projects, leveraging server-side rendering to improve SEO and load performance.`,
        `Deployed on ${span.language("Vercel")} using its serverless architecture for fast performance, automatic scaling, and seamless CI/CD integration.`,
        "🔗 https://github.com/AganonIsaiah/Webpage-App",

        "🇫🇷 <b>French Speaking App</b>",
        `<b>Skills: </b> ${span.language("Java")}, ${span.language("Spring Boot")}, ${span.language("TypeScript")}, ${span.language("Angular")}, ${span.language("PostgreSQL")}, ${span.language("Ollama")}`,
        `Built a gamified French language learning app using ${span.language("Angular")} and ${span.language("Spring Boot")} for real-time AI-driven voice conversations, leveraging Ollama AI for dynamic language correction and feedback.`,
        `Integrated a ${span.language("PostgreSQL")} database to persist chat history, user profiles, and scoring data, enabling memory for the Ollama-powered chatbot.`,
        "🔗 https://github.com/AganonIsaiah/French-Speaking-App",
    ]),

    "info": createMessages([
        `<b>${span.header("CONTACT INFORMATION")}</b>`,
        "☎️ <b>Phone Number:</b> +1 (365) 880-9158",
        "📤 <b>Email:</b> IsaiahAganon@cmail.carleton.ca",
        "🖥️ GitHub: https://github.com/AganonIsaiah",
        "💼 LinkedIn: https://www.linkedin.com/in/isaiah-aganon"
    ]),

    "clear": createMessages([
        "Welcome to my webpage!"
    ])
};

messages["send all"] = [
    ...messages["bio"],
    ...messages["skills"],
    ...messages["experience"],
    ...messages["projects"],
    ...messages["info"],
    ...messages["resume"],
];

messages["default"] = [
    ...createMessages(["Hey!"]),
    ...messages["view all cmds"]
];

export default messages;
