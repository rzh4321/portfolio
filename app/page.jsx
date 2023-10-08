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
        src="/images/GithubIcon.png"
        className="rounded-full my-0"
        alt="Picture"
        width={100}
        height={100}
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
        Hi! I'm Ricky Zhang, a passionate <b>self-starter.</b>
      </p>
      <p>I love to learn and make things.</p>
      <hr className="my-4 dark:border-gray-200" />
      <p>
        I always have the urge to learn and create, now I am eager to work and
        contribute to the exciting dynamic world of web development and software
        engineering.
      </p>
    </>
  );
}
