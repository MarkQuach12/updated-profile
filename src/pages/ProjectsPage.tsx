import { ProjectCard } from "@/components/ProjectCard";

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
        "Vercel",
        "Fly.io",
        "Supabase",
      ],
      projectUrl: "https://hsc-random-tools.vercel.app/",
      githubUrl: "https://github.com/MarkQuach12/HSCRandomTools",
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
        "Vercel",
      ],
      githubUrl: "https://github.com/MarkQuach12/updated-profile",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <p className="text-sm text-muted-foreground mb-4">
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
