import React, { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface MenuCategoryFilterProps {
  categories?: Category[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

const MenuCategoryFilter = ({
  categories = [
    { id: "all", name: "Todos" },
    { id: "appetizers", name: "Entradas" },
    { id: "main-courses", name: "Pratos Principais" },
    { id: "pizza", name: "Pizzas" },
    { id: "pasta", name: "Massas" },
    { id: "sushi", name: "Sushi" },
    { id: "desserts", name: "Sobremesas" },
    { id: "drinks", name: "Bebidas" },
    { id: "sandwiches", name: "Lanches" },
    { id: "specials", name: "Especiais" },
  ],

  activeCategory = "all",
  onCategoryChange = () => {},
}: MenuCategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="w-full bg-background border-b border-border py-2">
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex space-x-2 px-4 pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(category.id)}
              className="whitespace-nowrap"
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MenuCategoryFilter;
