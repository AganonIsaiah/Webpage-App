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
const NAME = "Isaiah Aganon";

const messages = {
    "view all cmds": [
        {text: 'Type "send all" to view everything', sender: NAME},
        // {text: 'Type "clear" to clear the chat', sender: NAME},
        // {text: 'Type "all cmds" to view all the commands', sender: NAME},
        {text: 'Type "bio" to view my biography', sender: NAME},
        {text: 'Type "resume" to view my resume', sender: NAME},
        {text: 'Type "experience" to view all of my experience', sender: NAME},
        {text: 'Type "projects" to view all of my projects', sender: NAME},
        {text: 'Type "info" to receive my contact information', sender: NAME}
    ],
    "bio": [
        {text: "BIOGRAPHY", sender: NAME},
        {text: "Here is my bio: <Generic bio>", sender: NAME},
        {text: "======================================================", sender: NAME}
    ],
    "resume": [
        {text: "RESUME", sender: NAME},
        {text: "Here is my resume: ", sender: NAME},
        {text: "======================================================", sender: NAME}
    ],
    "experience": [
        {text: "EXPERIENCE", sender: NAME},
        {text: "Here is my experience: <Generic experience>", sender: NAME},
        {text: "======================================================", sender: NAME}
    ], 
    "projects": [
        {text: "PROJECTS", sender: NAME},
        {text: "Here are my projects: <Generic projects>", sender: NAME},
        {text: "======================================================", sender: NAME}
    ], 
    "info": [
        {text: "CONTACT INFORMATION", sender: NAME},
        {text: "☎️ Phone Number: +1 (365) 880-9158", sender: NAME},
        {text: "📤 Email: IsaiahAganon@cmail.carleton.ca", sender: NAME},
        {text: "🖥️ Github: https://github.com/AganonIsaiah", sender: NAME},
        {text: "💼 Linkedin: https://www.linkedin.com/in/isaiah-aganon", sender: NAME},
        {text: "======================================================", sender: NAME}
    ],
}

messages["start"] = [
    {text: "Welcome to my webpage!", sender: NAME},
]

messages["send all"] = [
    ...messages["bio"],
    ...messages["resume"],
    ...messages["experience"],
    ...messages["projects"],
    ...messages["info"]
]

messages["default"] = [
    {text: "Incorrect input, retry.", sender: NAME},
    ...messages["view all cmds"]
]
export default messages;