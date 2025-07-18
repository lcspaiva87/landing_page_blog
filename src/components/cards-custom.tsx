import { ArrowRightIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card"

interface CardsCustomProps {
  title: string;
  badge: string;
  align: "flex-row" | "flex-col";
  image?: string;
  button?: string;
  className?: string;
}

export function CardsCustom({ title, badge, align, image, button, className }: CardsCustomProps) {
  return (
    <Card className={` h-full p-12 bg-gray-500 border-none ${className ?? ""}`}>
      <div className={`flex ${align} gap-32 w-80`}>
        <div className=" gap-4 flex flex-col">
          <Badge variant="outline" className="bg-blue-400 text-blue-200 border-none ">{badge}</Badge>
          <h2 className="font-bold heading-lg text-white">{title}</h2>
        </div>
        {button && (
          <Button className="flex items-center justify-center">
            {button}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      {image && (
        <div className="flex flex-row  items-stretch justify-center">
          <div className="flex flex-col justify-between">
            <img src={image} alt="imagem 1" width={440} height={327} />

          </div>

        </div>
      )}
    </Card >
  )
}