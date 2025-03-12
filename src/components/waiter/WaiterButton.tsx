import React, { useState } from "react";
import { UserRound } from "lucide-react";
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
        <UserRound className="h-5 w-5 mr-2" />
        Área do Garçom
      </Button>

      <WaiterPanel open={isPanelOpen} onOpenChange={setIsPanelOpen} />
    </>
  );
};

export default WaiterButton;
