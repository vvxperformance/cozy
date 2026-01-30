
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AeroStream Smart Purifier',
    price: 199.99,
    description: 'Breathe cleaner air with our HEPA-filtered smart air purifier. Features real-time air quality monitoring and ultra-quiet night mode.',
    category: 'Air Quality',
    image: 'https://picsum.photos/seed/purifier/600/600',
    rating: 4.8,
    features: ['HEPA H13 Filter', 'WiFi App Control', 'Sleep Mode']
  },
  {
    id: '2',
    name: 'AquaNano Electric Kettle',
    price: 45.00,
    description: 'Boil water in under 2 minutes with precision temperature control and a sleek stainless steel design.',
    category: 'Kitchen',
    image: 'https://picsum.photos/seed/kettle/600/600',
    rating: 4.5,
    features: ['Auto-Shutoff', '1.7L Capacity', 'Temperature Preset']
  },
  {
    id: '3',
    name: 'Lumina Smart Coffee Maker',
    price: 129.99,
    description: 'Start your day with the perfect brew. Programmable timer and strength selector to match your morning mood.',
    category: 'Kitchen',
    image: 'https://picsum.photos/seed/coffee/600/600',
    rating: 4.9,
    features: ['Built-in Grinder', '24h Timer', 'Thermal Carafe']
  },
  {
    id: '4',
    name: 'Zenith Robotic Vacuum',
    price: 349.00,
    description: 'Autonomous cleaning for hard floors and carpets. Laser mapping technology ensures no spot is missed.',
    category: 'Cleaning',
    image: 'https://picsum.photos/seed/vacuum/600/600',
    rating: 4.7,
    features: ['Laser Navigation', 'Mopping Function', 'Self-Charging']
  },
  {
    id: '5',
    name: 'PureMist Humidifier',
    price: 59.99,
    description: 'Maintain ideal humidity levels for your health and comfort. Large water tank for extended use.',
    category: 'Air Quality',
    image: 'https://picsum.photos/seed/humidifier/600/600',
    rating: 4.4,
    features: ['Cool Mist', 'Aroma Diffuser', '4L Capacity']
  },
  {
    id: '6',
    name: 'Vertex Induction Cooktop',
    price: 89.99,
    description: 'Portable, powerful, and safe cooking wherever you are. Precise heat control for master chefs.',
    category: 'Kitchen',
    image: 'https://picsum.photos/seed/cooker/600/600',
    rating: 4.6,
    features: ['Touch Controls', 'Child Lock', 'Rapid Heating']
  }
];

export const CATEGORIES = ['All', 'Kitchen', 'Cleaning', 'Air Quality'];
