import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  badges: string[];
  projectUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  content,
  badges,
  projectUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto text-left">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-55 object-cover mx-auto"
          />
        )}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <div className="flex flex-wrap gap-2 items-center mt-4">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        {projectUrl && (
          <Button variant="link" asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <SquareArrowOutUpRight className="w-4 h-4" />
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="link" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              View GitHub <SquareArrowOutUpRight className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
