import React from "react";

function footer() {
    const text = {
        padding: "10px",
    };
    return (
        <footer>
            <div className="w-full p-20">
                <div className="grid grid-cols-6 gap-10 w-full h-full">
                    <div className="col-span-2 text-sm">
                        <div className="font-bold">Sipenyakit</div>
                        <div>Sipenyakit adalah website untuk mengedukasi masyarakat tentang bahayanya penyakit</div>
                    </div>
                    <div className="text-footer">
                        <div className="font-bold">Quick Link</div>
                        <a href="/">Beranda</a>
                        <a href="/edukasi">Edukasi</a>
                        <a href="/tentang">Tentang</a>
                        <a href="/kontak">Kontak</a>
                    </div>
                    <div className="text-footer">
                        <div className="font-bold">Media Sosial</div>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>
                    <div className="text-footer col-span-2">
                        <div className="font-bold">Kontak</div>
                        <div>082220484108</div>
                        <div>20104041@ittelkom-pwt.ac.id</div>
                        <div>Jl.Di Panjaitan</div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="text-sm">@2024. copyright</div>
            </div>
        </footer>
    );
}

export default footer;
