"use client"

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation"

const contact = () => {
    const router = useRouter();
    return (
        <div>
        <h1> About College Page </h1>
        <Link href="/"> Go to Home Page </Link>
        <br />
        <button onClick={()=>router.push("/")}> Go to Home Page Button </button>
        </div>
    )
}

export default contact