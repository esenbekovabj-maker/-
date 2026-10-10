export interface RoomType {
  id: string;
  title: string;
  category: 'cottage' | 'standard' | 'suite' | 'bungalow';
  capacity: string;
  bedType: string;
  sizeM2: number;
  pricePerNight: number; // in KGS (Kyrgyz Som)
  image: string;
  description: string;
  features: string[];
  view: string;
  isPopular?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'tea' | 'lemonade' | 'cocktails' | 'coffee' | 'snacks';
  description: string;
  price: number; // in KGS
  badge?: string;
  ingredients?: string[];
  isLocalProduct?: boolean;
}

export interface SupExperience {
  id: string;
  title: string;
  timeSlot: string;
  durationMinutes: number;
  level: 'beginner' | 'intermediate' | 'all';
  price: number; // in KGS
  includes: string[];
  description: string;
  highlight?: string;
}

export interface ParkLocation {
  id: string;
  name: string;
  category: 'nature' | 'relax' | 'food' | 'water' | 'stay';
  yearPlanted?: string;
  description: string;
  x: number; // percentage on map
  y: number; // percentage on map
  tags: string[];
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  roomId: string;
  adults: number;
  children: number;
  mealPlan: 'breakfast' | 'fullBoard' | 'none';
  includeSupPass: boolean;
  includeYoga: boolean;
  includeTransfer: boolean;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  notes: string;
}
