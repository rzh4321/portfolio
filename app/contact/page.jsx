import ContactButtons from "@/components/contactButtons";

export const metadata = {
  title: "Contact | Ricky Zhang",
};

export default function ContactPage() {
  return (
    <>
      <article className="prose px-2 py-4 md:py-0 dark:prose-invert">
        <h1 className="font-medium my-2 md:mt-0">Contact</h1>
        <p>Ways of getting in touch with me:</p>
        <hr className="my-4 dark:border-gray-200" />
        <p>
          Here is a copy of my{" "}
          <a href="/ricky_zhang_resume.pdf" download>
            resume
          </a>
          {". (PDF, 124Kb)"}
        </p>
        <ContactButtons />
      </article>
    </>
  );
}
