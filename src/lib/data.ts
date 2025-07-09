// Definisikan tipe Plant di sini agar bisa diimpor di mana saja
export type Plant = {
    id: number;
    name: string;
    species: string;
    careLevel: 'Mudah' | 'Sedang' | 'Sulit';
    imageUrl?: string;
  };
  
  // Ekspor array data default
  export const defaultPlants: Plant[] = [
    { id: 1, name: 'Monstera Deliciosa', species: 'Araceae', careLevel: 'Mudah', imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, name: 'Snake Plant', species: 'Sansevieria trifasciata', careLevel: 'Mudah', imageUrl: 'https://images.unsplash.com/photo-1593482892290-494b29a7c363?q=80&w=2574&auto=format&fit=crop' },
    { id: 3, name: 'Fiddle Leaf Fig', species: 'Ficus lyrata', careLevel: 'Sulit', imageUrl: 'https://images.unsplash.com/photo-1588683793032-7e034a74c553?q=80&w=2574&auto=format&fit=crop' }
  ];