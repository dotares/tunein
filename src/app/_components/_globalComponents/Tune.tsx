import React from "react";
import Image from "next/image";
import { ResultVideoObject } from "../_searchComponents/SearchResults";

const Tune: React.FC<ResultVideoObject> = ({
    videoCover,
    videoName,
    videoArtist,
    videoId,
}) => {
    return (
        // <Link href={videoId}>
        <div>
            {/* <Image href={videoCover} /> */}
            <div>
                <div>{videoName}</div>
                <div>{videoArtist}</div>
            </div>
        </div>
        // </Link>
    );
};

export default Tune;
