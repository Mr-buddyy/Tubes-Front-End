import React from "react";

function page() {
    return (
        <section className="p-20">
            <div id="about" className="flex flex-col gap-10 text-center">
                <div className="font-semibold text-5xl">Tentang Kami</div>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            {/* <div className="text-center">
                <div>Apa yang bisa kita Lakukan</div>
                <div>penjelasan apa yang bisa kita lakukan</div>
            </div> */}
        </section>
    );
}

export default page;
