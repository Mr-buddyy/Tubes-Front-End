import React from "react";
import Image from "next/image";

const Page = () => {
    return (
        <header>
            <div>
                <div className="flex flex-row justify-between px-20 py-5">
                    <Image src="/app/icon.png" width={122} height={211} />
                    <ul className="flex flex-row gap-10">
                        <li>
                            <a href="/">Beranda</a>{" "}
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
