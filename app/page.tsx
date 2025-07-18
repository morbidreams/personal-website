import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Resume } from "@/components/resume";
import { Portfolio } from "@/components/portfolio";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/ga";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <GoogleAnalytics />
      <Header />
      <main className="lg:ml-80">
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
