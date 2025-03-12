import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  title = "Bem-vindo ao Nosso Restaurante",
  subtitle = "Experimente as melhores delícias culinárias com nosso cardápio cuidadosamente elaborado e serviço excepcional.",
  ctaText = "Ver Cardápio",
  secondaryCtaText = "Fazer Reserva",
  onCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt="Fundo do restaurante"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90 text-white font-medium"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryCtaClick}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
