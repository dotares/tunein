"use client";

import React from "react";
import useSWR from "swr";
import Tune from "../_globalComponents/Tune";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface SearchResultsProps {
    query: string;
}

export interface ResultVideoObject {
    videoCover: string;
    videoName: string;
    videoArtist: string;
    videoId: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
    const { data, error } = useSWR(
        `https://yt-http-api.onrender.com/listen?t=${query}`,
        fetcher
    );

    if (error) return <div>Failed to load, please retry</div>;
    if (!data) return <div>Loading ...</div>;

    console.log(data);

    return data.map((video: ResultVideoObject) => {
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
