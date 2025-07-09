// src/lib/data.ts

// Definisikan tipe Plant di sini agar bisa diimpor di mana saja
export type Plant = {
  id: number;
  name: string;
  species: string;
  careLevel: 'Mudah' | 'Sedang' | 'Sulit';
  imageUrl?: string;
};

// Definisikan tipe baru untuk setiap item pembahasan
export type DiscussionItem = {
text: string;
repetitionInfo: string;
}

// Ekspor array data default
export const defaultPlants: Plant[] = [
{ id: 1, name: 'Monstera Deliciosa', species: 'Araceae', careLevel: 'Mudah' },
{ id: 2, name: 'Snake Plant', species: 'Sansevieria trifasciata', careLevel: 'Mudah' },
{ id: 3, name: 'Fiddle Leaf Fig', species: 'Ficus lyrata', careLevel: 'Sulit' }
];