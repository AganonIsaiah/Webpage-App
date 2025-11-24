'use client';

import { useState } from 'react';
import '@/v2/styles/Desktop.css'

import SystemBar from '../components/SystemBar';
import Workspace1 from '../workspaces/Workspace1';

import Workspace5 from '../workspaces/Workspace5';

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

            <div id="ws1" className={`workspace ${activeWorkspace === 'ws1' ? 'active' : ''}`}>
                <Workspace1 />
            </div>

            <div id="ws2" className={`workspace ${activeWorkspace === 'ws2' ? 'active' : ''}`}>
                Testing 2
            </div>


            <div id="ws3" className={`workspace ${activeWorkspace === 'ws3' ? 'active' : ''}`}>
                Testing 2
            </div>


            <div id="ws4" className={`workspace ${activeWorkspace === 'ws4' ? 'active' : ''}`}>
                Testing 2
            </div>



            <div id="ws5"
                className={`workspace ${activeWorkspace === 'ws5' ? 'active' : ''}
                `}>
                <div className="h-[calc(100vh-32px)] flex justify-center items-center ">
                    <Workspace5 />
                </div>

            </div>
        </div>
    );
}