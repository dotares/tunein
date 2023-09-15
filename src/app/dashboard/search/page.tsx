"use client";

import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const query = "started from the bottom drake";
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "ChickenWhopper";

const page = () => {
    const { data, error, isLoading } = useSWR(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}&regionCode=IN&videoCategoryId=10&maxResults=5&videoEmbeddable=true&order=relevance`,
        fetcher
    );

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading ...</div>;

    return <div>{data.key}</div>;
};

export default page;
