import { useState, useEffect } from "react";
import '@/v2/styles/Desktop.css'

export default function SystemBar({ activeWorkspace, setActiveWorkspace }) {
    const [time, setTime] = useState(undefined);

    const [cpu, setCpu] = useState(23);
    const [ram, setRam] = useState(42);
    const [battery, setBattery] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);

        const sysInterval = setInterval(() => {
            setCpu(Math.min(100, Math.max(0, cpu + (Math.random() * 10 - 5))));
            setRam(Math.min(100, Math.max(0, ram + (Math.random() * 10 - 5))));
            setBattery(Math.min(100, Math.max(0, battery - 0.01)));
        }, 2000);

        return () => {
            clearInterval(intervalId);
            clearInterval(sysInterval);
        };
    }, [cpu, ram, battery]);

    const formatDate = time?.toISOString().slice(0, 10) ?? 'YYYY-MM-DD';
    const formatTime = time?.toTimeString().slice(0, 8) ?? 'HH:MM:SS';
    const weekday = time?.toLocaleDateString(undefined, { weekday: 'long' }) ?? 'Day';

    const workspaces = [
        { id: 'ws1', label: '1' },
        { id: 'ws2', label: '2' },
        { id: 'ws3', label: '3' },
        { id: 'ws4', label: '4' },
        { id: 'ws5', label: '5' }
    ];

    const Bar = ({ value, color = "bg-green-500" }) => (
        <div className="w-10 h-2 border border-gray-600 rounded overflow-hidden">
            <div className={`${color} h-full`} style={{ width: `${value}%` }}></div>
        </div>
    );

    return (
        <div className="system-bar flex justify-between items-center px-3">
            <div className="flex gap-2">
                {workspaces.map(ws => (
                    <button
                        key={ws.id}
                        onClick={() => setActiveWorkspace(ws.id)}
                        className={`workspace-btn ${activeWorkspace === ws.id ? 'workspace-btn active' : ''}`}
                    >
                        {ws.label}
                    </button>
                ))}
            </div>

            <span className="pblue">{weekday} | {formatTime} | {formatDate}</span>

            <div className="flex gap-3 items-center justify-center text-sm pgray">
                <div className="flex items-center gap-1">
                    <span className="text-xs !mt-1">CPU</span>
                    <Bar value={cpu} color="bg-[#7aa2f7]" />
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xs !mt-1">RAM</span>
                    <Bar value={ram} color="bg-[#7aa2f7]" />
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xs !mt-1">BAT</span>
                    <Bar value={battery} color="bg-[#7aa2f7]" />
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xs !mt-1">NET</span>
                    <span className="text-xs !mt-1">Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xs !mt-1">VOL</span>
                    <Bar value={70} color="bg-[#7aa2f7]" />
                </div>
            </div>
        </div>
    );
}
