"use client";

import { Heart, Calendar, BookOpen, PawPrint, ArrowRight, ShoppingCart } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Gerencie seus Pets",
      description: "Cadastre todos os seus pets com informações completas: fotos, peso, idade, histórico médico e muito mais.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agenda Inteligente",
      description: "Nunca mais esqueça vacinas, banhos ou consultas. Receba lembretes automáticos de todos os cuidados.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Saúde em Dia",
      description: "Acompanhe o peso ideal, medicações e alertas importantes sobre a saúde dos seus pets.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Aprenda a Cuidar",
      description: "Acesse conteúdo educacional sobre comportamento, alimentação, primeiros socorros e muito mais.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleCheckout = () => {
    window.location.href = "https://checkout.keoto.com/652047f7-7e3a-4677-8eed-c0f9d627b468";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-8 sm:py-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <PawPrint className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Bem-vindo ao PetCare
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Tudo que você precisa para cuidar dos seus pets em um só lugar
          </p>
        </div>

        {/* Features Grid */}
        <div className="px-6 sm:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center space-y-4">
            {/* Checkout Button */}
            <div className="pt-6 border-t-2 border-gray-100">
              <p className="text-gray-700 font-semibold text-lg mb-4">
                Quer acesso premium com recursos exclusivos?
              </p>
              <button
                onClick={handleCheckout}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
              >
                <ShoppingCart className="w-5 h-5" />
                Assinar Plano Premium
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-gray-500 text-sm mt-3">
                Desbloqueie funcionalidades avançadas e suporte prioritário
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
