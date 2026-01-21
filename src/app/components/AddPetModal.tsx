"use client";

import { X, Upload, Camera, Image as ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pet } from "../page";

type AddPetModalProps = {
  onClose: () => void;
  onAdd: (pet: Omit<Pet, "id">) => void;
};

export function AddPetModal({ onClose, onAdd }: AddPetModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    weight: "",
    age: "",
    sex: "male" as "male" | "female",
    color: "",
    photo: "",
    history: "",
    allergies: "",
    medications: "",
    observations: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [activeSection, setActiveSection] = useState<"basic" | "health">("basic");

  const handlePhotoChange = (url: string) => {
    setFormData({ ...formData, photo: url });
    setPhotoPreview(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      weight: parseFloat(formData.weight),
      age: parseInt(formData.age),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header com gradiente */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Adicionar Novo Pet</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Tabs de navegação */}
        <div className="bg-gray-50 px-6 py-3 flex gap-2 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setActiveSection("basic")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === "basic"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Informações Básicas
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("health")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === "health"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Saúde & Comportamento
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="p-6 space-y-6">
            {activeSection === "basic" && (
              <>
                {/* Upload de Foto com Preview */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-900">
                    Foto do Pet
                  </label>
                  
                  {photoPreview ? (
                    <div className="relative group">
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-2xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoPreview("");
                          setFormData({ ...formData, photo: "" });
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-all bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="flex justify-center mb-3">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Adicione uma foto do seu pet
                      </p>
                      <input
                        type="text"
                        value={formData.photo}
                        onChange={(e) => handlePhotoChange(e.target.value)}
                        placeholder="Cole a URL da foto aqui"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Nome com ícone */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Nome do Pet *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Rex, Luna, Thor..."
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-base font-medium"
                    />
                  </div>
                </div>

                {/* Raça */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Raça *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    placeholder="Ex: Golden Retriever, Persa, SRD..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Peso e Idade em grid moderno */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Peso (kg) *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        required
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        placeholder="0.0"
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                        kg
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Idade (anos) *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="0"
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                        anos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sexo com cards interativos */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Sexo *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, sex: "male" })}
                      className={`relative py-4 rounded-xl border-2 font-semibold transition-all overflow-hidden ${
                        formData.sex === "male"
                          ? "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-lg scale-105"
                          : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {formData.sex === "male" && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      )}
                      🐕 Macho
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, sex: "female" })}
                      className={`relative py-4 rounded-xl border-2 font-semibold transition-all overflow-hidden ${
                        formData.sex === "female"
                          ? "border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 text-pink-700 shadow-lg scale-105"
                          : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {formData.sex === "female" && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      )}
                      🐈 Fêmea
                    </button>
                  </div>
                </div>

                {/* Cor */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Cor *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    placeholder="Ex: Dourado, Branco, Preto..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </>
            )}

            {activeSection === "health" && (
              <>
                {/* Histórico */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Histórico Médico
                  </label>
                  <textarea
                    value={formData.history}
                    onChange={(e) => setFormData({ ...formData, history: e.target.value })}
                    placeholder="Informações sobre cirurgias, tratamentos anteriores..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                </div>

                {/* Alergias */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Alergias
                  </label>
                  <input
                    type="text"
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    placeholder="Ex: Frango, pólen, medicamentos..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Medicamentos */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Medicamentos em Uso
                  </label>
                  <input
                    type="text"
                    value={formData.medications}
                    onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                    placeholder="Ex: Antibiótico, vitaminas, suplementos..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Comportamento & Observações
                  </label>
                  <textarea
                    value={formData.observations}
                    onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                    placeholder="Ex: Muito ativo, gosta de brincar, sociável com outros pets..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Botões fixos no rodapé */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              ✨ Adicionar Pet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
