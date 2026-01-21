"use client";

import { Calendar, Plus, Syringe, Droplets, Scissors, TestTube, Stethoscope } from "lucide-react";
import { Pet, Reminder } from "../page";
import { Button } from "@/components/ui/button";

type AgendaCardProps = {
  reminders: Reminder[];
  pets: Pet[];
};

const iconMap = {
  vaccine: Syringe,
  bath: Droplets,
  grooming: Scissors,
  exam: TestTube,
  appointment: Stethoscope,
  medication: Syringe,
};

export function AgendaCard({ reminders, pets }: AgendaCardProps) {
  const sortedReminders = [...reminders]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Hoje";
    if (diffDays === 1) return "Amanhã";
    if (diffDays < 7) return `${diffDays} dias`;
    return `${Math.ceil(diffDays / 7)} semanas`;
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          <h2 className="text-xl font-bold">Agenda do Pet</h2>
        </div>
        <Button 
          size="sm" 
          className="bg-white text-blue-600 hover:bg-blue-50"
        >
          <Plus className="w-4 h-4 mr-1" />
          Criar
        </Button>
      </div>

      {/* Lembretes */}
      <div className="space-y-3">
        {sortedReminders.map((reminder) => {
          const Icon = iconMap[reminder.type];
          const pet = pets.find(p => p.id === reminder.petId);
          
          return (
            <div
              key={reminder.id}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white">{reminder.title}</h3>
                  <p className="text-sm text-white/80">
                    {pet?.name} • {getDaysUntil(reminder.date)}
                    {reminder.time && ` às ${reminder.time}`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Botão Ver Agenda Completa */}
      <Button 
        className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold"
      >
        Ver Agenda Completa
      </Button>
    </div>
  );
}
