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
    <div className="flex flex-col text-left gap-2">
      <div>
        <h3 className="text-lg font-bold">{position}</h3>
        <p className="text-muted-foreground">{companyName}</p>
        <p className="text-muted-foreground">
          {startDate} - {endDate}
        </p>
      </div>
      {description.length > 0 && (
        <ul className="list-disc list-inside">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
