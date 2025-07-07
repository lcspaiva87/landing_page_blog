import heroImage from "../../../public/assets/background-hero.png"
import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="flex  gap-10 px-52 justify-between items-center">
      <div className=" flex-col gap-10 flex w-[640px]">
        <h1 className="heading-hg text-white w-">
          Venda seus produtos como afiliado em um único lugar
        </h1>
        <div className="flex flex-col gap-2">
          <span className="flex  text-gray-200 font-light  gap-2">
            <Clock className="w-5 h-5 text-cyan-100" />
            Crie o seu site em menos de 5 minutos
          </span>
          <span className="flex  text-gray-200 font-light gap-2">
            <Store className="w-5 h-5 text-cyan-100" />
            Acompanhe e otimize seu negócio online
          </span>
        </div>
        <div className="flex flex-col gap-2 ">
          <Button
            className="bg-blue-300 w-48 ">
            Criar loja grátis
            <ArrowRight className="w-4 h-4" />
          </Button>
          <span className="text-gray-300  text-[12px] font-bold">
            Não precisa de cartão de crédito
          </span>
        </div>
      </div>
      <img src={heroImage.src} alt="hero" className="w-lg h-lg  border border-cyan-300 rounded-full" />


    </div>
  )

}