// src/components/fragments/DiscussionModal.tsx
import type { Plant } from '@/lib/data';
import Button from '../elements/Button';
import Image from 'next/image';

type DiscussionModalProps = {
  plant: Plant;
  onClose: () => void;
};

const DiscussionModal = ({ plant, onClose }: DiscussionModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg m-4 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{plant.name}</h2>
          <Button
            onClick={onClose}
            variant="secondary"
            className="!p-2 !rounded-full !bg-slate-100 hover:!bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <div className="border-t border-slate-200 mb-6"></div>
        <div className="flex-grow overflow-y-auto pr-3 -mr-3">
          <ul className="space-y-4">
            {plant.discussions.map((discussion) => (
              <li 
                key={discussion.id} 
                className="p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <p className="text-slate-800 font-medium mb-2">{discussion.text}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <Image 
                    src="/globe.svg"
                    alt="Repetition"
                    width={16}
                    height={16}
                    className="mr-2 opacity-50"
                  />
                  <span>{discussion.repetitionInfo}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-slate-200 mt-6 pt-4 text-right">
          <Button onClick={onClose} variant="secondary">
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionModal;
