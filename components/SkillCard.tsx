interface SkillCardProps {
  category: string;
  skills: string[];
  level?: 'Learning' | 'Comfortable' | 'Confident';
}

const levelStyles: Record<NonNullable<SkillCardProps['level']>, string> = {
  Learning: 'bg-amber-100 text-amber-900',
  Comfortable: 'bg-sky-100 text-sky-900',
  Confident: 'bg-emerald-100 text-emerald-900',
};

export default function SkillCard({ category, skills, level }: SkillCardProps) {
  return (
    <article className="p-4 border border-gray-300 rounded bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className="text-lg font-bold">{category}</h3>
        {level && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${levelStyles[level]}`}
          >
            {level}
          </span>
        )}
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
