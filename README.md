# Bella Cucina - Restaurant Management System

![Bella Cucina](https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80)

A versatile, responsive restaurant management system adaptable to various restaurant types that enhances both customer experience and operational efficiency.

## 🍽️ Features

- **Interactive Menu**: Digital menu with high-quality food photos in a carousel display, detailed descriptions, and filtering options by category
- **Table Self-Ordering**: QR code-based system allowing customers to browse menu and place orders directly from their table without waiter assistance
- **Reservation System**: Online booking interface with calendar view, time slot selection, and party size options
- **Responsive Design**: Fully adaptive layout that works seamlessly across mobile, tablet and desktop devices
- **Restaurant Customization**: Easily configurable theme, colors, and content to match any restaurant's branding

## 🚀 Live Demo

Explore the live demo: [Bella Cucina Demo](https://pensive-hertz4-dmljl.dev-2.tempolabs.ai)

## 📱 Screenshots

### Home Page
![Home Page](https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80)

### Menu Section
![Menu](https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80)

### Reservation System
![Reservation](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80)

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, ShadCN UI
- **State Management**: React Context API
- **Form Handling**: React Hook Form, Zod
- **UI Components**: Radix UI, Lucide React icons
- **Date Handling**: date-fns

## 🏗️ Project Structure

```
src/
├── components/
│   ├── cart/           # Cart functionality components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── menu/           # Menu display components
│   ├── reservation/    # Reservation system components
│   ├── ui/             # Reusable UI components (ShadCN)
│   └── waiter/         # Waiter panel components
├── lib/                # Utility functions and services
└── types/              # TypeScript type definitions
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bella-cucina.git
   cd bella-cucina
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧩 Core Components

### Customer-Facing Features

- **Interactive Menu**: Browse, filter, and search through the restaurant's offerings with detailed descriptions and high-quality images
- **Cart System**: Add items to cart, customize with special requests, and place orders directly from the table
- **Reservation System**: Book tables with an intuitive date and time picker, specify party size, and receive confirmation

### Restaurant Management Features

- **Waiter Panel**: View and manage incoming orders, update order status, and handle special requests
- **Menu Management**: Easily update menu items, prices, and availability
- **Reservation Management**: View and manage upcoming reservations

## 🔄 Workflow

1. **Customer Experience**:
   - Scan QR code at table or visit website
   - Browse digital menu with filtering options
   - Add items to cart with customization options
   - Submit order directly from device
   - Receive order confirmation

2. **Restaurant Operations**:
   - Receive incoming orders through waiter panel
   - Update order status (pending, preparing, ready, delivered)
   - Manage reservations and table assignments
   - Process payments and track orders

## 🔒 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BASE_PATH=/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any inquiries or support, please contact:
- Email: contact@bellacucina.com
- Website: [bellacucina.com](https://bellacucina.com)

---

Built with ❤️ by [Your Name/Team]
