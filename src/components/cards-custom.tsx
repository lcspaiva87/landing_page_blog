import { Badge } from "./ui/badge";
import { Card } from "./ui/card"

interface CardsCustomProps {
  title: string;
  badge: string;

}

export function CardsCustom({ title, badge }: CardsCustomProps) {
  return (
    <Card className="w-full h-full p-12 bg-gray-500 border-none">
      <div className="flex flex-col  gap-2">
        <Badge variant="outline" className="bg-blue-400 text-blue-200 border-none ">{badge}</Badge>
        <h2 className="font-bold heading-lg text-white">{title}</h2>
      </div>

    </Card >
  )
}