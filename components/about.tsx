import CakeIcon from "@mui/icons-material/Cake";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";

export function About() {
  const personalInfo = [
    {
      label: "Email",
      value: "eladebichi@gmail.com",
      icon: <EmailIcon className="text-primary w-5 h-5" />,
    },
    {
      label: "Phone",
      value: "+216 22 056 550",
      icon: <PhoneIcon className="text-primary w-5 h-5" />,
    },
    {
      label: "City",
      value: "Tunis, Tunisia",
      icon: <LocationCityIcon className="text-primary w-5 h-5" />,
    },
    {
      label: "Github",
      value: "https://github.com/morbidreams",
      icon: <GitHubIcon className="text-primary w-5 h-5" />,
    },
    {
      label: "Degree",
      value: "Software Engineering Degree",
      icon: <SchoolIcon className="text-primary w-5 h-5" />,
    },
    {
      label: "Mbti",
      value: "INTP",
      icon: <PsychologyIcon className="text-primary w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hi :)</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            3 things you need to know about my work:{" "}
            <b>Reliable Code. Sharp UI. Solid Backend.</b>
            <br />I build fast, clean, and scalable web apps. Experienced with
            React, Next.js, Node.js, and everything in between.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Full-stack Developer</h3>
            <p className="text-muted-foreground italic">
              I build user-friendly interfaces and solid backend systems. I care
              about collaboration, clarity, and building things that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                {info.icon}
                <span>
                  <strong>{info.label}:</strong> {info.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            I&apos;m always excited to take on new challenges, improve existing
            systems, and bring ideas to life through code. Let&apos;s build
            something great together :)
          </p>
        </div>
      </div>
    </section>
  );
}
