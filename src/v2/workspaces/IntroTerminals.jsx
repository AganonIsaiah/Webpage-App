'use client';

import Terminal from "../components/Terminal"
import {
    introTerminal,
    experienceTerminal,
    projectTerminal,
    entrepreneurTerminal,
} from "../data/terminals"
import '@/v2/styles/Desktop.css'

export default function IntroTerminals() {
    return (
        <div className="terminal-grid">
            <div className="terminal-col">
                <Terminal config={introTerminal} />
                <Terminal config={experienceTerminal} />
            </div>
            <div className="terminal-col">
                <Terminal config={entrepreneurTerminal} />
                <Terminal config={projectTerminal} />
            </div>
        </div>
    );
}
