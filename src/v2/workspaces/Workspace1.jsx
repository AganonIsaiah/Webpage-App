'use client';

import Terminal from "../components/Terminal"
import { introTerminal, contactTerminal, navTerminal, experienceTerminal, projectTerminal } from "../data/terminals"

export default function Workspace1() {

    return (
        <div>
            <Terminal config={introTerminal} />
            <Terminal config={navTerminal} />
            <Terminal config={experienceTerminal} />
            <Terminal config={contactTerminal} />
            <Terminal config={projectTerminal} />
        </div>
    );
}