"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Play from "../../_components/_globalComponents/Play";

const page = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("l");

    return (
        <div>
            <Link href={"/dashboard/search?r="}>Go back</Link>
            <div>{search ? <Play url={search} /> : null}</div>
        </div>
    );
};

export default page;
