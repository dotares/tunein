"use client";

import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SearchResult = () => {
    const { data, error, isLoading } = useSWR("example api", fetcher);

    if (error) return <div>Failed to load, please retry</div>;
    if (isLoading) return <div>Loading ...</div>;

    return (
        <div>
            <div>Image element for cover</div>
            <div>
                <div>Tune name</div>
                <div>Artist name</div>
            </div>
            <div>add to playlist and star button</div>
        </div>
    );
};

export default SearchResult;
