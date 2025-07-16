// src/components/fragments/DiscussionModal.tsx
import type { Plant } from '@/lib/data';

type DiscussionModalProps = {
  plant: Plant;
  onClose: () => void;
};

const DiscussionModal = ({ plant, onClose }: DiscussionModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-slate-800">{plant.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="border-t border-slate-200 my-4"></div>
        <ul className="space-y-3">
          {plant.discussions.map((discussion) => (
            <li key={discussion.id} className="text-slate-700">
              {discussion.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscussionModal;
