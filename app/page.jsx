import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import GithubIcon from '@/public/images/GithubIcon.png';
import Link from 'next/link'
import ContactButtons from '@/components/contactButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ricky Zhang"
}

export default function Home() {
  return (
    <>
      <article className='prose px-2 py-4 md:py-0 dark:prose-invert'>
        <div className='flex flex-row items-center gap-4'>
          <Image 
            src={GithubIcon}
            className='rounded-full my-0'
            alt="Picture of Chensheng Xu"
            width={100}
            height={100}
            placeholder='blur'
          />
          <div className='flex flex-col'>
            <h1 className='font-medium my-2'>Ricky Zhang</h1>
            <Link href="http://github.com/rzh4321" className='flex items-center gap-2'>
              <Image 
                src={GithubIcon}
                className='my-0 dark:invert'
                alt="Github Icon"
                width={20}
                height={20}
                />
              rzh4321
            </Link>
          </div>
        </div>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          Hi! I'm Ricky Zhang, a passionate <b>self-starter.</b>
        </p>
        <p>
          I love to learn and make things.         
        </p>
        <p>
          I always have the urge to learn and create, now I am eager to work and contribute to the exciting dynamic world of web development and software engineering.
        </p>
        {/* <hr className="my-4 dark:border-gray-200" />
        <p>
          Here is my <a href="/Resume.pdf" download>resume</a>{" (PDF, 75Kb)."}
        </p>
        <hr className="my-4 dark:border-gray-200" /> */}
        <ContactButtons />
      </article>
    </>
  )
}