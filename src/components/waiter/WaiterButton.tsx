import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa"; // Agora a importação deve funcionar corretamente
import { Button } from "@/components/ui/button";
import WaiterPanel from "./WaiterPanel";

interface WaiterButtonProps {
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

const WaiterButton: React.FC<WaiterButtonProps> = ({
  variant = "outline",
  size = "default",
  className = "",
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsPanelOpen(true)}
        className={className}
      >
        <FaClipboardList className="h-10 w-10 mr-2" /> {/* Novo ícone */}
      </Button>

      <WaiterPanel open={isPanelOpen} onOpenChange={setIsPanelOpen} />
    </>
  );
};

export default WaiterButton;
