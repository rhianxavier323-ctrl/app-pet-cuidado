"use client";

import { Calendar, Plus, Syringe, Droplets, Scissors, TestTube, Stethoscope, ArrowLeft } from "lucide-react";
import { Pet, Reminder } from "../page";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type AgendaPageProps = {
  reminders: Reminder[];
  pets: Pet[];
  onAddReminder: (reminder: Omit<Reminder, "id">) => void;
};

const iconMap = {
  vaccine: Syringe,
  bath: Droplets,
  grooming: Scissors,
  exam: TestTube,
  appointment: Stethoscope,
  medication: Syringe,
};

export function AgendaPage({ reminders, pets, onAddReminder }: AgendaPageProps) {
  const [showAddForm, setShowAddForm] = useState(false);

  const sortedReminders = [...reminders].sort((a, b) => a.date.getTime() - b.date.getTime());

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Hoje";
    if (diffDays === 1) return "Amanhã";
    if (diffDays < 0) return `${Math.abs(diffDays)} dias atrás`;
    if (diffDays < 7) return `Em ${diffDays} dias`;
    return `Em ${Math.ceil(diffDays / 7)} semanas`;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-b-3xl shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Agenda Completa</h1>
          </div>
          <p className="text-white/90">
            Gerencie todos os compromissos dos seus pets
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {/* Botão Adicionar */}
        <Button
          onClick={() => setShowAddForm(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        >
          <Plus className="w-5 h-5 mr-2" />
          Criar Novo Lembrete
        </Button>

        {/* Lista de Lembretes */}
        <div className="space-y-3">
          {sortedReminders.map((reminder) => {
            const Icon = iconMap[reminder.type];
            const pet = pets.find(p => p.id === reminder.petId);
            
            return (
              <div
                key={reminder.id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg">{reminder.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {pet?.name} • {formatDate(reminder.date)}
                      {reminder.time && ` às ${reminder.time}`}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {getDaysUntil(reminder.date)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
