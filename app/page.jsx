import React from "react";

const Page = () => {
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
                    <div className=" flex flex-col gap-5 bg-black p-10 rounded-tl-3xl text-white">
                        <img src=""></img>
                        <div className="font-bold">judul</div>
                        <div>deskripsi</div>
                        <div className="">
                            <button className="bg-white py-2 px-5 rounded-xl text-black">detail</button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 bg-black p-10 rounded-tl-3xl text-white">
                        <img src=""></img>
                        <div className="font-bold">judul</div>
                        <div>deskripsi</div>
                        <div className="">
                            <button className="bg-white py-2 px-5 rounded-xl text-black">detail</button>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 bg-black p-10 rounded-tl-3xl text-white">
                        <img src=""></img>
                        <div className="font-bold">judul</div>
                        <div>deskripsi</div>
                        <div className="">
                            <button className="bg-white py-2 px-5 rounded-xl text-black">detail</button>
                        </div>
                    </div>
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
