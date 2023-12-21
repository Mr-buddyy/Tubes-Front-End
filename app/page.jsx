'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://63577a3f9243cf412f9942de.mockapi.io/edukasi", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                const data = await response.json();
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    // useEffect(()=> {
    //     console.log(data)
    // },[data])

    function truncateDescription(description, wordLimit) {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    }

    return (
        <section>
            <div id="hero" className="grid grid-cols-2 gap-5 p-20">
                <div className="flex flex-col gap-20 justify-center">
                    <div className="font-semibold text-5xl">
                        {" "}
                        Platform Edukasi <br />
                        Terhadap Penyakit
                    </div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </div>
                    <div>
                        {" "}
                        <button className="bg-black p-5 rounded-md text-white">Pelajari Selengkapnya</button>
                    </div>
                </div>

                <div className="relative max-w-xs mb-12">
                    <img src="/app/hero2.png" alt="" className="w-full h-full" />
                    <img src="/app/hero2.png" alt="" className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-44 max-w-full" />
                </div>
            </div>
            <div className="bg-white p-20">
                <div id="about" className="flex flex-col gap-10 text-center">
                    <div className="font-semibold text-5xl">Tentang Kami</div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>

            <div id="edukasi" className="flex flex-col gap-5 p-20">
                <div className="flex flex-row justify-between">
                    <div className="font-semibold text-5xl">Edukasi</div>
                    <div>Lihat Semua</div>
                </div>
                {/* card */}
                <div className="py-10 grid grid-cols-3 gap-5">
                    {data.length < 1 ? (

                        <div class="flex items-center justify-center w-screen">
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>

                    ) : (
                        data.map((item, index) => (
                            <div key={index} className=" flex flex-col gap-5 bg-black p-10 rounded-tl-3xl text-white">
                                <img src=""></img>
                                <div className="font-bold">{item.judul}</div>
                                <div className="text-justify">
                                    {truncateDescription(item.deskripsi, 15)}

                                </div>
                                <div className="">
                                <Link href={`/detail/${item.id}`} className="bg-white py-2 px-5 rounded-xl text-black">Detail</Link>
                                </div>
                            </div>
                        ))
                    )}
                    { }
                </div>
                {/* end */}
            </div>
            {/* kontak */}
            <div id="contact" className="flex flex-col gap-5 text-center items-center p-20 bg-white">
                <div className="font-semibold text-5xl">Kontak</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </div>
                <div className="grid grid-cols-3 gap-5 text-center">
                    <div className="bg-black text-white p-10 rounded-tl-3xl">
                        <div>icon</div>
                        <div>082220484108</div>
                    </div>
                    <div className="bg-black text-white p-10 rounded-tl-3xl">
                        <div>icon</div>
                        <div>Jl DiPanjaitan</div>
                    </div>
                    <div className="bg-black text-white p-10 rounded-tl-3xl">
                        <div>icon</div>
                        <div>20104045@ittelkom-pwt.ac.id</div>
                    </div>
                </div>
                <div className="bg-black text-white p-10 rounded-tl-3xl flex flex-col gap-5">
                    <div className="font-semibold text-2xl">Form Kontak</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 p-20">
                        {" "}
                        <div className="col-span-1">
                            <label className="">Nama</label>
                            <div className="relative">
                                {" "}
                                <input type="text" name="" id="" className="rounded p-2" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Email</label>
                            <div className="relative">
                                {" "}
                                <input type="text" name="" id="" className="rounded p-2" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="">Pesan</label>
                            <div className="relative">
                                <textarea type="text" name="" id="" className="block w-full h-full rounded py-4" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <button className="bg-gray-700 rounded py-5 h-full w-full"> Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* end kontak */}
        </section>
    );
};

export default Page;
