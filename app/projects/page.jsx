import Link from "next/link";

export const metadata = {
  title: "Projects | Ricky Zhang"
}
 

const projectsData = [
  {
    title: "Retiform",
    description: "Full-stack Facebook-clone website, developed RESTful API and frontend on Next.js, deployed on Vercel.",
    stack: ["React", "Next.js", "JavaScript", "MongoDB", "Node", "Express", "JWT", "Next-auth", "Bootstrap"],
    repo_url: "https://github.com/rzh4321/social-media",
    live_url: "https://retiform.vercel.app/",
  },
  {
    title: "HoopsIQ",
    description: "An NBA trivia game.",
    stack: ["React", "Typescript", "HTML", "CSS"],
    repo_url: "https://github.com/rzh4321/nba-trivia",
    live_url: "https://main--superb-queijadas-f013fc.netlify.app/",
  }
]

export default function ProjectsPage() {
  return (
    <>
      <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
        <h1 className="font-medium my-2 md:mt-0">Projects</h1>
        <p>
          Here are some of my projects
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <ul className="list-none pl-0">
        {projectsData.map((project) => (
          <li key={project.title} className="">
            <Link href={project.live_url} className="no-underline">
              <h3>{project.title}</h3>
            </Link>
            <p>{project.description}</p>
            <p>{project.stack.join(` | `)}</p>
            <div className="flex gap-2">
              {project.live_url && 
              <Link href={project.live_url} 
                className="flex items-center justify-between md:gap-8 border rounded-lg p-2 w-full md:w-auto font-normal 
                hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <span className="ml-2">Live</span>
                <span className="material-symbols-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

                </span>
              </Link>}
              {project.repo_url &&
              <Link href={project.repo_url} 
                className="flex items-center justify-between md:gap-8 border rounded-lg p-2 w-full md:w-auto font-normal 
                hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700"
              >
                <span className="ml-2">Repo</span>
                <span className="material-symbols-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

                </span>
              </Link>}
            </div>
          </li>
        ))}
      </ul> 
      </article>
    </>
  );
}