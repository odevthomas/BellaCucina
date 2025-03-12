import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  notes?: string;
}

export interface Order {
  id: string;
  tableNumber: string;
  customerName: string;
  items: CartItem[];
  status: "pending" | "preparing" | "ready" | "delivered" | "cancelled";
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    item: Omit<CartItem, "quantity">,
    quantity?: number,
    notes?: string,
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateNotes: (id: string, notes: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  tableNumber: string | null;
  setTableNumber: (tableNumber: string) => void;
  customerName: string | null;
  setCustomerName: (name: string) => void;
  showSuccessToast: boolean;
  setShowSuccessToast: (show: boolean) => void;
  successMessage: string;
  setSuccessMessage: (message: string) => void;
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "createdAt" | "updatedAt">) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Generate a random ID for orders
const generateOrderId = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [orders, setOrders] = useState<Order[]>([]);

  // Load cart and orders from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedTable = localStorage.getItem("tableNumber");
    const savedName = localStorage.getItem("customerName");
    const savedOrders = localStorage.getItem("orders");

    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }

    if (savedTable) {
      setTableNumber(savedTable);
    }

    if (savedName) {
      setCustomerName(savedName);
    }

    if (savedOrders) {
      try {
        // Parse dates back to Date objects
        const parsedOrders = JSON.parse(savedOrders, (key, value) => {
          if (key === "createdAt" || key === "updatedAt") {
            return new Date(value);
          }
          return value;
        });
        setOrders(parsedOrders);
      } catch (error) {
        console.error("Failed to parse orders from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Save table number to localStorage whenever it changes
  useEffect(() => {
    if (tableNumber) {
      localStorage.setItem("tableNumber", tableNumber);
    }
  }, [tableNumber]);

  // Save customer name to localStorage whenever it changes
  useEffect(() => {
    if (customerName) {
      localStorage.setItem("customerName", customerName);
    }
  }, [customerName]);

  const addItem = (
    item: Omit<CartItem, "quantity">,
    quantity = 1,
    notes = "",
  ) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          notes: notes || updatedItems[existingItemIndex].notes,
        };
        setSuccessMessage(`${item.name} atualizado no carrinho!`);
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
        return updatedItems;
      } else {
        // Add new item
        setSuccessMessage(`${item.name} adicionado ao carrinho!`);
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 3000);
        return [...prevItems, { ...item, quantity, notes }];
      }
    });
  };

  const removeItem = (id: string) => {
    const itemToRemove = items.find((item) => item.id === id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (itemToRemove) {
      setSuccessMessage(`${itemToRemove.name} removido do carrinho`);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const updateNotes = (id: string, notes: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, notes } : item)),
    );
    setSuccessMessage("Observações atualizadas");
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const clearCart = () => {
    setItems([]);
    setSuccessMessage("Carrinho esvaziado");
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const addOrder = (
    orderData: Omit<Order, "id" | "createdAt" | "updatedAt">,
  ) => {
    const now = new Date();
    const newOrder: Order = {
      ...orderData,
      id: generateOrderId(),
      createdAt: now,
      updatedAt: now,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    return newOrder.id;
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date() }
          : order,
      ),
    );
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    updateNotes,
    clearCart,
    totalItems,
    totalPrice,
    tableNumber,
    setTableNumber,
    customerName,
    setCustomerName,
    showSuccessToast,
    setShowSuccessToast,
    successMessage,
    setSuccessMessage,
    orders,
    addOrder,
    updateOrderStatus,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
