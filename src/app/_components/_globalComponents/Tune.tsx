import React from "react";
import Image from "next/image";
import { ResultVideoObject } from "../_searchComponents/SearchResults";

const Tune: React.FC<ResultVideoObject> = ({
    videoCover,
    videoTitle,
    videoArtist,
    videoId,
}) => {
    return (
        // <Link href={videoId}>
        <div>
            <div>
                <img src={videoCover} alt="Song cover" />
            </div>
            <div>
                <div>{videoTitle}</div>
                <div>by {videoArtist}</div>
            </div>
        </div>
        // </Link>
    );
};

export default Tune;
