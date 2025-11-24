'use client';

import { useState } from 'react';

import '@/v2/styles/Desktop.css'

import SystemBar from '../components/SystemBar';
import Terminal from '../components/Terminal';
import { introTerminal, contactTerminal, navTerminal, experienceTerminal, projectTerminal } from '../data/terminals';

/**
 * Workspaces (2-4)
 * - Should display webpages
 * 1. Workpage mocks chatgpt
 * 2. Mocks Google webpage
 * 3. 
 */
export default function Desktop() {

    const [activeWorkspace, setActiveWorkspace] = useState('ws1');

    return (
        <div className='flex flex-col'>

            <SystemBar activeWorkspace={activeWorkspace} setActiveWorkspace={setActiveWorkspace} />

            <div id="ws1" 
            className={`workspace ${activeWorkspace === 'ws1' ? 'active' : ''}`}>
                <Terminal config={introTerminal} />
                <Terminal config={navTerminal} />
                <Terminal config={projectTerminal} />
                <Terminal config={experienceTerminal} />
                <Terminal config={contactTerminal} />
            </div>

            <div id="ws2" className={`workspace ${activeWorkspace === 'ws2' ? 'active' : ''}`}>
                Testing 2
            </div>
        </div>
    );
}