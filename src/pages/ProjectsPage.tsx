import { ProjectCard } from "@/components/ProjectCard";
import HSCRandomToolsImage from "@/assets/HSCRandomTools.png";
import profileWebsiteImage from "@/assets/profileWebsite.png";

export const ProjectsPage = () => {
  const projects = [
    {
      title: "HSC Random Tools",
      description: "A collection of tools for the NSW HSC.",
      content:
        "HSC Random Tools is a personal project I built to help NSW HSC students better understand their performance and make more informed decisions. It includes tools like a scaled mark predictor, which estimates final HSC marks using past scaling data, and a Band 6 comparison tool that lets students explore how different schools have performed across subjects and years.",
      badges: [
        "Typescript",
        "React",
        "Shadcn UI",
        "Tailwind CSS",
        "Python",
        "Flask",
        "BeautifulSoup",
        "Vercel",
        "Fly.io",
        "Supabase",
      ],
      projectUrl: "https://hsc-random-tools.vercel.app/",
      githubUrl: "https://github.com/MarkQuach12/HSCRandomTools",
      imageUrl: HSCRandomToolsImage,
    },
    {
      title: "Profile Website",
      description: "A website for my profile.",
      content:
        "My profile website is a personal project I built to showcase my skills and projects. It includes a portfolio of my work, a blog, and a contact form.",
      badges: [
        "Typescript",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Vercel",
      ],
      githubUrl: "https://github.com/MarkQuach12/updated-profile",
      imageUrl: profileWebsiteImage,
    },
    {
      title: "CleanSlate (Hackathon Project)",
      description: "A project for the Hackathon.",
      content: "CleanSlate is a project I built and led a team of 5 for the Hackathon. It is a mindfulness application which capitalises on the under-utilised benefits associated with negative reinforcement, while simultaneously empowering users to maximise the overall impact.",
      badges: ["React", "Tailwind CSS", "Tailwind UI", "Node.js", "ExpressJS", "OpenAI API"],
      githubUrl: "https://github.com/MarkQuach12/CleanSlate",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-muted-foreground mb-4">
        Here are some of my projects. You can view the source code on GitHub.
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
};
