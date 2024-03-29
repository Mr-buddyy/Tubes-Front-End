"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Filter from "../components/filter";

function truncateDescription(description, wordLimit) {
    const words = description.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
}

function filterAndSortData(data, selectedCategory, searchKeyword, sortOption, sortDirection) {
    let filteredData = [...data];

    if (selectedCategory && selectedCategory !== "allcategory") {
        filteredData = filteredData.filter((item) => item.kategori && item.kategori.nama && item.kategori.nama.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    if (searchKeyword) {
        filteredData = filteredData.filter((item) => item.judul.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    const sortOrder = sortDirection === "asc" ? 1 : -1;

    return filteredData.sort((a, b) => {
        if (sortOption === "judul") {
            return a.judul.localeCompare(b.judul) * sortOrder;
        } else if (sortOption === "tanggal") {
            return (new Date(a.tanggal) - new Date(b.tanggal)) * sortOrder;
        }

        // Default sorting by judul
        return a.judul.localeCompare(b.judul) * sortOrder;
    });
}

function Page() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [sortOption, setSortOption] = useState("judul");
    const [sortDirection, setSortDirection] = useState("asc");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("allcategory");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://stoik.my.id/backend/public/api/media", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        async function fetchCategories() {
            try {
                const response = await fetch("https://stoik.my.id/backend/public/api/kategori", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();
                setCategories(result);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredData(filterAndSortData(data, selectedCategory, searchKeyword, sortOption, sortDirection));
    }, [data, selectedCategory, searchKeyword, sortOption, sortDirection]);

    return (
        <section className="pt-28">
            <div className="p-20">
                {" "}
                <div className="font-bold text-7xl py-5">Edukasi</div>
                <Filter
                    searchKeyword={searchKeyword}
                    onFilterChange={(event) => setSearchKeyword(event.target.value)}
                    sortOption={sortOption}
                    onSortChange={(event) => {
                        const selectedSortOption = event.target.value;
                        const newSortDirection = selectedSortOption === sortOption ? (sortDirection === "asc" ? "desc" : "asc") : "asc";

                        setSortOption(selectedSortOption);
                        setSortDirection(newSortDirection);
                        setFilteredData(filterAndSortData(data, selectedCategory, searchKeyword, selectedSortOption, newSortDirection));
                    }}
                    sortDirection={sortDirection}
                    onToggleSortDirection={() => {
                        const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
                        setSortDirection(newSortDirection);
                        setFilteredData(filterAndSortData(data, selectedCategory, searchKeyword, sortOption, newSortDirection));
                    }}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(event) => {
                        const newSelectedCategory = event.target.value;
                        setSelectedCategory(newSelectedCategory);
                        setFilteredData(filterAndSortData(data, newSelectedCategory, searchKeyword, sortOption, sortDirection));
                    }}
                />
                <div className="py-10 grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
                    {filteredData && filteredData.length && filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-5 bg-white p-10 rounded-tl-3xl shadow-[0_10px_60px_-5px_rgba(0,92,230,0.76)">
                                <div className="font-bold">{item.judul}</div>
                                <img src={item.linkgambar} alt={`Image for ${item.judul}`} />
                                <div className="text-justify">{truncateDescription(item.deskripsi, 15)}</div>
                                <button className="btn color-primary py-2 px-5 rounded-md text-white">
                                    <Link href={`/detail/${item.id}`} className="">
                                        Detail
                                    </Link>
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center w-screen">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Page;
