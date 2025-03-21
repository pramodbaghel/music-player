import React, { useState, useRef } from "react";

const MusicPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "300px" }}>
            <audio ref={audioRef} src={src} />
            <button onClick={togglePlay} style={{ fontSize: "16px", padding: "10px", margin: "10px" }}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default MusicPlayer;
