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
          building my first web application for a school project, which has led me to continuously explore, learn,
          and create. I didn't pick up web development until my second semester as a sophomore, and since
          then, I've had a lot of fun building a variety of projects with various languages and technologies,
          always excited to tackle the next challenge in order to expand my knowledge.`}
        </p>
        <p>
          {`So far, my journey has been a rollercoaster of rewarding experiences. I've had the opportunity to
          tackle several projects, each one a chance to learn something completely new and interesting to stretch my 
          capabilities as a programmer. But what excites me the most is the potential to apply my passion and skills in the
          real world. My goal is to be more than just a student -- I want to be a contributor and a collaborator while still
          being able to create things I love.`}
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          {`My most recent personal project was a `}<Link target="_blank" href={'https://trailermeter.vercel.app/'}>Rotten Tomatoes score guessing game</Link> {`built using Next.js and a Python web scraper, inspired by my passion for movies. I am currently learning mobile web development as well as the basics of machine learning.`}
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
          {`Outside of coding, I'm also an avid New York Knicks and Brooklyn Nets fan. Ever since the Linsanity run in 2011, 
          I have been deeply passionate about the NBA, which has definitely encouraged me to stay active and play basketball
          regularly in my local community center. In my free time, you will also find me immersed in movies and TV shows. Being
          in the city allows me to go to a movie theater at least once a week, so I'm always ready to discuss the latest movies or 
          binge-worthy series.`}
        </p>
      </article>
    </>
  );
}
