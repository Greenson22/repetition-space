// src/components/fragments/CardHeader.tsx

type CardHeaderProps = {
  name: string;
  repetitionInfo: string | undefined;
};

const CardHeader = ({ name, repetitionInfo }: CardHeaderProps) => {
  return (
    <div className="p-5">
      <div>
        <h4 className="text-lg font-bold text-slate-800">{name}</h4>
        {repetitionInfo && (
          <span className="text-xs text-slate-500 mt-1 block">
            {repetitionInfo}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
