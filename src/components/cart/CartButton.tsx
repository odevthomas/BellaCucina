import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";

interface CartButtonProps {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsCartOpen(true)}
        className={`relative ${className}`}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Carrinho
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      <CartModal open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
};

export default CartButton;
