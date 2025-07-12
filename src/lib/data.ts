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

export type Discussion = {
  id: number;
  text: string;
  repetitionInfo: string;
};

// Data yang sudah diperbarui
export const defaultData: Plant[] = [
  {
    id: 1,
    name: 'Kejadian',
    discussions: [
      { id: 1, text: 'Makna Penciptaan dalam 6 Hari', repetitionInfo: '10 Jul 2025 / R3D' },
      { id: 2, text: 'Dosa Pertama dan Konsekuensinya', repetitionInfo: '12 Jul 2025 / R1D' },
      { id: 3, text: 'Nuh dan Bahtera: Simbol Keselamatan', repetitionInfo: '15 Jul 2025 / R5D' },
      { id: 26, text: 'Menara Babel dan Kesombongan Manusia', repetitionInfo: '17 Jul 2025 / R2D' },
      { id: 27, text: 'Panggilan Abraham: Iman dan Pengorbanan', repetitionInfo: '19 Jul 2025 / R4D' },
    ],
  },
  {
    id: 2,
    name: 'Keluaran',
    discussions: [
      { id: 4, text: 'Panggilan Musa di Gunung Horeb', repetitionInfo: '16 Jul 2025 / R2D' },
      { id: 5, text: 'Sepuluh Tulah Mesir', repetitionInfo: '18 Jul 2025 / R1D' },
      { id: 6, text: 'Perjamuan Paskah Pertama', repetitionInfo: '20 Jul 2025 / R5D' },
      { id: 28, text: 'Tiang Awan dan Api: Penuntun Tuhan', repetitionInfo: '22 Jul 2025 / R3D' },
      { id: 29, text: 'Hukum Allah di Gunung Sinai', repetitionInfo: '24 Jul 2025 / R1D' },
    ],
  },
  {
    id: 3,
    name: 'Imamat',
    discussions: [
      { id: 7, text: 'Makna Korban dan Pendamaian', repetitionInfo: '21 Jul 2025 / R3D' },
      { id: 8, text: 'Hukum Kekudusan Umat', repetitionInfo: '23 Jul 2025 / R1D' },
      { id: 30, text: 'Hukum Diet dan Kebersihan', repetitionInfo: '25 Jul 2025 / R2D' },
      { id: 31, text: 'Ritual Penyucian dari Noda', repetitionInfo: '27 Jul 2025 / R4D' },
    ],
  },
  {
    id: 4,
    name: 'Bilangan',
    discussions: [
      { id: 9, text: 'Penghitungaan Suku Israel', repetitionInfo: '24 Jul 2025 / R2D' },
      { id: 10, text: 'Pemberontakan Korah', repetitionInfo: '26 Jul 2025 / R3D' },
      { id: 11, text: 'Musa Memukul Batu: Pesan Ketaatan', repetitionInfo: '28 Jul 2025 / R5D' },
      { id: 32, text: 'Tiga Hari Waktu Mengembara', repetitionInfo: '30 Jul 2025 / R1D' },
      { id: 33, text: 'Pemilihan Pemimpin Baru', repetitionInfo: '01 Agu 2025 / R4D' },
    ],
  },
  {
    id: 5,
    name: 'Ulangan',
    discussions: [
      { id: 12, text: 'Pengulangan Sepuluh Hukum Allah', repetitionInfo: '29 Jul 2025 / R1D' },
      { id: 13, text: 'Pilih Hidup atau Mati', repetitionInfo: '31 Jul 2025 / R2D' },
      { id: 34, text: 'Restatement Hukum Kasih', repetitionInfo: '02 Agu 2025 / R3D' },
      { id: 35, text: 'Janji Berkat dan Kutukan', repetitionInfo: '04 Agu 2025 / R5D' },
    ],
  },
  {
    id: 6,
    name: 'Yosua',
    discussions: [
      { id: 14, text: 'Penaklukan Yerikho', repetitionInfo: '01 Agu 2025 / R3D' },
      { id: 15, text: 'Pembagian Tanah Perjanjian', repetitionInfo: '03 Agu 2025 / R1D' },
      { id: 36, text: 'Turunlah Tembok Yerikho', repetitionInfo: '05 Agu 2025 / R2D' },
      { id: 37, text: 'Kesetiaan Yosua kepada Tuhan', repetitionInfo: '07 Agu 2025 / R4D' },
    ],
  },
  {
    id: 7,
    name: 'Hakim-hakim',
    discussions: [
      { id: 16, text: 'Kisah Simson dan Kekuatan-Nya', repetitionInfo: '04 Agu 2025 / R2D' },
      { id: 17, text: 'Debora: Pemimpin dan Nabi Perempuan', repetitionInfo: '06 Agu 2025 / R5D' },
      { id: 38, text: 'Gideon dan Musuh Midian', repetitionInfo: '08 Agu 2025 / R3D' },
      { id: 39, text: 'Yefta dan Janji yang Salah', repetitionInfo: '10 Agu 2025 / R1D' },
    ],
  },
  {
    id: 8,
    name: 'Rut',
    discussions: [
      { id: 18, text: 'Kesetiaan Rut kepada Naomi', repetitionInfo: '07 Agu 2025 / R1D' },
      { id: 19, text: 'Boaz sebagai Gembalakan', repetitionInfo: '09 Agu 2025 / R3D' },
      { id: 40, text: 'Rut Memetik Gandum di Ladang', repetitionInfo: '11 Agu 2025 / R2D' },
      { id: 41, text: 'Perjodohan Ilahi antara Rut dan Boaz', repetitionInfo: '13 Agu 2025 / R5D' },
    ],
  },
  {
    id: 9,
    name: '1 Samuel',
    discussions: [
      { id: 20, text: 'Samuel: Nabi dan Hakim', repetitionInfo: '10 Agu 2025 / R2D' },
      { id: 21, text: 'Pengurapan Saul sebagai Raja', repetitionInfo: '12 Agu 2025 / R1D' },
      { id: 22, text: 'Daud vs Goliat: Keberanian oleh Iman', repetitionInfo: '14 Agu 2025 / R5D' },
      { id: 42, text: 'Daud Melarikan Diri ke Gunung Zif', repetitionInfo: '16 Agu 2025 / R3D' },
      { id: 43, text: 'Saul dan Roh Jahat: Konflik Rohani', repetitionInfo: '18 Agu 2025 / R4D' },
    ],
  },
  {
    id: 10,
    name: 'Mazmur',
    discussions: [
      { id: 23, text: 'Mazmur 23: “Tuhan adalah Gembala Saya”', repetitionInfo: '15 Agu 2025 / R3D' },
      { id: 24, text: 'Mazmur Pujian dan Ratapan', repetitionInfo: '17 Agu 2025 / R1D' },
      { id: 25, text: 'Penggunaan Mazmur dalam Ibadah', repetitionInfo: '19 Agu 2025 / R8D' },
      { id: 44, text: 'Mazmur Kebijaksanaan Salomo', repetitionInfo: '21 Agu 2025 / R2D' },
      { id: 45, text: 'Mazmur Syukur atas Keselamatan', repetitionInfo: '23 Aug 2025 / R4D' },
    ],
  },
];
