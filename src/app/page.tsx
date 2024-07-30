import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between">
          <div className="flex">
            <img
              className="h-[100px] w-[100px] object-contain"
              src="../images/nav/sloth_logo.PNG"
            ></img>
            <img
              className="h-[100px] w-[100px] object-cover"
              src="../images/nav/hackclub_logo.png"
            ></img>
          </div>
          <div className="flex">
            <a href="#about" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/about_pillow.png"
              ></img>
              <h3 className="absolute text-xl text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                about
              </h3>
            </a>
            <a href="#faq" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/faq_pillow.png"
              ></img>
              <h3 className="absolute text-xl text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                faq
              </h3>
            </a>
            <a href="#sponsors" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/sponsors_pillow.png"
              ></img>
              <h3 className="absolute text-xl text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                sponsors
              </h3>
            </a>
            <a href="#socials" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/socials_pillow.png"
              ></img>
              <h3 className="absolute text-xl text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                socials
              </h3>
            </a>
            <a href="#apply" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/apply_pillow.png"
              ></img>
              <h3 className="absolute text-xl text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                apply!
              </h3>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <div className="flex items-center text-center justify-center h-[85vh]">
          <h1 className="font-body text-2xl">
            welcome to
            <img className="w-[30rem]" src="../images/sloth_logo_welcome.png" alt="LazyHacks logo" />
          </h1>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-auto border-t py-8 bg-gray-200">
        <p className="mb-4 text-lg">made with love</p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/vickie-chen0728/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Vickie" className="h-16 w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-liu-056500297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="Ariel" className="h-16 w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/skyler-ma-3372892a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Skyler" className="h-16 w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-chawla-dora/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="Karan" className="h-16 w-16" />
          </a>
        </div>
      </footer>
    </>
  );
}
