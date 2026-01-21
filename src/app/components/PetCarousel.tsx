"use client";

import { Plus, AlertCircle } from "lucide-react";
import { Pet } from "../page";
import { Button } from "@/components/ui/button";

type PetCarouselProps = {
  pets: Pet[];
  onAddPet: () => void;
};

export function PetCarousel({ pets, onAddPet }: PetCarouselProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-900">Meus Pets</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {/* Botão Adicionar Pet */}
        <button
          onClick={onAddPet}
          className="flex-shrink-0 w-32 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center gap-2 text-white hover:shadow-xl transition-all hover:scale-105"
        >
          <Plus className="w-8 h-8" />
          <span className="text-sm font-medium">Adicionar Pet</span>
        </button>

        {/* Cards dos Pets */}
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="flex-shrink-0 w-32 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
          >
            {/* Foto do Pet */}
            <div className="relative h-24 bg-gradient-to-br from-blue-100 to-purple-100">
              {pet.photo ? (
                <img
                  src={pet.photo}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  {pet.sex === "male" ? "🐕" : "🐈"}
                </div>
              )}
              
              {/* Indicador de Alertas */}
              {(pet.alerts?.vaccineOverdue || pet.alerts?.bathScheduled || pet.alerts?.medicationDue || pet.alerts?.weightIssue) && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>

            {/* Info do Pet */}
            <div className="p-3">
              <h3 className="font-bold text-gray-900 text-sm truncate">{pet.name}</h3>
              <p className="text-xs text-gray-600 truncate">{pet.breed}</p>
              
              {/* Alertas */}
              <div className="mt-2 space-y-1">
                {pet.alerts?.vaccineOverdue && (
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-red-600">Vacina atrasada</span>
                  </div>
                )}
                {pet.alerts?.bathScheduled && (
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-blue-600">Banho agendado</span>
                  </div>
                )}
                {pet.alerts?.medicationDue && (
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-orange-600">Medicamento</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
