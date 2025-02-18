/*
    - Messaging should be interactive and type based,
    - User enters a text, the corresponding messages are outputted
    - All messages will be displayed in individual text bubble
        - "Send all" -  Sends everything in order: bio, resume, work experience, projects, links
        1. "Send bio" - Simple text (strings) that describe me
        2. "Send resume" - displays .pdf of my resume
        3. "Send work experience" - Simple text (strings) of my experience
        4. "Send projects" -  Simple, brief, text (strings) describing the project, followed by link and .pdf 
        5. "Send links" - Simple text (strings) that link to my linkedin and github
*/
const NAME = "Isaiah Aganon";

const messages = {
    "all cmds": [
        {text: 'Type "send all" to view everything', sender: NAME},
        {text: 'Type "clear" to clear the chat', sender: NAME},
        {text: 'Type "all cmds" to view all the commands', sender: NAME},
        {text: 'Type "send bio" to view my biography', sender: NAME},
        {text: 'Type "send resume" to view my resume', sender: NAME},
        {text: 'Type "send work experience" to view all of my experience', sender: NAME},
        {text: 'Type "send projects" to view all of my projects', sender: NAME},
        {text: 'Type "send links" to receive my links to my Github and Linkedin profiles', sender: NAME}
    ],
    "send bio": [
        {text: "Here is my bio: <Generic bio>", sender: NAME}
    ],
    "send resume": [
        {text: "Here is my resume: ", sender: NAME}
    ],
    "send work experience": [
        {text: "Here is my experience: <Generic experience>", sender: NAME}
    ], 
    "send projects": [
        {text: "Here are my projects: <Generic projects>", sender: NAME}
    ], 
    "send links": [
        {text: "Github: https://github.com/AganonIsaiah", sender: NAME},
        {text: "Linkedin: https://www.linkedin.com/in/isaiah-aganon", sender: NAME}
    ]
    
}

messages["start"] = [
    {text: "Welcome to my webpage!", sender: NAME},
    ...messages["all cmds"]
]

messages["send all"] = [
    ...messages["send bio"],
    ...messages["send resume"],
    ...messages["send work experience"],
    ...messages["send projects"],
    ...messages["send links"]
]

messages["default"] = [
    {text: "Incorrect input, retry.", sender: NAME},
    ...messages["all cmds"]
]
export default messages;