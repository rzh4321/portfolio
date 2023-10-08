import GithubIcon from '@/public/images/GithubIcon.png';
import LinkedinIcon from '@/public/images/LinkedinIcon.png';
import EmailIcon from '@/public/images/EmailIcon.png'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactButtons() {
  return (
    <div className='flex flex-col gap-2 md:flex-row'>
      <Link href="http://github.com/rzh4321" 
        className='flex items-center justify-between gap-2 border rounded-lg p-4 w-full font-normal
        hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700'
      >
        <div className='flex flex-row items-center gap-2'>
          <Image 
            src={GithubIcon}
            className='my-0 dark:invert'
            alt="Github Icon"
            width={20}
            height={20}
          />
          Github
        </div>
        <span className="material-symbols-outlined">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

        </span>
      </Link>
      <Link href="https://www.linkedin.com/in/ricky-zhang-a85a9024a/" 
        className='flex items-center justify-between gap-2 border rounded-lg p-4 w-full font-normal 
        hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700'
      >
        <div className='flex flex-row items-center gap-2'>
          <Image 
            src={LinkedinIcon}
            className='my-0 dark:invert'
            alt="LinkedIn Icon"
            width={20}
            height={20}
          />
          LinkedIn
        </div>
        <span className="material-symbols-outlined">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

        </span>
      </Link>
      <Link href="mailto:rzh4321@gmail.com" 
        className='flex items-center justify-between gap-2 border rounded-lg p-4 w-full font-normal 
        hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700'
      >
        <div className='flex flex-row items-center gap-2'>
          <Image 
            src={EmailIcon}
            className='my-0 dark:invert'
            alt="LinkedIn Icon"
            width={20}
            height={20}
          />
          Email
        </div>
        <span className="material-symbols-outlined">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>

        </span>
      </Link>
    </div>
  );
}