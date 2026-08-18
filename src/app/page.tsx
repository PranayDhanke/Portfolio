import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { EngineeringIdentity } from "@/components/identity/EngineeringIdentity";
import { TechStack } from "@/components/stack/TechStack";
import { Experience } from "@/components/experience/Experience";
import { WorkSection } from "@/components/work/WorkSection";
import { UnderTheHood } from "@/components/hood/UnderTheHood";
import { HowIBuild } from "@/components/build/HowIBuild";
import { Exploring } from "@/components/exploring/Exploring";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EngineeringIdentity />
      <TechStack />
      <WorkSection />
      <Experience />
      <UnderTheHood />
      <HowIBuild />
      <Exploring />
      <Contact />
    </>
  );
}