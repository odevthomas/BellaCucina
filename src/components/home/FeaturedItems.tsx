import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}

interface FeaturedItemsProps {
  items?: FeaturedItem[];
  title?: string;
  subtitle?: string;
}

const FeaturedItems = ({
  items = [
    {
      id: "1",
      name: "Pizza Especial",
      description:
        "Nossa famosa pizza assada em forno a lenha com mussarela fresca, manjericão e tomates San Marzano",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
      price: 59.9,
      rating: 4.9,
      category: "Pizza",
    },
    {
      id: "2",
      name: "Massa com Trufas",
      description:
        "Fettuccine artesanal com molho cremoso de trufas negras e parmesão envelhecido",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
      price: 72.9,
      rating: 4.8,
      category: "Massa",
    },
    {
      id: "3",
      name: "Hambúrguer Wagyu",
      description:
        "Hambúrguer premium de carne Wagyu com cebolas caramelizadas, queijo cheddar envelhecido e molho da casa",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      price: 64.9,
      rating: 4.7,
      category: "Prato Principal",
    },
    {
      id: "4",
      name: "Paella de Frutos do Mar",
      description:
        "Tradicional prato espanhol de arroz com frutos do mar frescos, açafrão e legumes da estação",
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80",
      price: 89.9,
      rating: 4.8,
      category: "Especiais",
    },
    {
      id: "5",
      name: "Bolo de Chocolate Vulcão",
      description:
        "Bolo de chocolate quente com centro derretido, servido com sorvete de baunilha",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
      price: 32.9,
      rating: 4.9,
      category: "Sobremesa",
    },
  ],
  title = "Pratos em Destaque",
  subtitle = "Seleção especial do chef com os pratos que nossos clientes adoram",
}: FeaturedItemsProps) => {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="border overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                        {item.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <span className="font-bold text-lg">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">
                            {item.rating}
                          </span>
                        </div>
                        <Button size="sm" className="text-sm">
                          Pedir Agora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-white" />
            <CarouselNext className="-right-4 bg-white" />
          </Carousel>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" className="mt-4">
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
