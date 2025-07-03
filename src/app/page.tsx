import Footer from "@/components/footer/footer";

import { Header } from "./_components/header";
import { CardsCustom } from "@/components/cards-custom";

export default function Home() {
  const cards = [
    {
      title: "Crie um catálogo de produtos online em poucos minutos",
      badge: "simples",
    },
    {
      title: "Venda para seu público através de uma plataforma única",
      badge: "prático",
    },
    {
      title: "Tenha uma loja online personalizada com a cara da sua marca",
      badge: "personalizável",
    },
  ]
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <div className="grid grid-cols-2 gap-6 px-52">
        {cards.map((card) => (
          <CardsCustom key={card.title} title={card.title} badge={card.badge} />
        ))}
      </div>

      <Footer />

    </div>
  );
}
