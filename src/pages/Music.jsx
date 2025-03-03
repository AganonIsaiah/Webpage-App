import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Music.css";

const globalAudio = new Audio();

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(0);
    const [messageClicked, setMessageClicked] = useState(false);
    const navigate = useNavigate();
    const audioRef = useRef(globalAudio);
    const progressIntervalRef = useRef(null);

    useEffect(() => {
        const song = "birdseyeview";
        if (!audioRef.current.src || !audioRef.current.src.includes(song)) {
            audioRef.current.src = `/${song}.wav`;
        }
        const handleEnded = () => {
            setIsPlaying(false);
            navigate("/home");
        };
        
        audioRef.current.addEventListener('ended', handleEnded);
        
        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
            audioRef.current.removeEventListener('ended', handleEnded);
        };
    }, [navigate]);

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
                        const duration = 1400;
                        const stepTime = 10;
                        const step = (100 / (duration/stepTime));
                        
                        progressIntervalRef.current = setInterval(() => {
                            setProgress((prev) => {
                                if (prev >= 100) {
                                    if (progressIntervalRef.current) {
                                        clearInterval(progressIntervalRef.current);
                                        progressIntervalRef.current = null;
                                    }
                                    setTimeout(() => {
                                        setShowMessage(true);
                                        setIsPlaying(false);
                                    }, 50)
                                
                                    return 100;
                                }
                                return prev + step;
                            });
                        }, stepTime);
                    })
                    .catch(error => {
                        console.error("Audio play failed:", error);
                        setIsPlaying(false);
                    });
            }
        }
    };

    const handleMessageClick = () => { 
        setMessageClicked(true);
    
        if (audioRef.current) {
            audioRef.current.currentTime = 109.5; 
            
            const endedHandler = () => {
                audioRef.current.pause();
            };
            
            audioRef.current.removeEventListener('ended', endedHandler);
            audioRef.current.addEventListener('ended', endedHandler, { once: true });
            
            audioRef.current.play().catch(error => {
                console.error("Failed to play audio from 1:49:", error);
            });
        }
        
        setTimeout(() =>{
            navigate("/home");
        }, 500)
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
                    <div 
                        className={`ios-message-bubble ${messageClicked ? 'ios-message-clicked' : ''}`}
                        onClick={handleMessageClick}
                    >
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