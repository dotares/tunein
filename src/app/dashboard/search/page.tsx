"use client";

import React from "react";
import SearchResults from "../../_components/_searchComponents/SearchResults";
import { useSearchParams } from "next/navigation";

const page = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("r");

    return (
        <div>
            <SearchResults query={search} />
        </div>
    );
};

export default page;
