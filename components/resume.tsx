"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import Rocket from "@mui/icons-material/Rocket";

// Turns any URL found inside a responsibility string into a clickable link that opens in a new tab.
function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:no-underline"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Resume() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      degree: "Engineering Degree in Computer Science",
      period: "2018 - 2023",
      institution: "Esprit, Tunis (EUR-ACE)",
      description:
        "Graduated with Highest Honors. Specialized in web and Internet technologies through various academic team projects and a summer internship as a Web Developer at BTS BANK.",
    },
  ];

  const experience = [
    {
      title: "Freelance Full-stack Engineer",
      period: "Sep 2025 - Dec 2025",
      company: "Rental Management Platform",
      responsibilities: [
        "Independently designed and built a full-stack rental management platform end-to-end (architecture, database, backend APIs, frontend), delivering a working MVP as the sole engineer.",
        "Architected a PostgreSQL schema and modular NestJS backend following Clean Architecture principles, structured around tenant, property, and payment domains.",
        "Integrated Stripe to handle secure rent payments, payment tracking, and transaction workflows for tenants and property owners through RESTful APIs.",
        "Translated wireframes into a responsive Next.js/Tailwind/Chakra UI frontend, closely matching UX specifications with minimal revision cycles.",
      ],
    },
    {
      title: "Full-stack Developer",
      period: "Dec 2023 - Aug 2025",
      company: "SoumissionRenovation.ca - Canada (Remote)",
      responsibilities: [
        "Check the website : https://renoquotes.com",
        "Shipped features and resolved bugs across 8 API-connected microservices (Next.js/NestJS) contributing to a production platform used by real estate/renovation clients.",
        "Built and maintained a Storybook UI component library using atomic design principles, standardizing reusable components across the frontend codebase.",
        "Wrote and optimized complex SQL queries across MySQL and PostgreSQL for high-performance data retrieval, targeting slow-running queries flagged in performance reviews.",
        "Documented RESTful APIs with OpenAPI, maintaining clear and consistent API specifications for frontend integration.",
        "Opened focused, single-purpose pull requests and reviewed 40+ teammate PRs for clarity, test coverage, and edge cases before merge.",
        "Wrote unit tests and end-to-end tests (Jest/Cypress) and enforced code standards and health using ESLint and SonarQube in CI pipelines, catching regressions before they reached QA.",
        "Improved data quality and consistency by optimizing form data retrieval and validation logic, reducing incorrect or incomplete submissions by ~30%.",
        "Worked in an Agile team (Kanban/Scrum) alongside engineers, PMs, QA, and designers, incorporating feedback into iterative releases.",
      ],
    },
    {
      title: "Full-stack Engineer Intern",
      period: "Feb 2023 - Aug 2023",
      company: "EY - Tunisia",
      responsibilities: [
        "Designed and developed EY PFEBOOK, a platform for students to explore and apply to EY's End-of-Study project offers through online assessments (personality tests, timed quizzes, coding problems).",
        "Integrated a recommendation system to assist HR in identifying top candidates.",
        "Integrated a recommendation system to assist HR in identifying top candidates.",
        "Secured the platform with JWT authentication, encrypted passwords, and API rate limiting, applying GDPR-aligned data handling practices to protect student and candidate personal data.",
      ],
    },
    {
      title: "Web Developer",
      period: "Jun 2022 - Feb 2023",
      company: "KORSGY - Ireland (Remote)",
      responsibilities: [
        "Developed the company’s new website (frontend, backend, and REST APIs) and a production e-commerce platform with documented APIs for core commerce workflows.",
        "Integrated Stripe for secure payments, checkout sessions, payment processing, and transaction validation.",
        "Collaborated with designers to translate wireframes into responsive, accessible interfaces and improve user experience.",
        "Ensured the website is fully responsive by adopting a mobile-first approach to the design.",
        "Improved the website performance by reducing the number of HTTP requests, lazy-loading images.",
        "Participated in feature planning, code reviews, debugging, and Agile development to deliver scalable solutions.",
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
          {/* Left column: Summary + Goals +Education on desktop */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PersonIcon className="w-5 h-5" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-6">
                  Self-disciplined Full-stack engineer (3+ years) with a strong
                  sense of design and an end-to-end ownership mindset.
                  Specialized in{" "}
                  <b>
                    <i>React/Next.js and Node/NestJS</i>
                  </b>
                  , with remote experience delivering for clients in Canada, US,
                  Ireland.
                </p>
              </CardContent>
            </Card>
            {/* Goals card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-6">
                  As a full-stack engineer, Small interactions matter to me as
                  much as the architecture underneath them. A spinner that feels
                  cheap bothers me the same way a slow query does. I care about
                  the pixels as much as the logic underneath them, and I want
                  that logic to read clean, not like someone unraveled a ball of
                  yarn and called it a function. Sometimes I'll lean on AI when
                  I'm stuck or want a second opinion, kind of like a mentor on
                  call.
                </p>
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
                      <p className="text-sm text-primary italic mb-2">
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
                      <p className="text-sm text-primary italic mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {visibleResponsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{linkify(resp)}</span>
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
                      <p className="text-sm text-primary italic mb-2">
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
