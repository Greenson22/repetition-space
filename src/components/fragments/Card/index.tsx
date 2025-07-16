// src/components/fragments/Card/index.tsx

import type { Plant } from '@/lib/data';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

type CardProps = {
  data: Plant;
  onClick: () => void;
};

const Card = ({ data, onClick }: CardProps) => {
  const { name, discussions } = data;

  return (
    <div
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <CardHeader name={name} repetitionInfo={discussions.length > 0 ? discussions[0].repetitionInfo : undefined} />
      <div className="border-t border-slate-200"></div>
      <CardBody discussions={discussions} />
    </div>
  );
};

export default Card;
