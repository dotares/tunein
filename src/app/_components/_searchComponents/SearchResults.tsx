"use client";

import React from "react";
import useSWR from "swr";
import Tune from "../_globalComponents/Tune";

const fetcher = (url) => fetch(url).then((r) => r.json());

const SearchResults = ({ query }) => {
    const { data, error } = useSWR(
        `https://yt-http-api.onrender.com/listen?t=${query}`,
        fetcher
    );

    if (error) return <div>Failed to load, please retry</div>;
    if (!data) return <div>Loading ...</div>;

    console.log(data);

    return data.map((video) => {
        return (
            <Tune
                videoCover={video.videoCover}
                videoName={video.videoName}
                videoArtist={video.videoArtist}
                videoId={video.videoArtist}
            />
        );
    });
};

export default SearchResults;
