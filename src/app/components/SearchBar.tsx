"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const suggestions = ["Vacinas", "Banho & Tosa", "Medicamentos", "Adestramento"];

  return (
    <div className="w-full">
      {/* Barra de Pesquisa */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar ração, serviços, medicamentos, dicas…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white shadow-sm"
        />
      </div>

      {/* Sugestões Rápidas */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all whitespace-nowrap shadow-sm"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
