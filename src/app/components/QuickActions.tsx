"use client";

import { Droplets, Stethoscope, Video, TestTube, Syringe, Heart } from "lucide-react";

const services = [
  { icon: Droplets, label: "Banho & Tosa", color: "from-blue-400 to-cyan-500" },
  { icon: Stethoscope, label: "Veterinário", color: "from-green-400 to-emerald-500" },
  { icon: Video, label: "Televet", color: "from-purple-400 to-pink-500" },
  { icon: TestTube, label: "Exames", color: "from-orange-400 to-red-500" },
  { icon: Syringe, label: "Vacinação", color: "from-indigo-400 to-blue-500" },
  { icon: Heart, label: "Planos de Saúde", color: "from-rose-400 to-pink-500" },
];

export function QuickActions() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Serviços</h2>
      
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <button
              key={service.label}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                {service.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
