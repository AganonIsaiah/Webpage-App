import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Music.css";

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const audioRef = useRef(null);
    const progressIntervalRef = useRef(null);

    useEffect(() => {
        const song = "sch"
        audioRef.current = new Audio(`/${song}.wav`);
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = "";
            }
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, []);

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

    const togglePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = null;
            }
            setIsPlaying(false);
        } else {
            audioRef.current.currentTime = 0; 
            
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log("Audio playing successfully");
                        setIsPlaying(true);
                        
                        setProgress(0);
                        const duration = 5000;
                        const stepTime = 10;
                        const step = (100 / (duration/stepTime));
                        
                        progressIntervalRef.current = setInterval(() => {
                            setProgress((prev) => {
                                if (prev >= 100) {
                                    if (progressIntervalRef.current) {
                                        clearInterval(progressIntervalRef.current);
                                        progressIntervalRef.current = null;
                                    }
                                    setShowMessage(true);
                                    setIsPlaying(false);
                                    return 100;
                                }
                                return prev + step;
                            });
                        }, stepTime);
                    })
                    .catch(error => {
                        console.error("Audio play failed:", error);
                        alert("Could not play audio. Please check that the file exists at: /sch.wav");
                        setIsPlaying(false);
                    });
            }
        }
    };

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
                            <button 
                                onClick={togglePlayPause} 
                                className="play-button"
                                type="button"
                            >
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