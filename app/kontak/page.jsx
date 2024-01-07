import React from "react";

function page() {
    return (
        <section className="p-20 ">
            <div id="contact" className="flex flex-col gap-5 text-center items-center">
                <div className="font-bold text-7xl">Kontak</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-center">
                    <div className="bg-white p-10 rounded-tl-3xl btn">
                        <div>icon</div>
                        <div>082220484108</div>
                    </div>
                    <div className="bg-white p-10 rounded-tl-3xl btn">
                        <div>icon</div>
                        <div>Jl DiPanjaitan</div>
                    </div>
                    <div className="bg-white p-10 rounded-tl-3xl btn">
                        <div>icon</div>
                        <div>20104045@ittelkom-pwt.ac.id</div>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-tl-3xl flex flex-col gap-5">
                    <div className="font-bold text-2xl">Form Kontak</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 sm:p-10 md:p-20">
                        <div className="col-span-1">
                            <label className="">Nama</label>
                            <div className="relative">
                                <input type="text" name="" id="" className="block border border-gray-300 rounded p-2" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="">Email</label>
                            <div className="relative">
                                <input type="text" name="" id="" className="block border border-gray-300 rounded p-2" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="">Pesan</label>
                            <div className="relative">
                                <textarea type="text" name="" id="" className="block border border-gray-300 w-full h-full rounded py-4" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <button className="bg-black text-white rounded py-5 h-full w-full">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* end kontak */}
        </section>
    );
}

export default page;
