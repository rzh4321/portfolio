import Image from "next/image";
import Link from "next/link";
import ContactButtons from "@/components/contactButtons";

export const metadata = {
  title: "Ricky Zhang",
};

export default function Home() {
  return (
    <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
      <HomeHeader />
      <hr className="my-4 dark:border-gray-200" />
      <HomeText />
      <ContactButtons />
    </article>
  );
}

function HomeHeader() {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        src="/images/profile.png"
        className="rounded-full my-0 max-h-[110px] object-cover"
        alt="Picture"
        width={110}
        height={110}
      />
      <div className="flex flex-col">
        <h1 className="font-medium my-2">Ricky Zhang</h1>
        <Link
          href="http://github.com/rzh4321"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/GithubIcon.png"
            className="my-0 dark:invert"
            alt="Github Icon"
            width={20}
            height={20}
          />
          rzh4321
        </Link>
      </div>
    </div>
  );
}

function HomeText() {
  return (
    <>
      <p>
        {`Hi! I'm Ricky Zhang, a third year computer science major at New York University.`}
      </p>
      <p>{`I'm a dedicated and driven self-starter with a passion for learning and developing solutions in the realm of software engineering and web development.`}</p>
      <hr className="my-4 dark:border-gray-200" />
      <p>
      {`I am particularly interested in building full-stack web applications, although I have been recently exploring projects beyond web development, including lower-level programming with languages like C, C++, and Java to better understand core computing concepts and system architecture.`}
      </p>
    </>
  );
}
