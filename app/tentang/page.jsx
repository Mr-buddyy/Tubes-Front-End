import React from "react";

function page() {
    return (
        <section className="p-20">
            <div id="about" className="px-20 flex flex-col gap-10 text-center">
                <div className="font-bold text-7xl">Tentang Kami</div>
                <div>
                Stoik sebuah platform yang berkomitmen untuk menyediakan sumber daya, dukungan, dan inspirasi bagi kesehatan mental Anda. Bersama-sama, kita membangun lingkungan yang mendukung pertumbuhan emosional dan kesejahteraan.
                </div>
            </div>
            <div className="">
                <div className="font-bold text-7xl py-20 text-center">Apa Yang Bisa Kami Lakukan ?</div>
                <div className="px-20 grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="https://cdn-icons-png.flaticon.com/512/4310/4310266.png"></img>
                        <div className="font-bold">Edukasi</div>
                        <div className="">Temukan wawasan mendalam tentang berbagai penyakit mental di sini.</div>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="https://merdekadarikekerasan.kemdikbud.go.id/ppks/wp-content/uploads/2021/01/Icon-3-3.png"></img>
                        <div className="font-bold">Mengenal Penyakit</div>
                        <div className="text-justify">Informasi mendetail mengenai penyakit-penyakit kesehatan mental.</div>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                        <img src="https://cdn-icons-png.flaticon.com/512/3475/3475897.png"></img>
                        <div className="font-bold">Kontak</div>
                        <div className="text-justify">Terhubung dengan psikolog untuk melakukan diagnosis dan konsultasi secara langsung.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;
