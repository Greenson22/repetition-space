import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { Plant } from '@/lib/data';

type FormData = Omit<Plant, 'id'>;

type PlantFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Plant) => void;
  plantToEdit: Plant | null;
};

const PlantFormModal = ({ isOpen, onClose, onSave, plantToEdit }: PlantFormModalProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    if (plantToEdit) {
      reset(plantToEdit);
    } else {
      reset({ name: '', species: '', careLevel: 'Mudah', imageUrl: '' });
    }
  }, [plantToEdit, isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    onSave({
      ...data,
      id: plantToEdit?.id || Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md m-4">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">{plantToEdit ? 'Edit Tanaman' : 'Tambah Tanaman Baru'}</h3>
          <div className="space-y-5">
            <Input label="Nama Tanaman" id="name" {...register('name', { required: true })} placeholder="Contoh: Monstera Deliciosa" />
            <Input label="Spesies" id="species" {...register('species', { required: true })} placeholder="Contoh: Araceae" />
            <div>
              <label htmlFor="careLevel" className="block text-sm font-medium text-slate-600 mb-1">Tingkat Perawatan</label>
              <select id="careLevel" {...register('careLevel')} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition">
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Sulit">Sulit</option>
              </select>
            </div>
            <Input label="URL Gambar (Opsional)" id="imageUrl" {...register('imageUrl')} placeholder="https://example.com/plant.jpg" />
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <Button type="button" variant="secondary" onClick={onClose} className="py-2.5 px-6">Batal</Button>
            <Button type="submit" variant="primary" className="py-2.5 px-6">Simpan</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantFormModal;