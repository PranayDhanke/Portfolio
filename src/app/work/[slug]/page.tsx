import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/work/CaseStudyPage";
import { caseStudies } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = caseStudies.find((cs) => cs.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.subtitle} | Pranay Dhanke`,
    description: project.summary,
  };
}

export default function CaseStudyRoute({ params }: { params: { slug: string } }) {
  const index = caseStudies.findIndex((cs) => cs.slug === params.slug);
  if (index === -1) notFound();

  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <CaseStudyPage project={project} next={next} />
    </>
  );
}
