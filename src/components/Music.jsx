import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Music.css";
import { songs } from "../data/songs";

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0); 
    const [duration, setDuration] = useState(0); 
    const [messageShown, setMessageShown] = useState(false); 
    const navigate = useNavigate();
    const audioRef = useRef(null);
    const progressIntervalRef = useRef(null);
    const messageTimerRef = useRef(null); 

    useEffect(() => {
        
        audioRef.current = new Audio(songs[currentSongIndex].file);
        audioRef.current.addEventListener("loadedmetadata", () => {
            setDuration(audioRef.current.duration); 
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = "";
            }
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
            if (messageTimerRef.current) {
                clearTimeout(messageTimerRef.current);  
            }
        };
    }, [currentSongIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSkipForward = () => {
        const newIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(newIndex);
        resetPlay(newIndex);
    };
    
    const handleSkipBack = () => {
        const newIndex = currentSongIndex === 0 
            ? songs.length - 1   
            : currentSongIndex - 1;   
        
        setCurrentSongIndex(newIndex);
        resetPlay(newIndex);
    };


    const resetPlay = (index) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        audioRef.current = new Audio(songs[index]);
        
        setProgress(0);
        
        if (!messageShown) {
            setShowMessage(false); 
        }

       
        if (isPlaying) {
            togglePlayPause();
        }
    };

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
                        // console.log("Audio playing successfully");
                        setIsPlaying(true);

                        
                        messageTimerRef.current = setTimeout(() => {
                            setShowMessage(true);
                            setMessageShown(true);  
                        }, 2400);  

      
                        progressIntervalRef.current = setInterval(() => {
                            if (audioRef.current) {
                                setCurrentTime(audioRef.current.currentTime); 
                                const progressPercentage = (audioRef.current.currentTime / duration) * 100;
                                setProgress(progressPercentage);
                            }
                        }, 100);  
                    })
                    .catch(error => {
                     //   console.error("Audio play failed:", error);
                        setIsPlaying(false);
                    });
            }
        }
    };

    const handleMessageClick = () => { 
        navigate("/home");
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleProgressClick = (e) => {
        const progressBar = e.target.closest('.progress-container');
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const barWidth = progressBar.offsetWidth;
        const newProgress = Math.max(0, Math.min(100, (clickX / barWidth) * 100));
        const newTime = (newProgress / 100) * duration;
        

        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setProgress(newProgress);
        }
    };
    
    return (
        <div className="music-container">
            <div className="music-background"></div>
            <div className="music-player">
                <div className="lock-info">
                    <p className="date">{time.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
                    <p className="time">{time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}</p>
                </div>

                {showMessage && (
                    <div className="ios-message-bubble" onClick={handleMessageClick}>
                        <div className="ios-message-header">
                            <div className="ios-message-sender">Isaiah Aganon</div>
                            <div className="ios-message-time">now</div>
                        </div>
                        <div className="ios-message-text">Wants to send you a message.</div>
                    </div>
                )}

                {!showMessage && !messageShown ? (
                    <div className="song-info">
                        <img src="/en.png" alt="Album Art" className="album-art" />
                        <h2>Isaiah's Mix</h2>
                    </div>
                ) : (
                    <h3 className="song-title">{songs[currentSongIndex].name}</h3>
                )}
 
                <div className="progress-container" onClick={handleProgressClick}>
                    <div className="progress-bar">
                        <div className="progress" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="progress-time">
                        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="music-controls">
                    <SkipBack className="icon" onClick={handleSkipBack} />
                    <button 
                        onClick={togglePlayPause} 
                        className="play-button"
                        type="button"
                    >
                        {isPlaying ? <Pause className="icon" /> : <Play className="icon" />}
                    </button>
                    <SkipForward className="icon" onClick={handleSkipForward} />
                </div>
            </div>
        </div>
    );
}
