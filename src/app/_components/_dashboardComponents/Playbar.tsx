"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Play from "../_globalComponents/Play";

const Playbar = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("l");

    return (
        <div>
            <div>
                <Link href={"/dashboard/search?r="}>Go back</Link>
                <div>{search ? <Play url={search} /> : null}</div>
            </div>
        </div>
    );
};

export default Playbar;
