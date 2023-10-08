import Link from "next/link";
import Image from "next/image";

const contactsData = [
  {
    text: "Github",
    iconSrc: "/images/GithubIcon.png",
    url: "https://github.com/rzh4321",
  },
  {
    text: "LinkedIn",
    iconSrc: "/images/LinkedinIcon.png",
    url: "https://www.linkedin.com/in/ricky-zhang-a85a9024a/",
  },
  {
    text: "Email",
    iconSrc: "/images/EmailIcon.png",
    url: "mailto:rzh4321@gmail.com",
  },
];

export default function ContactButtonsContainer() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {contactsData.map((contact) => (
        <ContactButton key={contact.text} contact={contact} />
      ))}
    </div>
  );
}

function ContactButton({ contact }) {
  return (
    <Link
      href={contact.url}
      target="_blank"
      className="flex items-center justify-between gap-2 border rounded-lg p-4 w-full font-normal
        hover:bg-neutral-100 no-underline dark:hover:bg-neutral-800 dark:border-neutral-700"
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={contact.iconSrc}
          className="my-0 dark:invert"
          alt=""
          width={20}
          height={20}
        />
        {contact.text}
      </div>
      <span className="material-symbols-outlined" aria-hidden="true">
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
