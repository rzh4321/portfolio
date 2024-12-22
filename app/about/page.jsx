import Link from "next/link";

export const metadata = {
  title: "About | Ricky Zhang",
};

export default function AboutPage() {
  return (
    <>
      <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
        <h1 className="font-medium my-2 md:mt-0">About me</h1>
        <p>
        {`Hi! I'm Ricky Zhang, a third year computer science major at New York University.`}
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          {`I've been fascinated by the potential of code to transform ideas into reality ever since
          creating my first coding project, an automation tool for collecting NBA statistics. It has led me down a path of 
          continuous learning, exploring, and creating. I didn't pick up web development until my second semester as a sophomore, and since
          then, I've had a lot of fun building a variety of projects with various languages and technologies,
          always excited to tackle the next challenge to expand my knowledge.`}
        </p>
        <p>
          {`So far, my journey has been a rollercoaster of rewarding experiences. I've had the opportunity to
          tackle several unique projects, each one a chance to learn something completely new and interesting to stretch my 
          capabilities as a programmer. But what excites me the most is the potential to apply my passion and skills in the
          real world. My goal is to be more than just a student -- I want to be a contributor and a collaborator while still
          being able to create things I love.`}
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          {`My most recent project is a `}<Link target="_blank" href={'https://nba-courtside.vercel.app/'}>a website for displaying real-time NBA statistics and for simulating sports betting with virtual currency</Link>{`. I am also currently exploring project ideas beyond web development, preferably those involving C/C++/Java.`}
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
        Here is a copy of my{" "}
        <a href="/ricky_zhang_resume.pdf" download>
            resume
          </a>
          {". (PDF, 154Kb)"}
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          {`Outside of coding, I'm also an avid New York Knicks and Brooklyn Nets fan. Ever since the `}<Link target="_blank" href={'https://en.wikipedia.org/wiki/Jeremy_Lin#Rise_of_%22Linsanity%22_(2011%E2%80%932012)'}>Linsanity run in 2011</Link>{`, 
          I have been deeply passionate about the NBA, which has definitely encouraged me to stay active and play basketball
          regularly in my local community center. It also directly inspired at least two of my personal projects, one of which even started my journey of programming. In my free time, you will also find me immersed in movies and TV shows. Being
          in the city allows me to go to a movie theater at least once a week, so I'm always ready to discuss the latest movies or 
          binge-worthy series.`}
        </p>
      </article>
    </>
  );
}
