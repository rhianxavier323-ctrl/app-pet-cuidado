"use client";

import { BookOpen, Dog, Cat, Utensils, Heart, Syringe, Sparkles, Smile, ChevronRight } from "lucide-react";

const learningCategories = [
  { icon: Dog, label: "Comportamento & Adestramento", color: "from-blue-500 to-cyan-500" },
  { icon: Utensils, label: "Alimentação Correta", color: "from-green-500 to-emerald-500" },
  { icon: Heart, label: "Primeiros Socorros", color: "from-red-500 to-rose-500" },
  { icon: Syringe, label: "Medicamentos", color: "from-purple-500 to-pink-500" },
  { icon: Sparkles, label: "Higiene Ideal", color: "from-cyan-500 to-blue-500" },
  { icon: Smile, label: "Cuidados Dentários", color: "from-orange-500 to-amber-500" },
];

export function EducationalContent() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold text-gray-900">Aprenda a Cuidar do Seu Pet</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {learningCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
