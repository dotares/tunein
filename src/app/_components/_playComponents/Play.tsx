"use client";

import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

interface PlayProps {
    url: string;
}

const Play: React.FC<PlayProps> = ({ url }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    return (
        <div>
            <ReactPlayer
                playing={isPlaying}
                ref={ref}
                url={`https://www.youtube.com/watch?v=${url}`}
            />
            <button
                onClick={() => {
                    setIsPlaying(true);
                }}
            >
                Play
            </button>
            <button
                onClick={() => {
                    setIsPlaying(false);
                }}
            >
                Pause
            </button>
        </div>
    );
};

export default Play;
