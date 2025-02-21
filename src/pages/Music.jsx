import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Music.css";

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const formattedDate = time.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            setProgress(0);
            const duration = 2000;
            const stepTime = 10;
            const step = (100 / (duration/stepTime));

            const progressInterval = setInterval(() =>{
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        setShowMessage(true)
                        return 100;
                    }
                    return prev+step;
                });
            }, stepTime);

            return () => clearInterval(progressInterval);
        }
    }, [isPlaying]);

    const handleMessageClick = () => {
        navigate("/home");
    };

    return (
        <div className="music-container">
            <div className="music-background"></div>


            <div className="music-player">
            
                <div className="lock-info">
                    <p className="date">{formattedDate}</p>
                    <p className="time">{formattedTime}</p>
                </div>

                {showMessage ? (
                    <div className="ios-message-bubble" onClick={handleMessageClick}>
                        <div className="ios-message-header">
                            <div className="ios-message-sender">Isaiah Aganon</div>
                            <div className="ios-message-time">now</div>
                        </div>
                        <div className="ios-message-text">Wants to send you a message.</div>
                    </div>
                ) : (
                    <>
                        <div className="song-info">
                            <img src="/en.png" alt="Album Art" className="album-art" />
                            <h2>Isaiah's Mix</h2>
                            <p>Music</p>
                        </div>

                        <div className="progress-bar">
                            <div className="progress" style={{width: `${progress}%`}}></div>
                        </div>

                        <div className="music-controls">
                            <SkipBack className="icon" />
                            <button onClick= {() => setIsPlaying((prev) => !prev)} className="play-button">
                                {isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
                            </button>
                            <SkipForward className="icon" />
                        </div>
                    </>
                )}


            </div>
        </div>
    );
}