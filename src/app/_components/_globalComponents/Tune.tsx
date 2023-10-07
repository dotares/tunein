import React from "react";
import Image from "next/image";

const Tune = ({ videoCover, videoName, videoArtist, videoId }) => {
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
