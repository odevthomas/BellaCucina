import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Star } from "lucide-react";
import AddToCartModal from "./AddToCartModal";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

const MenuItem = ({
  id,
  name,
  description,
  price = 0, // Default value to prevent undefined price
  image,
  category,
  rating = Math.random() * (5 - 4) + 4, // Random rating between 4 and 5 if not provided
}: MenuItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card
        className="w-full max-w-[350px] h-[400px] overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-md transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            {category}
          </div>
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <CardContent className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <span className="font-bold text-green-600">
              R$ {price.toFixed(2)}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
            {description}
          </p>
          <Button
            className={`w-full mt-auto gap-2 transition-all duration-300 ${isHovered ? "bg-green-600 hover:bg-green-700" : ""}`}
            onClick={() => setIsModalOpen(true)}
          >
            <PlusCircle size={16} />
            Adicionar ao Pedido
          </Button>
        </CardContent>
      </Card>

      <AddToCartModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        item={{ id, name, description, price, image, category }}
      />
    </>
  );
};

export default MenuItem;
