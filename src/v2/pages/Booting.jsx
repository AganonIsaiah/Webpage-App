'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BOOT_LINES = [
    { text: '[    0.000000] Linux version 6.12.0-arch1 (gcc 14.2.0) #1 SMP PREEMPT_DYNAMIC', color: 'gray', delay: 60 },
    { text: '[    0.000000] BIOS-provided physical RAM map:', color: 'gray', delay: 40 },
    { text: '[    0.000001] Initializing cgroup subsys cpuset', color: 'gray', delay: 40 },
    { text: '[    0.000312] PCI: Using configuration type 1 for base access', color: 'gray', delay: 50 },
    { text: '[    0.001042] clocksource: tsc-early: mask: 0xffffffffffffffff', color: 'gray', delay: 40 },
    { text: '[    0.002184] ACPI: IRQ0 used by override.', color: 'gray', delay: 40 },
    { text: '[    0.004901] Memory: 16384000K/16777216K available', color: 'gray', delay: 60 },
    { text: '[    0.006723] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1', color: 'gray', delay: 50 },
    { text: '', delay: 30 },
    { text: '[  OK  ] Started Journal Service.', color: 'ok', delay: 80 },
    { text: '[  OK  ] Started udev Kernel Device Manager.', color: 'ok', delay: 90 },
    { text: '[  OK  ] Mounted /proc Filesystem.', color: 'ok', delay: 70 },
    { text: '[  OK  ] Mounted /sys Filesystem.', color: 'ok', delay: 70 },
    { text: '[  OK  ] Reached target Local File Systems.', color: 'ok', delay: 100 },
    { text: '[  OK  ] Started Network Time Synchronization.', color: 'ok', delay: 120 },
    { text: '[  OK  ] Reached target Network.', color: 'ok', delay: 90 },
    { text: '[  OK  ] Started OpenSSH Daemon.', color: 'ok', delay: 110 },
    { text: '[  OK  ] Started Display Manager.', color: 'ok', delay: 130 },
    { text: '', delay: 40 },
    { text: '         Loading user environment...', color: 'white', delay: 150 },
    { text: '         Mounting /home/isaiah...', color: 'white', delay: 120 },
    { text: '[  OK  ] Mounted /home/isaiah.', color: 'ok', delay: 100 },
    { text: '', delay: 40 },
    { text: '         Starting portfolio.service...', color: 'white', delay: 180 },
    { text: '[  OK  ] Started portfolio.service.', color: 'ok', delay: 200 },
    { text: '', delay: 80 },
    { text: '████████████████████████████████████████████████████████████', color: 'green', delay: 100 },
    { text: '', delay: 30 },
    { text: '         Welcome to aganonlabs.com', color: 'white', delay: 120 },
    { text: '         Isaiah Aganon — Full-Stack Developer & Entrepreneur', color: 'white', delay: 80 },
    { text: '', delay: 30 },
    { text: '████████████████████████████████████████████████████████████', color: 'green', delay: 80 },
    { text: '', delay: 400 },
];

const colorStyle = {
    gray:  '#888888',
    white: '#ffffff',
    green: '#00d700',
};

export default function Booting() {
    const router = useRouter();
    const [visibleLines, setVisibleLines] = useState([]);

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        return () => {
            document.body.style.margin = '';
            document.body.style.padding = '';
        };
    }, []);

    useEffect(() => {
        let index = 0;
        let timeout;

        const showNext = () => {
            if (index >= BOOT_LINES.length) {
                timeout = setTimeout(() => router.push('/v2/desktop'), 0);
                return;
            }
            const line = BOOT_LINES[index];
            setVisibleLines(prev => [...prev, line]);
            index++;
            timeout = setTimeout(showNext, line.delay);
        };

        timeout = setTimeout(showNext, 200);
        return () => clearTimeout(timeout);
    }, [router]);

    const renderLine = (line, i) => {
        if (!line.text) return <div key={i} className="h-3" />;

        if (line.color === 'ok') {
            return (
                <div key={i} className="font-mono text-sm leading-5">
                    <span style={{ color: '#888888' }}>[</span>
                    <span style={{ color: '#00d700', fontWeight: 'bold' }}>  OK  </span>
                    <span style={{ color: '#888888' }}>]</span>
                    <span style={{ color: '#ffffff' }}>{line.text.slice(8)}</span>
                </div>
            );
        }

        return (
            <div key={i} className="font-mono text-sm leading-5" style={{ color: colorStyle[line.color] ?? '#ffffff' }}>
                {line.text}
            </div>
        );
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', colorScheme: 'dark' }} className="h-screen! flex flex-col justify-start overflow-hidden">
            <div className="max-w-4xl w-full">
                {visibleLines.map((line, i) => renderLine(line, i))}
                <span className="inline-block w-2 h-4 bg-[#c0caf5] animate-pulse ml-0.5" />
            </div>
        </div>
    );
}
