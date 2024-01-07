import React from "react";

function page() {
    return (
        <section className="p-20">
            <div id="about" className="px-20 flex flex-col gap-10 text-center">
                <div className="font-bold text-7xl">Tentang Kami</div>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div className="">
                <div className="font-bold text-7xl py-20 text-center">Apa Yang Bisa Kami Lakukan ?</div>
                <div className="px-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="/app/icon.png"></img>
                        <div className="font-bold">Edukasi</div>
                        <div className="">Website ini mengedukasi tentang berbagai penyakit</div>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="/app/icon.png"></img>
                        <div className="font-bold">Mengenal Penyakit</div>
                        <div className="text-justify">sad</div>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="/app/icon.png"></img>
                        <div className="font-bold">Kontak</div>
                        <div className="text-justify">Memungkinkan pengguna untuk mengirim pesan kepada vendor terkait keluh kesah tentang penggunaan website</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;
