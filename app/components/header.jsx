"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = () => {
    const pathname = useRouter?.pathname;

    return (
        <header className="bg-white w-full fixed z-50 drop-shadow max-w-screen">
            <div className="flex flex-row justify-between px-20 py-5 ">
                <Image src="/app/stoik2.png" width={70} height={70} />
                <ul className="flex flex-row gap-10">
                    <li className="flex flex-col justify-center">
                        <a href="/" className={pathname === "/" ? "text-bold" : ""}>
                            Beranda
                        </a>
                    </li>
                    <li className="flex flex-col justify-center">
                        <a href="/edukasi">Edukasi</a>
                    </li>
                    <li className="flex flex-col justify-center">
                        <a href="/tentang">Tentang</a>
                    </li>
                    <li className="flex flex-col justify-center">
                        <a href="/kontak">Kontak</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Page;
