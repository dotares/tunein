"use client";

import React from "react";
import ReactPlayer from "react-player";

interface PlayProps {
    url: string;
}

const Play: React.FC<PlayProps> = ({ url }) => {
    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${url}`} />
        </div>
    );
};

export default Play;
