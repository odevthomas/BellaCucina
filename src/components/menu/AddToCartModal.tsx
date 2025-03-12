import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Check, Star } from "lucide-react";
import { useCart } from "../cart/CartContext";

interface AddToCartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  open,
  onOpenChange,
  item,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setQuantity(1);
      setNotes("");
      setAddedToCart(false);
    }
  }, [open]);

  const handleAddToCart = () => {
    addItem(item, quantity, notes);
    setAddedToCart(true);

    // Close modal after showing success animation
    setTimeout(() => {
      onOpenChange(false);
    }, 1500);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {addedToCart ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Item Adicionado!
            </h2>
            <p className="text-gray-600">
              O item foi adicionado ao seu pedido.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Adicionar ao Pedido</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="flex items-start gap-4">
                <div className="h-32 w-32 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <div className="flex items-center mt-1 mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-2">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{(Math.random() * (5 - 4) + 4).toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <p className="font-medium mt-2 text-green-600">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <label className="block text-sm font-medium mb-2">
                  Quantidade
                </label>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Observações
                </label>
                <Textarea
                  placeholder="Alguma observação especial? (ex: sem cebola, bem passado, etc.)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t mt-2">
                <span className="font-medium">Total:</span>
                <span className="font-medium text-lg text-green-600">
                  R$ {(item.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-700"
              >
                Adicionar ao Pedido
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
