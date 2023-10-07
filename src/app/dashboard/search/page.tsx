"use client";

import React from "react";
import SearchResults from "../../_components/_searchComponents/SearchResults";
import SearchBar from "../../_components/_dashboardComponents/SearchBar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Playbar from "@/app/_components/_dashboardComponents/Playbar";

const page = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("r");

    return (
        <div>
            <div>
                <Link href={"/dashboard"}>Go Back</Link>
                <SearchBar />
            </div>
            <div>
                {!search ? "Enter a tune" : <SearchResults query={search} />}
            </div>
            <div>
                <Playbar />
            </div>
        </div>
    );
};

export default page;
