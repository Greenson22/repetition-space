// src/components/fragments/CardBody.tsx

import type { Discussion } from '@/lib/data';
import CardDiscussionItem from './CardDiscussionItem';

type CardBodyProps = {
  discussions: Discussion[];
};

const CardBody = ({ discussions }: CardBodyProps) => {
  const visibleDiscussions = discussions.slice(0, 3);
  return (
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex-grow text-sm text-slate-600 divide-y divide-dashed divide-slate-200">
        {visibleDiscussions.map((discussion) => (
          <CardDiscussionItem key={discussion.id} discussion={discussion}/>
        ))}
        {discussions.length > 3 && <div className="text-center">...</div>}
      </div>
    </div>
  );
};

export default CardBody;
