"use client";
import React from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="border-b border-white/8"
      suppressHydrationWarning
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-light text-white/75 group-hover:text-white transition-colors pr-8 leading-relaxed">
          {question}
        </span>
        <span
          className={`text-white/30 group-hover:text-white/60 transition-all duration-300 flex-shrink-0 text-lg font-light ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{ transition: "transform 0.3s ease, color 0.2s ease" }}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 pb-6" : "max-h-0"
        }`}
        suppressHydrationWarning
      >
        <p className="text-sm font-light text-white/40 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function HomeFaqAccordion() {
  const items = [
    {
      question: "Où se situe votre conciergerie automobile ?",
      answer:
        "AM Motion Cars est basé à Paris et intervient dans toute l'Île-de-France. Nous assurons des transferts premium vers CDG, Orly, Le Bourget, les gares TGV et tous lieux de la capitale. Disponibilité 24h/24, 7j/7.",
    },
    {
      question: "Quels services proposez-vous à Paris ?",
      answer:
        "Transferts VIP avec chauffeur privé, location de véhicules de luxe, mise à disposition pour événements d'entreprise et mariages, navettes aéroport, et conciergerie automobile personnalisée 24h/24.",
    },
    {
      question: "Faites-vous des mariages ?",
      answer:
        "Oui. Nos packs Mariage incluent transferts des mariés, navettes invités et shootings photo à Paris et en Île-de-France. Un interlocuteur dédié du début à la fin.",
    },
    {
      question: "Combien de temps à l'avance faut-il réserver ?",
      answer:
        "Idéalement 7 à 10 jours avant l'événement. Les demandes urgentes sont traitées selon disponibilité — notre équipe reste réactive.",
    },
    {
      question: "Quels véhicules proposez-vous ?",
      answer:
        "Notre flotte se compose de véhicules d'exception alliant luxe, performance et confort, allant de berlines haut de gamme à des SUV et modèles sportifs prestigieux. Chaque véhicule est soigneusement entretenu et préparé pour offrir une expérience irréprochable à chaque prestation.",
    },
    
    
  ];

  return (
    <div className="border-t border-white/8" suppressHydrationWarning>
      {items.map((item) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}