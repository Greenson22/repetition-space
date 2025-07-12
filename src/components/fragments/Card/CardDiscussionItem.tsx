// src/components/fragments/CardDiscussionItem.tsx

import type { Discussion } from '@/lib/data';

type CardDiscussionItemProps = {
  discussion: Discussion;
};

const CardDiscussionItem = ({ discussion }: CardDiscussionItemProps) => {
  return (
    <div className="justify-between items-center py-3">
      <span>{discussion.text}</span>
      <span className="text-xs text-slate-500 whitespace-nowrap block">{discussion.repetitionInfo}</span>
    </div>
  );
};

export default CardDiscussionItem;
