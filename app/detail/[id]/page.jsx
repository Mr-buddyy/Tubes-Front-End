'use client'

import { useParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';

function Page() {
    const params = useParams();
    const id = params.id;
    console.log(id)

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://stoik.my.id/backend/public/api/detail/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                console.log(data)
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <div className="p-8">
            {data ? (
                <div className="grid grid-cols-2 gap-8">
                    <div className="">
                        <img
                            src={data.gambar}
                            className="w-full h-full object-cover"
                            alt={data.title || 'Image Alt Text'}
                        />
                    </div>
                    <div className="bg-white p-8">
                        <h2 className="text-2xl font-bold mb-4">{data.judul || 'Title Placeholder'}</h2>
                        <p className="text-black text-justify">
                            {data.deskripsi || 'Loading...'}
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
}

export default Page;
