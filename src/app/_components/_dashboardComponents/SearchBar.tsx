"use client";

import React from "react";

const SearchBar = () => {
    return (
        <form action="/dashboard/search">
            <input type="text" placeholder="Search" />
            <button>Go</button>
        </form>
    );
};

export default SearchBar;
