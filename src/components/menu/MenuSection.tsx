import React, { useState, useEffect } from "react";
import { QrCode, Search, Filter, PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCategoryFilter from "./MenuCategoryFilter";
import MenuItem from "./MenuItem";
import AddToCartModal from "./AddToCartModal";

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface MenuSectionProps {
  items?: MenuItemType[];
  title?: string;
  description?: string;
  showQrCode?: boolean;
}

const MenuSection = ({
  items = [
    {
      id: "1",
      name: "Pizza Margherita",
      description:
        "Pizza clássica italiana com molho de tomate caseiro, queijo mussarela de búfala importada, manjericão fresco orgânico, sal marinho e azeite extra-virgem premium. Massa fermentada por 48 horas para garantir sabor e textura perfeitos, assada em forno a lenha tradicional.",
      price: 39.9,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=75",
      category: "Pizza",
      featured: true,
    },
    {
      id: "2",
      name: "Pizza de Pepperoni",
      description:
        "Pizza tradicional coberta com molho de tomate San Marzano, queijo mussarela gratinado e fatias de pepperoni italiano premium levemente picante. Borda crocante por fora e macia por dentro, finalizada com um toque de orégano fresco.",
      price: 45.9,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=75",
      category: "Pizza",
      featured: true,
    },
    {
      id: "3",
      name: "Salada Caprese",
      description:
        "Tomates orgânicos selecionados, queijo mussarela de búfala fresco e manjericão colhido no dia, temperados com sal marinho, pimenta-do-reino moída na hora e regados com azeite de oliva extra virgem premium. Servida com redução balsâmica artesanal.",
      price: 29.9,
      image:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=75",
      category: "Entradas",
      featured: true,
    },
    {
      id: "4",
      name: "Espaguete à Carbonara",
      description:
        "Prato italiano autêntico preparado com massa artesanal al dente, ovos caipiras frescos, queijo pecorino romano DOP, pancetta italiana curada e pimenta preta moída na hora. Finalizado com queijo parmesão ralado na hora e salsinha fresca.",
      price: 49.9,
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=75",
      category: "Massas",
      featured: false,
    },
    {
      id: "5",
      name: "Tiramisu",
      description:
        "Sobremesa italiana clássica feita com camadas de biscoitos savoiardi importados embebidos em café espresso, intercalados com creme aveludado de mascarpone italiano. Finalizado com cacau em pó belga de alta qualidade e raspas de chocolate amargo.",
      price: 25.9,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=75",
      category: "Sobremesas",
      featured: false,
    },
    {
      id: "6",
      name: "California Roll",
      description:
        "Sushi roll premium preparado com arroz japonês temperado com vinagre de arroz artesanal, recheado com pepino fresco crocante, carne de caranguejo real do Alasca e abacate maduro. Finalizado com tobiko (ovas de peixe voador) e servido com molho shoyu especial e wasabi fresco.",
      price: 32.9,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=75",
      category: "Sushi",
      featured: false,
    },
    {
      id: "7",
      name: "Mojito Clássico",
      description:
        "Coquetel refrescante preparado com rum branco cubano envelhecido, açúcar de cana orgânico, suco de limão tahiti espremido na hora, água com gás premium e folhas de hortelã fresca maceradas. Servido com gelo cristalino e decorado com fatia de limão e ramo de hortelã.",
      price: 24.9,
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=75",
      category: "Bebidas",
      featured: true,
    },
    {
      id: "8",
      name: "Pão de Alho",
      description:
        "Pão artesanal assado na hora em forno a lenha, coberto com manteiga composta de alho assado, azeite extra virgem e mix de ervas frescas (tomilho, alecrim e salsinha). Servido quente com crosta crocante e interior macio.",
      price: 19.9,
      image:
        "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&q=75",
      category: "Entradas",
      featured: false,
    },
    {
      id: "9",
      name: "X-Tudo Gourmet",
      description:
        "Hambúrguer artesanal de 180g de blend especial (costela, fraldinha e acém), queijo cheddar inglês derretido, bacon defumado crocante, alface americana, tomate italiano, cebola caramelizada e molho especial da casa. Servido no pão brioche tostado na manteiga com batatas rústicas.",
      price: 36.9,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=75",
      category: "Lanches",
      featured: true,
    },
    {
      id: "10",
      name: "Caipirinha Premium",
      description:
        "Coquetel brasileiro tradicional preparado com cachaça artesanal envelhecida em barril de carvalho, limão tahiti orgânico macerado, açúcar de cana orgânico e gelo cristalino. Servida em copo old-fashioned com borda de açúcar e decorada com fatia de limão caramelizado.",
      price: 22.9,
      image:
        "https://images.unsplash.com/photo-1613825787641-1de4d1b8dd33?w=600&q=75",
      category: "Bebidas",
      featured: true,
    },
    {
      id: "11",
      name: "Vinho Tinto Reserva",
      description:
        "Vinho tinto seco premium da região de Mendoza, Argentina. Blend de uvas Malbec (70%) e Cabernet Sauvignon (30%) com 18 meses de envelhecimento em barris de carvalho francês. Apresenta notas de frutas vermelhas maduras, especiarias e um toque sutil de baunilha. Corpo médio com taninos aveludados e final longo e elegante.",
      price: 89.9,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=75",
      category: "Bebidas",
      featured: false,
    },
    {
      id: "12",
      name: "Bauru Especial",
      description:
        "Sanduíche tradicional brasileiro preparado com pão francês crocante, presunto cozido premium, queijo prato derretido, tomate fresco, alface crocante e maionese caseira. Servido quente e acompanhado de batatas chips artesanais temperadas com páprica defumada.",
      price: 28.9,
      image:
        "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?w=600&q=75",
      category: "Lanches",
      featured: false,
    },
  ],

  title = "Nosso Cardápio",
  description = "Explore nossas deliciosas opções, de entradas a sobremesas. Escaneie o código QR para fazer seu pedido diretamente da sua mesa.",
  showQrCode = true,
}: MenuSectionProps) => {
  const [filteredItems, setFilteredItems] = useState<MenuItemType[]>(items);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter items based on category and search query
  useEffect(() => {
    let result = items;

    // Apply category filter
    if (activeCategory !== "all") {
      result = result.filter(
        (item) => item.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      );
    }

    setFilteredItems(result);
  }, [activeCategory, searchQuery, items]);

  // Get featured items for carousel
  const featuredItems = items.filter((item) => item.featured);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (item: MenuItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>

          {showQrCode && (
            <div className="mt-4 md:mt-0 flex items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
              <div className="bg-white p-2 rounded-md border-2 border-primary">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://bellacucina.com/menu"
                  alt="QR Code para pedidos"
                  className="h-20 w-20"
                />
              </div>
              <div>
                <p className="font-medium text-lg">Peça da sua mesa</p>
                <p className="text-sm text-muted-foreground">
                  Escaneie o código QR na sua mesa para fazer seu pedido
                  diretamente pelo celular
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Featured Items Carousel */}
        {featuredItems.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Itens em Destaque</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredItems.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <MenuItem
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
          </div>
        )}

        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar no cardápio..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Tabs
              defaultValue={viewMode}
              value={viewMode}
              onValueChange={setViewMode}
              className="w-[200px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid">Grade</TabsTrigger>
                <TabsTrigger value="list">Lista</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <MenuCategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Menu Items Display */}
        <Tabs
          defaultValue={viewMode}
          value={viewMode}
          onValueChange={setViewMode}
          className="w-full mt-6"
        >
          <TabsContent value="grid">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum item encontrado. Tente ajustar seus filtros.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list">
            {filteredItems.length > 0 ? (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg border"
                  >
                    <div className="w-full md:w-48 h-48 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <p className="font-bold text-lg">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-muted-foreground mt-2 flex-1">
                        {item.description}
                      </p>
                      <div className="mt-4">
                        <Button
                          className="gap-2"
                          onClick={() => handleAddToCart(item)}
                        >
                          <PlusCircle size={18} />
                          Adicionar ao Pedido
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum item encontrado. Tente ajustar seus filtros.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Add to Cart Modal */}
      {selectedItem && (
        <AddToCartModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default MenuSection;
