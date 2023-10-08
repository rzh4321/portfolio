import "./globals.css";
import SideBar from "@/components/sidebar";

export const metadata = {
  title: "Ricky Zhang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className="mx-4 mt-4 md:mt-32 mb-20 max-w-4xl flex flex-col 
            md:flex-row md:justify-center md:gap-4 md:mx-auto
            "
        >
          <SideBar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
