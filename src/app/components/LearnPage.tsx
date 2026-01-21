"use client";

import { BookOpen, Heart, Utensils, Stethoscope, Pill, Sparkles, Bone, Dog, Cat, Brain } from "lucide-react";

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  articles: number;
};

export function LearnPage() {
  const categories: Category[] = [
    {
      id: "behavior",
      title: "Comportamento & Adestramento",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      articles: 12,
    },
    {
      id: "nutrition",
      title: "Alimentação Correta",
      icon: <Utensils className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      articles: 15,
    },
    {
      id: "firstaid",
      title: "Primeiros Socorros",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-red-500 to-pink-600",
      articles: 8,
    },
    {
      id: "medications",
      title: "Medicamentos",
      icon: <Pill className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      articles: 10,
    },
    {
      id: "hygiene",
      title: "Higiene Ideal",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      articles: 9,
    },
    {
      id: "dental",
      title: "Cuidados Dentários",
      icon: <Bone className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      articles: 6,
    },
    {
      id: "anxiety",
      title: "Ansiedade & Estresse",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      articles: 11,
    },
    {
      id: "cats",
      title: "Cuidados com Gatos",
      icon: <Cat className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      articles: 14,
    },
    {
      id: "dogs",
      title: "Cuidados por Raça",
      icon: <Dog className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      articles: 18,
    },
  ];

  const featuredArticles = [
    {
      id: "1",
      title: "Como ensinar comandos básicos ao seu cão",
      category: "Comportamento",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    },
    {
      id: "2",
      title: "Alimentação balanceada: o que seu pet precisa",
      category: "Alimentação",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Primeiros socorros: o que fazer em emergências",
      category: "Saúde",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-2xl sm:text-3xl font-bold">Aprenda a Cuidar</h1>
          </div>
          <p className="text-blue-100 text-sm sm:text-base">
            Conteúdo educacional para você cuidar melhor do seu pet
          </p>
        </div>
      </div>

      <main className="px-4 py-6 space-y-8 max-w-7xl mx-auto">
        {/* Featured Articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">📚 Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-blue-600 mb-2">
                    {article.category}
                  </div>
                  <h3 className="font-bold text-gray-800 line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Grid */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Categorias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.articles} artigos disponíveis
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Dicas Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Hidratação é essencial
                  </h3>
                  <p className="text-sm text-gray-700">
                    Troque a água do seu pet pelo menos 2 vezes ao dia e mantenha o recipiente sempre limpo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Exercícios diários
                  </h3>
                  <p className="text-sm text-gray-700">
                    Cães precisam de pelo menos 30 minutos de atividade física por dia para manter a saúde.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Escovação regular
                  </h3>
                  <p className="text-sm text-gray-700">
                    Escove os dentes do seu pet 2-3 vezes por semana para prevenir doenças periodontais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Vacinas em dia
                  </h3>
                  <p className="text-sm text-gray-700">
                    Mantenha o calendário de vacinação atualizado para proteger seu pet de doenças graves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
