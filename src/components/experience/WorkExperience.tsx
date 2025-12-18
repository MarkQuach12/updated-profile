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
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center pt-2">
          {technologies.map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
