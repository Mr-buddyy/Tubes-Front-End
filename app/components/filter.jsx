// Filter.js
import React from "react";

function Filter({ searchKeyword, onFilterChange, sortOption, onSortChange, sortDirection, onToggleSortDirection, categories, selectedCategory, onCategoryChange }) {
    return (
        <div className="flex gap-2">
            <label>
                Filter by Title:
                <input type="text" placeholder="Cari judul..." value={searchKeyword} onChange={onFilterChange} className="p-2 border border-gray-300 rounded-md" />
            </label>
            <label>
                Filter by Category:
                <select value={selectedCategory} onChange={onCategoryChange} className="p-2 border border-gray-300 rounded-md">
                    <option value="allcategory">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.nama}>
                            {category.nama}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sort by:
                {/* <select value={sortOption} onChange={onSortChange} className="p-2 border border-gray-300 rounded-md">
                    <option value="judul">Judul</option>
                    <option value="tanggal">Tanggal</option>
                    Add other sorting options as needed 
                </select> */}
                <button onClick={onToggleSortDirection} className="p-2 border border-gray-300 rounded-md">
                    {sortDirection === "asc" ? "Ascending" : "Descending"}
                </button>
            </label>
        </div>
    );
}

export default Filter;
