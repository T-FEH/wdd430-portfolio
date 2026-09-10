import SkillCard from '@/components/SkillCard';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    level: 'Comfortable' as const,
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Flask', 'REST APIs'],
    level: 'Confident' as const,
  },
  {
    category: 'Data & Databases',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Python', 'scikit-learn'],
    level: 'Comfortable' as const,
  },
  {
    category: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'AWS', 'Vercel', 'Docker'],
    level: 'Learning' as const,
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m a software development student at BYU-Idaho building
        full-stack web applications and data-driven projects. My work ranges
        from REST APIs and server-rendered web apps to machine learning
        pipelines deployed on AWS.
      </p>
      <p className="text-lg text-gray-700">
        Right now I&apos;m focused on the React and Next.js ecosystem —
        learning the App Router, Server Components, and how to ship a polished,
        accessible interface.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Technical Skills</h2>
      <section className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} {...group} />
        ))}
      </section>
    </main>
  );
}
