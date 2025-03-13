# Bella Cucina - Sistema de Gestão de Restaurantes
![Redes Pets (1)](https://github.com/user-attachments/assets/4a209a2b-c892-4a38-94a9-7df5aada1bbd)


Um sistema de gestão de restaurantes versátil e responsivo, adaptável a diferentes tipos de restaurantes, que melhora tanto a experiência do cliente quanto a eficiência operacional.

## 🍽️ Funcionalidades

- **Menu Interativo**: Menu digital com fotos de alta qualidade dos pratos em um carrossel, descrições detalhadas e opções de filtro por categoria
- **Pedidos Self-Service**: Sistema baseado em QR code que permite aos clientes visualizar o menu e fazer pedidos diretamente da mesa sem a ajuda do garçom
- **Sistema de Reservas**: Interface de reservas online com visualização de calendário, seleção de horários e opções de tamanho de grupo
- **Design Responsivo**: Layout totalmente adaptativo que funciona de maneira fluida em dispositivos móveis, tablets e desktops
- **Customização do Restaurante**: Tema, cores e conteúdo facilmente configuráveis para combinar com a identidade visual de qualquer restaurante

## 🚀 Demo ao Vivo

Explore a demo ao vivo: [Demo Bella Cucina](https://pensive-hertz4-dmljl.dev-2.tempolabs.ai)

## 📱 Capturas de Tela

### Página Inicial

### Seção do Menu

### Sistema de Reservas

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Vite
- **Estilo**: Tailwind CSS, ShadCN UI
- **Gerenciamento de Estado**: React Context API
- **Manipulação de Formulários**: React Hook Form, Zod
- **Componentes de UI**: Radix UI, Ícones Lucide React
- **Manipulação de Datas**: date-fns

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── cart/           # Componentes da funcionalidade do carrinho
│   ├── home/           # Componentes da página inicial
│   ├── layout/         # Componentes de layout (Cabeçalho, Rodapé)
│   ├── menu/           # Componentes de exibição do menu
│   ├── reservation/    # Componentes do sistema de reservas
│   ├── ui/             # Componentes UI reutilizáveis (ShadCN)
│   └── waiter/         # Componentes do painel do garçom
├── lib/                # Funções e serviços utilitários
└── types/              # Definições de tipos TypeScript
```

## 🔧 Instalação & Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seunome/bella-cucina.git
   cd bella-cucina
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Construa para produção**
   ```bash
   npm run build
   ```

## 🧩 Componentes Principais

### Funcionalidades para o Cliente

- **Menu Interativo**: Navegue, filtre e pesquise pelos itens do menu do restaurante com descrições detalhadas e imagens de alta qualidade
- **Sistema de Carrinho**: Adicione itens ao carrinho, personalize com solicitações especiais e faça pedidos diretamente da mesa
- **Sistema de Reservas**: Reserve mesas com um seletor intuitivo de data e horário, especifique o tamanho do grupo e receba confirmação

### Funcionalidades para o Restaurante

- **Painel do Garçom**: Visualize e gerencie os pedidos recebidos, atualize o status dos pedidos e gerencie solicitações especiais
- **Gestão do Menu**: Atualize facilmente os itens do menu, preços e disponibilidade
- **Gestão de Reservas**: Visualize e gerencie as reservas futuras

## 🔄 Fluxo de Trabalho

1. **Experiência do Cliente**:
   - Escaneie o QR code na mesa ou acesse o site
   - Navegue pelo menu digital com opções de filtro
   - Adicione itens ao carrinho com opções de personalização
   - Envie o pedido diretamente do dispositivo
   - Receba a confirmação do pedido

2. **Operações do Restaurante**:
   - Receba pedidos no painel do garçom
   - Atualize o status do pedido (pendente, preparando, pronto, entregue)
   - Gerencie reservas e atribuição de mesas
   - Processe pagamentos e acompanhe os pedidos

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz com as seguintes variáveis:

```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
VITE_BASE_PATH=/
```

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie sua branch de funcionalidade (`git checkout -b feature/minha-nova-funcionalidade`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova funcionalidade incrível'`)
4. Faça push para a branch (`git push origin feature/minha-nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

---

Construído com ❤️ por [@odevthomas]
