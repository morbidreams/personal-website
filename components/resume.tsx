"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";

export function Resume() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      degree: "Engineering Degree in Computer Science",
      period: "2018 - 2023",
      institution: "Esprit, Tunis",
      description:
        "Studied computer science and specialized in web and Internet technologies, worked with various teams on different academic projects and did a summer internship as a web developer at a bank agency (BTS).",
    },
  ];

  const experience = [
    {
      title: "Full-stack Developer",
      period: "December 2023 - Present",
      company: "SoumissionRenovation.ca - Canada (Remote)",
      responsibilities: [
        "Built new features, resolved bugs, and optimized UX handling several API-connected microservices.",
        "Collaborated with the team to build and maintain a UI component library based on atomic design.",
        "Opened pull requests and reviewed code with attention to clarity, test coverage, and edge cases.",
        "Wrote unit tests and end-to-end tests and enforced code standards using ESLint and SonarQube.",
        "Improved address validation accuracy from 80% to 95% by enhancing a Google Maps API form component for user-submitted addresses.",
        "Collaborated closely with developers, product managers and UI/UX designers in an Agile environment, exchanging ideas and feedback.",
      ],
    },
    {
      title: "Full-stack Engineer Intern",
      period: "February 2023 - August 2023",
      company: "EY - Tunisia",
      responsibilities: [
        "Designed and developed EY PFEBOOK, a platform for students to explore and apply to EY's End-of-Study project offers through online assessments (personality tests, timed quizzes, coding problems).",
        "Built RESTful APIs and full-stack features for both user and admin interfaces.",
        "Integrated a recommendation system to assist HR in identifying top candidates.",
        "Secured the platform with JWT, encrypted passwords, API rate limiting, and other protocols.",
      ],
    },
    {
      title: "Web Developer",
      period: "June 2022 - February 2023",
      company: "KORSGY - Tunisia",
      responsibilities: [
        "Built the company's website.",
        "Set up Stripe subscriptions and one-time payments.",
        "Built RESTful APIs and tested all endpoints using Jest.",
        "Ensured the website is fully responsive by adopting a mobile-first approach to the design.",
        "Improved the website performance by reducing the number of HTTP requests, lazy-loading images.",
        "Collaborated with the employer, the UI/UX designer and the technical writers on Feedback, and made the necessary adjustments that better capture the intended use cases.",
      ],
    },
  ];

  return (
    <section id="resume" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            An overview of my professional journey and qualifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column: Summary + Education on desktop */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PersonIcon className="w-5 h-5" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-bold mb-2">Ela Debichi</h4>
                <p className="text-muted-foreground italic mb-4">
                  Creative and reliable full stack developer with good UI skills
                  and solid backend skills. Thrive in fast-paced, cross-cultural
                  teams with a strong focus on code quality, scalability, and
                  user experience.
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Tunis, Tunisia</p>
                  <p>+216 22 056 550</p>
                  <p>eladebichi@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Education card - only visible on desktop */}
            <div className="hidden lg:block">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SchoolIcon className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-bold">{edu.degree}</h4>
                      <Badge variant="secondary" className="mb-2">
                        {edu.period}
                      </Badge>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                      {index < education.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right column: Professional Experience + Education on mobile */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <WorkIcon className="w-5 h-5" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => {
                  const isExpanded = expandedIndex === index;
                  const shouldShowToggle = exp.responsibilities.length > 2;
                  const visibleResponsibilities = isExpanded
                    ? exp.responsibilities
                    : exp.responsibilities.slice(0, 2);

                  return (
                    <div key={index}>
                      <h4 className="font-bold">{exp.title}</h4>
                      <Badge variant="secondary" className="mb-2">
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-muted-foreground italic mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {visibleResponsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {shouldShowToggle && (
                        <button
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : index)
                          }
                          className="text-primary mt-2 text-sm font-semibold hover:underline focus:outline-none focus:ring-0 active:outline-none"
                        >
                          {isExpanded ? "Less" : "More.."}
                        </button>
                      )}
                      {index < experience.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Education card - only visible on mobile, below experiences */}
            <div className="mt-8 block lg:hidden">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SchoolIcon className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-bold">{edu.degree}</h4>
                      <Badge variant="secondary" className="mb-2">
                        {edu.period}
                      </Badge>
                      <p className="text-sm text-muted-foreground italic mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                      {index < education.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
