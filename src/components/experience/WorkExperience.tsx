import { Badge } from "../ui/badge";

interface WorkExperienceProps {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export const WorkExperience = ({
  companyName,
  position,
  startDate,
  endDate,
  description,
  technologies,
}: WorkExperienceProps) => {
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
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center mt-4">
          {technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      )}
    </div>
  );
};
