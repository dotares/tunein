"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const SearchBar = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const searchBarRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input
                ref={searchBarRef}
                onChange={() => {
                    setValue(searchBarRef?.current?.value);
                }}
                type="text"
            />
            <Link href={`/dashboard/search?r=${value}`}>Go</Link>
        </div>
    );
};

export default SearchBar;
