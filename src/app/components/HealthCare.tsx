"use client";

import { Pill, Bug, Sparkles, Scale, ChevronRight } from "lucide-react";

const healthCategories = [
  {
    icon: Pill,
    label: "Medicamentos",
    description: "Controle e lembretes",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bug,
    label: "Vermífugos",
    description: "Histórico e ciclos",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    label: "Higiene",
    description: "Banho, tosa e cuidados",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Scale,
    label: "Controle de Peso",
    description: "Gráficos e alertas",
    color: "from-orange-500 to-red-500",
  },
];

export function HealthCare() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Cuidados do Pet</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {healthCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100 text-left"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900">{category.label}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
