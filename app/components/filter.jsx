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
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sort by:
                <select value={sortOption} onChange={onSortChange} className="p-2 border border-gray-300 rounded-md">
                    <option value="judul">Judul</option>
                    <option value="tanggal">Tanggal</option>
                    {/* Tambahkan opsi pengurutan lain sesuai kebutuhan */}
                </select>
                <button onClick={onToggleSortDirection} className="p-2 border border-gray-300 rounded-md">
                    {sortDirection === "asc" ? "Ascending" : "Descending"}
                </button>
            </label>
        </div>
    );
}

export default Filter;
