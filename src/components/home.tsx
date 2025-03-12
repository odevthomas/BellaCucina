import React from "react";

import HeroSection from "./home/HeroSection";
import FeaturedItems from "./home/FeaturedItems";
import MenuSection from "./menu/MenuSection";
import ReservationSection from "./reservation/ReservationSection";
import Footer from "./layout/Footer";

import { CartProvider, useCart } from "./cart/CartContext";
import CartButton from "./cart/CartButton";
import WaiterButton from "./waiter/WaiterButton";
import ToastSuccess from "./ui/toast-success";

const HomePageContent = () => {
  const restaurantName = "Bella Cucina";
  const { showSuccessToast, setShowSuccessToast, successMessage } = useCart();

  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      {/* Success Toast */}
      {showSuccessToast && (
        <ToastSuccess
          title={successMessage}
          onClose={() => setShowSuccessToast(false)}
        />
      )}

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.3-.767.966-.94 1.164-.173.199-.347.223-.646.075-.3-.15-1.267-.465-2.414-1.485-.893-.795-1.494-1.77-1.67-2.07-.173-.3-.018-.465.13-.615.134-.135.3-.345.45-.52.149-.172.2-.296.3-.496.099-.198.05-.372-.025-.521-.075-.148-.672-1.62-.922-2.218-.24-.584-.486-.51-.672-.51-.172 0-.371-.01-.571-.01-.2 0-.522.074-.796.372-.273.297-1.045 1.02-1.045 2.488 0 1.47 1.07 2.89 1.22 3.09.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M13.507 8.4a.442.442 0 0 0-.43-.36.477.477 0 0 0-.048 0 5.96 5.96 0 0 0-4.97 7.257.43.43 0 0 0 .42.334.398.398 0 0 0 .1-.012.432.432 0 0 0 .324-.51 5.099 5.099 0 0 1 4.245-6.197.432.432 0 0 0 .359-.512z" />
          <path d="M13.917 6.424a.432.432 0 0 0-.358-.512.442.442 0 0 0-.43-.36.477.477 0 0 0-.048 0 8.286 8.286 0 0 0-6.916 10.096.43.43 0 0 0 .42.334.398.398 0 0 0 .1-.012.432.432 0 0 0 .324-.51 7.427 7.427 0 0 1 6.2-9.036.432.432 0 0 0 .358-.512z" />
        </svg>
      </a>

      {/* Menu de navegação flutuante */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
          <nav className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <a
              href="#"
              className="text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#menu"
              className="text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              Cardápio
            </a>
            <a
              href="#reservations"
              className="text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              Reservas
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-primary font-medium transition-colors whitespace-nowrap"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Bem-vindo ao Bella Cucina"
          subtitle="Experimente a autêntica culinária italiana com nosso cardápio cuidadosamente elaborado e serviço excepcional."
          backgroundImage="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80"
          ctaText="Ver Cardápio"
          secondaryCtaText="Fazer Reserva"
          onCtaClick={() =>
            document
              .getElementById("menu")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onSecondaryCtaClick={() =>
            document
              .getElementById("reservations")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />

        {/* Featured Items */}
        <FeaturedItems
          title="Nossos Pratos Especiais"
          subtitle="Preparados com amor e os melhores ingredientes"
        />

        {/* Menu Section */}
        <section id="menu">
          <MenuSection
            title="Explore Nosso Cardápio"
            description="Dos clássicos italianos tradicionais às interpretações modernas, nosso cardápio oferece algo para todos os gostos."
            showQrCode={true}
          />
        </section>

        {/* Reservation Section */}
        <ReservationSection
          restaurantName={restaurantName}
          restaurantImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
          title="Faça sua Reserva"
          description="Reserve sua mesa online e desfrute de uma experiência gastronômica perfeita em nosso restaurante."
        />

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                Fundado em 2010, o Bella Cucina tem servido autêntica culinária
                italiana feita com os ingredientes mais frescos e receitas
                tradicionais passadas por gerações. Nossa paixão pela comida e
                hospitalidade nos impulsiona a criar experiências gastronômicas
                memoráveis para nossos clientes.
              </p>
              <p className="text-gray-600">
                Nossa equipe de chefs experientes, liderada pela Chef Executiva
                Maria Rossi, traz criatividade e expertise para cada prato,
                combinando técnicas clássicas com inovações modernas para
                encantar seu paladar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Ingredientes de Qualidade
                </h3>
                <p className="text-gray-600">
                  Obtemos os melhores ingredientes de produtores e fornecedores
                  locais, garantindo frescor e apoiando nossa comunidade.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Receitas Autênticas
                </h3>
                <p className="text-gray-600">
                  Nossas receitas foram aperfeiçoadas ao longo de gerações,
                  trazendo os verdadeiros sabores da Itália para sua mesa.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Serviço Excepcional
                </h3>
                <p className="text-gray-600">
                  Nossa equipe dedicada está comprometida em proporcionar um
                  ambiente acolhedor e um serviço atencioso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contato</h2>
              <p className="text-gray-600">
                Tem perguntas ou deseja enviar um feedback? Adoraríamos ouvir
                você!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Envie-nos uma Mensagem
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowSuccessToast(true);
                    setSuccessMessage("Mensagem enviada com sucesso!");
                    setTimeout(() => setShowSuccessToast(false), 3000);
                    e.currentTarget.reset();
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Seu email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Sua mensagem"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Visite-nos</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Principal, 123, Cidade, Estado 12345
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 1234-5678</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">contato@bellacucina.com</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">
                      Segunda - Quinta: 11:00 - 22:00
                    </p>
                    <p className="text-gray-600">
                      Sexta - Sábado: 11:00 - 23:00
                    </p>
                    <p className="text-gray-600">Domingo: 12:00 - 21:00</p>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 h-48 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1775656636577!2d-46.6585407!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMzAuNyJX!5e0!3m2!1spt-BR!2sbr!4v1620151913177!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Mapa do restaurante"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        restaurantName={restaurantName}
        address="Rua Principal, 123, Cidade, Estado 12345"
        phone="(11) 1234-5678"
        email="contato@bellacucina.com"
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col space-y-3">
        <WaiterButton
          variant="secondary"
          className="rounded-full shadow-lg h-12 w-12 p-0"
          size="icon"
        />
        <CartButton
          variant="default"
          className="rounded-full shadow-lg h-12 w-12 p-0"
          size="icon"
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <CartProvider>
      <HomePageContent />
    </CartProvider>
  );
};

export default HomePage;
