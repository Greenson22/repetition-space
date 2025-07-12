// src/components/fragments/CardBody.tsx

import type { Discussion } from '@/lib/data';
import CardDiscussionItem from './CardDiscussionItem';

type CardBodyProps = {
  discussions: Discussion[];
};

const CardBody = ({ discussions }: CardBodyProps) => {
  return (
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex-grow text-sm text-slate-600 divide-y divide-dashed divide-slate-200">
        {discussions.map((discussion) => (
          <CardDiscussionItem key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </div>
  );
};

export default CardBody;
