"use client";

import React from "react";
import useSWR from "swr";
import Tune from "../_globalComponents/Tune";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface SearchResultsProps {
    query: string | null;
}

export interface ResultVideoObject {
    videoCover: string;
    videoTitle: string;
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

    return data.map((video: ResultVideoObject, index: number) => {
        return (
            <Tune
                key={index}
                videoCover={video.videoCover}
                videoTitle={video.videoTitle}
                videoArtist={video.videoArtist}
                videoId={video.videoArtist}
            />
        );
    });
};

export default SearchResults;
