import Link from "next/link";

export const metadata = {
  title: "Projects | Ricky Zhang",
};

const projectsData = [
  {
    title: "Politigram",
    description:
      "Created for and submitted to the DevFest '24 Hackathon at Columbia University. A full-stack social media website with a slider to filter content based on a political spectrum (liberal vs conservative) using machine learning.",
    stack: [
      "Next.js",
      "BERT",
      "Google Cloud Vision",
      "MongoDB",
      "Mongoose",
      "Next-auth",
      "Tailwind",
    ],
    repo_url: "https://github.com/fzinnah17/columbia-devfest24",
    live_url: "https://devfest-24.vercel.app/",
  },
  {
    title: "Retiform",
    description:
      "A full-stack Facebook-clone website with both the backend and frontend developed with the Next.js 13 app router.",
    stack: [
      "React",
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "Next-auth",
      "Bootstrap",
    ],
    repo_url: "https://github.com/rzh4321/social-media",
    live_url: "https://retiform.vercel.app/",
  },
  {
    title: "NBA CourtSide",
    description: "A responsive web application featuring a clean, minimal interface using ChakraUI for real-time NBA statistics, top performers, and box scores.",
    stack: ["React", "Next.js", "Typescript", "ChakraUI"],
    repo_url: "https://github.com/rzh4321/nba-boxscore",
    live_url: "https://nba-courtside.vercel.app/",
  },
  {
    title: "Jobs Scraper",
    description: "A customizable web scraping tool that automates data extraction from job posting websites.",
    stack: ["Python", "Beautiful Soup", "Selenium", "Pandas"],
    repo_url: "https://github.com/rzh4321/job-scraper",
    live_url: "",
  },
  {
    title: "Covered",
    description: "An AI cover letter generator using OpenAI's API.",
    stack: ["React", "Next.js", "Typescript", "OpenAI API","Tailwind"],
    repo_url: "https://github.com/rzh4321/ai-cover-letter",
    live_url: "https://covered-ai.vercel.app/",
  },
  {
    title: "HoopsIQ",
    description: "A single-page application of an NBA trivia game developed with React and Vite.",
    stack: ["React", "Typescript", "HTML", "CSS"],
    repo_url: "https://github.com/rzh4321/nba-trivia",
    live_url: "https://hoopsiq.netlify.app/",
  },
];

export default function ProjectsPage() {
  return (
    <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
      <h1 className="font-medium my-2 md:mt-0">Projects</h1>
      <p>Here are some of my projects:</p>
      <hr className="my-4 dark:border-gray-200" />
      <ProjectsList />
    </article>
  );
}

function ProjectsList() {
  return (
    <ul className="list-none pl-0">
      {projectsData.map((project) => (
        <ProjectsListItem key={project.title} project={project} />
      ))}
    </ul>
  );
}

function ProjectsListItem({ project }) {
  return (
    <li key={project.title} className="pl-0">
      <ProjectsListItemText project={project} />
      <ProjectsListItemContainer project={project} />
    </li>
  );
}

function ProjectsListItemText({ project }) {
  return (
    <>
      <Link href={project.live_url} target="_blank" className="no-underline">
        <h3 className="my-0">{project.title}</h3>
      </Link>
      <p>{project.description}</p>
      <p>{project.stack.join(` | `)}</p>
    </>
  );
}

function ProjectsListItemContainer({ project }) {
  return (
    <div className="flex gap-2">
      {project.live_url && (
        <ProjectsListItemUrl url={project.live_url} text="Live" />
      )}
      {project.repo_url && (
        <ProjectsListItemUrl url={project.repo_url} text="Repo" />
      )}
    </div>
  );
}

function ProjectsListItemUrl({ url, text }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center justify-between md:gap-8 border rounded-lg p-2 w-full md:w-auto font-normal 
    hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700"
    >
      <span className="ml-2">{text}</span>
      <span className="material-symbols-outlined">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </span>
    </Link>
  );
}
