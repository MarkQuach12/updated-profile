import { WorkExperience } from "@/components/experience/WorkExperience";
import { Extracurricular } from "@/components/experience/Extracurricular";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const AboutMePage = () => {
  const experiences = [
    // {
    //   companyName: "Ernest & Young",
    //   position: "Software Engineer Intern",
    //   startDate: "December 2025",
    //   endDate: "Present",
    //   description: ["MCP Project"],
    // },
    {
      companyName: "Justice Support Centre",
      position: "Software Developer Intern",
      startDate: "September 2025",
      endDate: "November 2025",
      description: [
        "Built optimisation scripts to scrape and integrate financial data from Xero and ApprovalMax APIs, reducing manual entry and improving data accuracy.",
        "Designed and deployed Python data cleansing pipelines to validate, standardise, and transform records, cutting average invoice processing time from an hour a week to 4 minutes a week whilst improving reliability of accounting reports.",
        "Developed a browser based stock inventory manager using HTML, CSS and JavaScript for use across 3 office locations, improving stock tracking reliability and removing the need for multiple inconsistent Excel sheets.",
      ],
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    },
  ];

  const extracurricular = [
    {
      companyName: "Software Development Society (UNSW)",
      position: "Sponsorships Director",
      startDate: "November 2025",
      endDate: "Present",
      description: [
        "Led DevSoc’s external relations, establishing and nurturing partnerships with key sponsors to support and fund society activities and events.",
        "Coordinated negotiation, onboarding and delivery of sponsorship commitments, ensuring partner expectations were met while aligning contributions with core society programs and major annual events",
      ],
    },
    {
      companyName: "Software Development Society (UNSW)",
      position: "Vice President (Internals) and Grievance Officer",
      startDate: "October 2024",
      endDate: "December 2025",
      description: [
        "Oversees the operations of HR, which involves organising internal bonding initiatives that engage over 250 internal members to foster a strong sense of community and collaboration within the society generating a 9/10 overall satisfaction rating.",
        "Oversees the Web Development Training Program involving overseeing 30 trainees and 20 training leads each term, by providing guidance on the program structure and curriculum development which led to a 30% increase in trainee to lead conversion from 2024.",
        "Built internal automation tools in Python and Node.js to streamline society operations, including reimbursement processing and onboarding workflows, reducing manual admin time across the committee by 40%.",
      ],
    },
    {
      companyName: "Software Development Society (UNSW)",
      position: "Marketing Director",
      startDate: "November 2023",
      endDate: "December 2024",
      description: [
        "Collaborate with other society members to coordinate event logistics, including venue booking, catering, audiovisual equipment setup, and guest speaker arrangements",
        "Foster a culture of diversity and inclusion within the society, ensuring that people from all backgrounds feel welcome and have equal opportunities to participate and succeed in the software development field.",
      ],
    },
    {
      companyName: "Fairfield Youth Advisory Committee",
      position: "Youth Advisor",
      startDate: "June 2021",
      endDate: "June 2023",
      description: [
        "Advocates for and empowers youth voices in local communities through discussion forums for prevalent social issues (e.g. COVID in Fairfield, poor teen mental health).",
        "Attended leadership and advocacy workshops to strengthen interpersonal, pitching, presenting, and interviewing skills.",
        "Key coordinator at local events dedicated to empowering and providing a social outlet for socioeconomic minorities with more than 4000 attendees (e.g. ’Bring it On’ festival).",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-base leading-7 text-muted-foreground">
          I'm a final year Computer Science and Finance student at UNSW,
          passionate about software development and education. Beyond that, I
          enjoy travelling ✈️ and exploring new places, as well as photography
          📷
        </p>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
        <div className="flex flex-col gap-6">
          {experiences.map((experience) => (
            <Card key={experience.companyName + experience.position}>
              <CardContent>
                <WorkExperience {...experience} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Extracurricular</h2>
        <div className="flex flex-col gap-6">
          {extracurricular.map((extracurricular) => (
            <Card key={extracurricular.companyName + extracurricular.position}>
              <CardContent>
                <Extracurricular {...extracurricular} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
