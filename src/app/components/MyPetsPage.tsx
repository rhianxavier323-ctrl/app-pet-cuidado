"use client";

import { Heart, Edit, Trash2, AlertCircle } from "lucide-react";
import { Pet } from "../page";
import { Button } from "@/components/ui/button";

type MyPetsPageProps = {
  pets: Pet[];
  setPets: (pets: Pet[]) => void;
};

export function MyPetsPage({ pets, setPets }: MyPetsPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-b-3xl shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Meus Pets</h1>
          </div>
          <p className="text-white/90">
            Gerencie as informações dos seus pets
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Foto */}
              <div className="relative w-full sm:w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex-shrink-0">
                {pet.photo ? (
                  <img
                    src={pet.photo}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {pet.sex === "male" ? "🐕" : "🐈"}
                  </div>
                )}
                
                {/* Indicador de Alertas */}
                {(pet.alerts?.vaccineOverdue || pet.alerts?.bathScheduled || pet.alerts?.medicationDue || pet.alerts?.weightIssue) && (
                  <div className="absolute top-3 right-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{pet.name}</h2>
                    <p className="text-gray-600">{pet.breed}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Peso</p>
                    <p className="font-semibold text-gray-900">{pet.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Idade</p>
                    <p className="font-semibold text-gray-900">{pet.age} anos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sexo</p>
                    <p className="font-semibold text-gray-900">
                      {pet.sex === "male" ? "Macho" : "Fêmea"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cor</p>
                    <p className="font-semibold text-gray-900">{pet.color}</p>
                  </div>
                </div>

                {/* Alertas */}
                {(pet.alerts?.vaccineOverdue || pet.alerts?.bathScheduled || pet.alerts?.medicationDue || pet.alerts?.weightIssue) && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700">Alertas:</p>
                    {pet.alerts?.vaccineOverdue && (
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Vacina atrasada
                      </div>
                    )}
                    {pet.alerts?.bathScheduled && (
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Banho agendado
                      </div>
                    )}
                    {pet.alerts?.medicationDue && (
                      <div className="flex items-center gap-2 text-sm text-orange-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Medicamento próximo
                      </div>
                    )}
                    {pet.alerts?.weightIssue && (
                      <div className="flex items-center gap-2 text-sm text-yellow-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        Peso {pet.alerts.weightIssue === "above" ? "acima" : "abaixo"} do ideal
                      </div>
                    )}
                  </div>
                )}

                {/* Informações Adicionais */}
                {(pet.allergies || pet.medications || pet.observations) && (
                  <div className="space-y-3 pt-4 border-t border-gray-200 mt-4">
                    {pet.allergies && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Alergias:</p>
                        <p className="text-sm text-gray-600">{pet.allergies}</p>
                      </div>
                    )}
                    {pet.medications && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Medicamentos:</p>
                        <p className="text-sm text-gray-600">{pet.medications}</p>
                      </div>
                    )}
                    {pet.observations && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Observações:</p>
                        <p className="text-sm text-gray-600">{pet.observations}</p>
                      </div>
                    )}
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
