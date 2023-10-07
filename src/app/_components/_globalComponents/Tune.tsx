import React from "react";
import Link from "next/link";
import { ResultVideoObject } from "../_searchComponents/SearchResults";

const Tune: React.FC<ResultVideoObject> = ({
    videoCover,
    videoTitle,
    videoArtist,
    videoId,
}) => {
    return (
        <Link href={`/dashboard/play?l=${videoId}`}>
            <div>
                <img src={videoCover} alt="Song cover" />
            </div>
            <div>
                <div>{videoTitle}</div>
                <div>by {videoArtist}</div>
            </div>
        </Link>
    );
};

export default Tune;
