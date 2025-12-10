'use client';

import { useState } from 'react';
import '@/v2/styles/Desktop.css'

import SystemBar from '../components/SystemBar';
import IntroTerminals from '../workspaces/IntroTerminals';
import GooglePortfolio from '../workspaces/GooglePortfolio';
import DiscordExperience from '../workspaces/DiscordExperience';
import BlogBio from '../workspaces/BlogBio';
import Projects from '../workspaces/Projects';

/**
 * Workspaces (2-5)
 * - Should display webpages
 * 2. Discusses Bio - Blog based - black theme infinite scrolling
 * 3. Discusses Work Experience - Discord Based
 * 4. Discusses Projects - Spotify Based
 * 5. Links to previous portfolio + Github + LinkedIn - Google Based 
 */
export default function Desktop() {

    const [activeWorkspace, setActiveWorkspace] = useState('ws1');

    return (
        <div className='flex flex-col'>

            <SystemBar activeWorkspace={activeWorkspace} setActiveWorkspace={setActiveWorkspace} />

            <div id="ws1" className={`workspace ${activeWorkspace === 'ws1' ? 'active' : ''}`}>
                <IntroTerminals />
            </div>

            <div id="ws2" className={`workspace ${activeWorkspace === 'ws2' ? 'active' : ''}`}>
                <div className="h-[calc(100vh-32px)] flex justify-center items-center ">
                    <BlogBio />
                </div>
            </div>

            <div id="ws3" className={`workspace ${activeWorkspace === 'ws3' ? 'active' : ''}`}>
                <div className="h-[calc(100vh-32px)] flex justify-center items-center ">
                    <DiscordExperience />
                </div>
            </div>

            <div id="ws4" className={`workspace ${activeWorkspace === 'ws4' ? 'active' : ''}`}>
                <div className="h-[calc(100vh-32px)] flex justify-center items-center ">
                    <Projects />
                </div>
            </div>

            <div id="ws5"
                className={`workspace ${activeWorkspace === 'ws5' ? 'active' : ''}
                `}>
                <div className="h-[calc(100vh-32px)] flex justify-center items-center ">
                    <GooglePortfolio />
                </div>
            </div>
        </div>
    );
}