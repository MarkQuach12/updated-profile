interface ExtracurricularProps {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const Extracurricular = ({
  companyName,
  position,
  startDate,
  endDate,
  description,
}: ExtracurricularProps) => {
  return (
    <div className="flex flex-col text-left gap-4">
      <div className="space-y-1">
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="text-base font-medium text-foreground">{companyName}</p>
        <p className="text-sm text-muted-foreground">
          {startDate} - {endDate}
        </p>
      </div>
      {description.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
