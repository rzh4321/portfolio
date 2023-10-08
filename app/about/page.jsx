import Head from "next/head";

export const metadata = {
    title: "About | Ricky Zhang"
  }

export default function AboutPage() {
  return (
    <>

      <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
        <h1 className="font-medium my-2 md:mt-0">About me</h1>
        <p>
          Hi! I'm Ricky Zhang, a passionate <b>self-starter.</b>
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim quae deleniti quos et inventore rem, aut dolore dolor dicta. Reprehenderit animi perspiciatis amet ex. Cupiditate placeat voluptatem eius ipsam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim rerum quibusdam cum consequuntur adipisci sint, dolore esse itaque quae perferendis illo vero velit sit non, dolorum ducimus aspernatur dolorem optio?
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          The most recent project 
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis a voluptatum ratione corporis qui ullam possimus. Praesentium blanditiis fugiat pariatur, commodi consectetur voluptatum vitae adipisci quasi porro excepturi laborum!
        </p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          Here is a copy of my <a href="/Resume.pdf" download>resume</a>{". (PDF, 75Kb)"}
        </p>
      </article>
    </>
  );
}