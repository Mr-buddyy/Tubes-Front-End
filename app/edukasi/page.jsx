import React from "react";

function page() {
    return (
        <section className="p-20">
            <div className="font-semibold text-5xl">Edukasi</div>
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
                </div>{" "}
                <div className=" flex flex-col gap-5 bg-black p-10 rounded-tl-3xl text-white">
                    <img src=""></img>
                    <div className="font-bold">judul</div>
                    <div>deskripsi</div>
                    <div className="">
                        <button className="bg-white py-2 px-5 rounded-xl text-black">detail</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;
