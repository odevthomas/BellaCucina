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
        {/* Novo SVG para o WhatsApp */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 258">
	<rect width="256" height="258" fill="none" />
	<defs>
		<linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
			<stop offset="0%" stop-color="#1faf38" />
			<stop offset="100%" stop-color="#60d669" />
		</linearGradient>
		<linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
			<stop offset="0%" stop-color="#f9f9f9" />
			<stop offset="100%" stop-color="#fff" />
		</linearGradient>
	</defs>
	<path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
	<path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" />
	<path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" stroke-width="6.5" stroke="#fff" />
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
          backgroundImage="/banner(5).png"
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
          restaurantImage="/banner(3).png"
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
