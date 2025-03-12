/*
    - Messaging should be interactive and type based,
    - User enters a text, the corresponding messages are outputted
    - All messages will be displayed in individual text bubble
        - "Send all" -  Sends everything in order: bio, resume, work experience, projects, links
        1. "Send bio" - Simple text (strings) that describe me
        2. "Send resume" - displays .pdf of my resume
        3. "Send work experience" - Simple text (strings) of my experience
        4. "Send projects" -  Simple, brief, text (strings) describing the project, followed by link and .pdf 
        5. "Send contact info" - Simple text (strings) that link to my linkedin and github
*/
import resumePDF from '../assets/resume.pdf';
const createMessages = (texts) => texts.map(text => ({ text, sender: "Isaiah Aganon"}));

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
        "ABOUT ME",
        "👋 Hey! I'm Isaiah Aganon!",
        "🏫 I am a 3rd year at Carleton University.",
        "🖥️ I am currently pursuing a Bachelors in Computer Science (Honours) degree.",
        "🧮 I minor in Mathematics and specialize in AI & ML.",
        "🧑‍💻 I have an interest in Human-Computer Interactions and web development!"
    ]),
    "skills": createMessages([
        "SKILLS",
        "💻 Programming Languages: Java, JavaScript, TypeScript, C, C++, SQL",
        "📦 Frameworks & Libraries: React, Spring Boot, Node.js, Deno, Express.js, Tailwind CSS",
        "🛠️ Developer Tools: Git, Docker, Linux, Vim, VS Code, IntelliJ, Vercel",
    ]),
    "resume": createMessages([
        "RESUME",
        `<iframe src="${resumePDF}" width="100%" height="100%" style="border:none;"></iframe>`
    ]),
    "experience": createMessages([
        "EXPERIENCE",

        // Job 1
        "💻🛠️ Software Developer Intern",
        "RBC",
        "🗓️ May. 2025 -- Dec. 2025",
        "Skills: ",

        "Incoming intern.",
        
        // Job 2
        "🏫💡 Teaching Assistant (Fundamentals of Web Applications)",
        "Carleton University",
        "🗓️ Jan. 2025 -- Apr. 2025",
        "Skills: JavaScript, HTML, CSS, Node.js, Express.js, React, SQLite",

        "Delivered weekly tutorials for a class section of 33 students, covering web development using HTML, CSS, JavaScript, SQLite, and Node.js for back-end development.",
        "Guided students through hands-on projects utilizing Node.js, Express.js, and React, emphasizing RESTful APIs, component-based architecture, and state management.",
        "Taught debugging techniques in Node.js and React applications, including using browser DevTools and React DevTools for performance tuning and troubleshooting.",
       
        // Job 3
        "📚👨‍🏫 Teaching Assistant (Fundamentals of Web Applications)",
        "Carleton University",
        "🗓️ Sep. 2024 -- Dec. 2024",
        "Skills: JavaScript, TypeScript, HTML, CSS, Deno, Deno Fresh, Tailwind CSS, SQLite",

        "Conducted weekly tutorials for a class section of 47 students, focusing on web development fundamentals, including HTML, CSS, JavaScript, SQLite, and Deno for back-end development.",
        "Introduced students to Deno’s Fresh framework, TypeScript, and Tailwind CSS, guiding them through the process of building a full-stack web application project, integrating front-end and back-end components.",
        "Assisted students with using Chrome DevTools to inspect elements, debug JavaScript errors, and analyze network requests for failed API calls, ensuring faster resolution to programming challenges.",
    ]),

    "projects": createMessages([
        "PROJECTS",

        // Webpage App
        "📄 Webpage App",
        "Created an iMessage-styled digital profile webpage with a React front-end and Node.js back-end, displaying interactive, command-based messages that showcase my biography, resume, work experience, and projects.",
        "Skills: JavaScript, Node.js, React, CSS, Vercel",
        "https://github.com/AganonIsaiah/Webpage-App",

        // French App
        "🇫🇷 French Speaking App",
        "Designed and implemented a full-stack application leveraging Spring Boot to support French language learners in practicing and receiving feedback on their oral production skills.",
        "Skills: Java, Spring Boot, HTML, CSS",
        "https://github.com/AganonIsaiah/French-Speaking-App",

        // Music App
        "🥁 Music Playlist App",
        "Developed a dynamic full-stack music playlist application with a Handlebars.js front-end and Node.js back-end, allowing users to create, organize, listen, and manage personalized music playlists.",
        "Skills: JavaScript, Node.js, Handlebars.js, SQLite",
        "https://github.com/AganonIsaiah/Music-Playlist-App",

        // NETWORK INFO APP
        "🛜 Network Information App",
        "Engineered a comprehensive tool for managing Wi-Fi network information with a React front-end and Node.js back-end, enabling users to display, add, and remove networks.",
        "Skills: JavaScript, Node.js, React, CSS",
        "https://github.com/AganonIsaiah/Network-Information-App",
        
    ]),

    "info": createMessages([
        "CONTACT INFORMATION",
        "☎️ Phone Number: +1 (365) 880-9158",
        "📤 Email: IsaiahAganon@cmail.carleton.ca",
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
]

messages["default"] = [
    ...createMessages(["Hey!"]),
    ...messages["view all cmds"]
]
export default messages;