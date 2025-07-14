"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "JavaScript", percentage: 85 },
    { name: "ReactJs", percentage: 80 },
    { name: "TypeScript", percentage: 75 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Next.js", percentage: 70 },
    { name: "Node.js", percentage: 70 },
    { name: "NestJS", percentage: 50 },
    { name: "Express.js", percentage: 70 },
    { name: "Angular", percentage: 50 },
    { name: "Shadcn", percentage: 60 },
    { name: "Sass", percentage: 75 },
    { name: "Bootstrap", percentage: 80 },
    { name: "MUI", percentage: 90 },
    { name: "MongoDB", percentage: 75 },
    { name: "MySQL", percentage: 70 },
    { name: "PostgreSQL", percentage: 70 },
    { name: "Python", percentage: 50 },
    { name: "Flask", percentage: 40 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            What I bring to the table
          </p>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="grid lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress
                    value={animated ? skill.percentage : 0}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
