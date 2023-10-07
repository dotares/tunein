import React from "react";

import SearchBar from "../_components/_dashboardComponents/SearchBar";
import RecentlyPlayed from "../_components/_dashboardComponents/RecentlyPlayed";
import Playlists from "../_components/_dashboardComponents/Playlists";
import Playbar from "../_components/_dashboardComponents/Playbar";
import Profile from "../_components/_dashboardComponents/Profile";

import Link from "next/link";

const page = () => {
    return (
        <div>
            <header>
                <SearchBar />
                <Profile />
            </header>
            <section>
                <RecentlyPlayed />
            </section>
            <section>
                <Playlists />
            </section>
            <section>
                <Playbar />
            </section>
        </div>
    );
};

export default page;
