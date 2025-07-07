import Footer from "@/components/footer/footer";
import { Header } from "./_components/header";
import { CardsCustom } from "@/components/cards-custom";
import home from "../../public/assets/feature.svg"
import { HeroSection } from "./_components/HeroSection";
import { SupportSection } from "./_components/SupportSection";
import { CustomerStorySection } from "./_components/CustomerStorySection ";

export default function Home() {
  const cards: {
    title: string;
    badge: string;
    align: "flex-col" | "flex-row";
    image?: string;
    button?: string;
  }[] = [
      {
        title: "Crie um catálogo de produtos online em poucos minutos",
        badge: "simples",
        align: "flex-col",
      },
      {
        title: "Venda para seu público através de uma plataforma única",
        badge: "prático",
        align: "flex-col",

      },
      {
        title: "Tenha uma loja online personalizada com a cara da sua marca",
        badge: "personalizável",
        align: "flex-col",
        button: "Criar loja grátis",
        image: home.src,
      },
    ]
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <HeroSection />
      <div className="grid grid-cols-2 gap-6 px-52 w-full">
        {cards.map((card, idx) => (
          <CardsCustom
            key={card.title}
            title={card.title}
            badge={card.badge}
            align={card.align}
            image={card.image}
            button={card.button}
            className={idx === 2 ? "col-span-2 flex flex-row gap-2 justify-between" : ""}
          />
        ))}
      </div>
      <SupportSection />
      <CustomerStorySection />
      <Footer />

    </div>
  );
}
