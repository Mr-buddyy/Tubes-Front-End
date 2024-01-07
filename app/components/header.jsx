"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = () => {
    const pathname = useRouter?.pathname;

    return (
        <header>
            <div>
                <div className="flex flex-row justify-between px-20 py-5">
                    <Image src="/app/icon.png" width={122} height={211} />
                    <ul className="flex flex-row gap-10">
                        <li>
                            <a href="/" className={pathname === "/" ? "text-bold" : ""}>
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a href="/edukasi">Edukasi</a>
                        </li>
                        <li>
                            <a href="/tentang">Tentang</a>
                        </li>
                        <li>
                            <a href="/kontak">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Page;
