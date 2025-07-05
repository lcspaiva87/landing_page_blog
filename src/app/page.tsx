import Footer from "@/components/footer/footer";
import { Header } from "./_components/header";
import { CardsCustom } from "@/components/cards-custom";
import home from "../../public/assets/feature.svg"
import heroImage from "../../public/assets/background-hero.png"
import { Clock, Store } from "lucide-react";

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
      <div className="flex  gap-10 px-52 justify-between items-center">
        <div className=" flex-col gap-10 flex w-[640px]">
          <h1 className="heading-hg text-white w-">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col gap-2">
            <span className="flex  text-white font-light  gap-2">
              <Clock className="w-5 h-5 text-cyan-100" />
              Crie o seu site em menos de 5 minutos
            </span>
            <span className="flex  text-white font-light gap-2">
              <Store className="w-5 h-5 text-cyan-100" />
              Acompanhe e otimize seu negócio online
            </span>
          </div>
        </div>
        <img src={heroImage.src} alt="hero" className="w-lg h-lg  border border-cyan-300 rounded-full" />


      </div>
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

      <Footer />

    </div>
  );
}
