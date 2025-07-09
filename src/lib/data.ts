// src/lib/data.ts

// Definisikan tipe Plant di sini agar bisa diimpor di mana saja
export type Plant = {
  id: number;
  name: string;
  species: string;
  careLevel: 'Mudah' | 'Sedang' | 'Sulit';
  imageUrl?: string;
};

// Definisikan tipe untuk item diskusi
export type DiscussionItem = {
  id: number;
  plantId: number; // Untuk menghubungkan ke tanaman
  text: string;
  repetitionInfo: string;
};

// Ekspor array data default untuk tanaman
export const defaultPlants: Plant[] = [
  { id: 1, name: 'Monstera Deliciosa', species: 'Araceae', careLevel: 'Mudah' },
  { id: 2, name: 'Snake Plant', species: 'Sansevieria trifasciata', careLevel: 'Mudah' },
  { id: 3, name: 'Fiddle Leaf Fig', species: 'Ficus lyrata', careLevel: 'Sulit' }
];

// Ekspor array data default untuk diskusi dengan format tanggal baru
export const defaultDiscussions: DiscussionItem[] = [
  { id: 1, plantId: 1, text: 'Materi Fotosintesis', repetitionInfo: '10 Jul 2025 / R3D' },
  { id: 2, plantId: 1, text: 'Struktur Daun', repetitionInfo: '12 Jul 2025 / R1D' },
  { id: 3, plantId: 2, text: 'Perawatan Dasar', repetitionInfo: '15 Jul 2025 / R5D' },
  { id: 4, plantId: 3, text: 'Kebutuhan Cahaya', repetitionInfo: '18 Jul 2025 / R2D' },
  { id: 4, plantId: 3, text: 'Kebutuhan Cahaya', repetitionInfo: '18 Jul 2025 / R2D' },
];