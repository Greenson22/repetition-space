// src/components/fragments/CardDiscussionItem.tsx

import type { Discussion } from '@/lib/data';

type CardDiscussionItemProps = {
  discussion: Discussion;
};

const CardDiscussionItem = ({ discussion }: CardDiscussionItemProps) => {
  return (
    <div className="py-3">
      <p className="truncate">{discussion.text}</p>
      <p className="text-xs text-slate-500">{discussion.repetitionInfo}</p>
    </div>
  );
};

export default CardDiscussionItem;
