// src/lib/data.ts

// Tipe untuk item diskusi
export type DiscussionItem = {
  id: number;
  text: string;
  repetitionInfo: string;
};

// Tipe Plant sekarang tidak lagi memiliki species dan careLevel
export type Plant = {
  id: number;
  name: string;
  imageUrl?: string;
  discussions: DiscussionItem[]; 
};

// Data yang sudah diperbarui
export const defaultData: Plant[] = [
  { 
      id: 1, 
      name: 'Kejadian', 
      discussions: [
          { id: 1, text: 'Materi Fotosintesis', repetitionInfo: '10 Jul 2025 / R3D' },
          { id: 2, text: 'Struktur Daun', repetitionInfo: '12 Jul 2025 / R1D' },
      ]
  },
  { 
      id: 2, 
      name: 'Keluaran', 
      discussions: [
          { id: 3, text: 'Perawatan Dasar', repetitionInfo: '15 Jul 2025 / R5D' },
      ]
  },
  { 
      id: 3, 
      name: 'Imamat', 
      discussions: [
          { id: 4, text: 'Kebutuhan Cahaya', repetitionInfo: '18 Jul 2025 / R2D' },
          { id: 5, text: 'Kebutuhan Air', repetitionInfo: '20 Jul 2025 / R1D' },
      ]
  }
];