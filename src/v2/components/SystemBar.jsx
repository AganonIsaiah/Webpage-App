import { useState, useEffect } from "react";
import '@/v2/styles/Desktop.css'

export default function SystemBar({ activeWorkspace, setActiveWorkspace }) {
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(new Date());
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    if (!time) return null;

    const formatDate = time.toISOString().slice(0, 10);
    const formatTime = time.toTimeString().slice(0, 8);
    const weekday = time.toLocaleDateString(undefined, { weekday: 'long' });

    const workspaces = [
        { id: 'ws1', label: '1' },
        { id: 'ws2', label: '2' },
        { id: 'ws3', label: '3' },
        { id: 'ws4', label: '4' },
    ];

    return (
        <div className="system-bar">
            <div className="flex gap-2">
                {workspaces.map(ws => (
                    <button
                        key={ws.id}
                        onClick={() => setActiveWorkspace(ws.id)}
                        className={`workspace-btn ${activeWorkspace === ws.id ? 'workspace-btn active' : ''
                            }`}
                    >
                        {ws.label}
                    </button>
                ))}
            </div>

            <span className="hidden sm:block !mx-auto">Nil by Mouth - Mercy</span>

            <span className="pblue">{weekday} | {formatDate} | {formatTime}</span>
        </div>
    );
}