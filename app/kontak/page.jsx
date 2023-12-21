import React from "react";

function page() {
    return (
        <section className="p-20 ">
            {" "}
            <div id="contact" className="flex flex-col gap-5 text-center items-center ">
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
        </section>
    );
}

export default page;
