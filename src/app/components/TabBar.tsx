"use client";

import { Home, Calendar, Plus, Heart, BookOpen } from "lucide-react";

type TabBarProps = {
  currentTab: "home" | "agenda" | "add" | "pets" | "learn";
  onTabChange: (tab: "home" | "agenda" | "add" | "pets" | "learn") => void;
};

export function TabBar({ currentTab, onTabChange }: TabBarProps) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "Início" },
    { id: "agenda" as const, icon: Calendar, label: "Agenda" },
    { id: "add" as const, icon: Plus, label: "Adicionar" },
    { id: "pets" as const, icon: Heart, label: "Meus Pets" },
    { id: "learn" as const, icon: BookOpen, label: "Aprender" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            const isAddButton = tab.id === "add";

            if (isAddButton) {
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className="relative -mt-6"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </button>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center gap-1 py-3 px-4 transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
