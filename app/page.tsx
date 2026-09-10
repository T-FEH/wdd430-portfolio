import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Contacts REST API',
    description:
      'A REST API for storing and retrieving contacts, with full CRUD routes, MongoDB persistence, a seed script, and Swagger-style route documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/T-FEH/cse341',
  },
  {
    title: 'Vehicle Dealership Web App',
    description:
      'A server-rendered dealership site with vehicle inventory browsing by classification, account registration and login with hashed passwords, and server-side form validation.',
    technologies: [
      'Express',
      'EJS',
      'PostgreSQL',
      'bcrypt',
      'express-validator',
    ],
    link: 'https://github.com/T-FEH/cse340',
  },
  {
    title: 'Telco Customer Churn Prediction',
    description:
      'A machine learning pipeline that predicts telecom customer churn, comparing Logistic Regression, Random Forest, and XGBoost, with SHAP interpretability and a Streamlit app for interactive predictions.',
    technologies: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    link: 'https://github.com/T-FEH/telco-churn-prediction',
  },
  {
    title: 'AWS Resume Parser',
    description:
      'A cloud-hosted Flask app that accepts PDF, TXT, and DOCX resume uploads, extracts name, email, phone, skills, and education with spaCy, and stores the results in S3 and DynamoDB.',
    technologies: ['Python', 'Flask', 'spaCy', 'AWS S3', 'DynamoDB', 'EC2'],
    link: 'https://github.com/T-FEH/aws-resume-parser',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
