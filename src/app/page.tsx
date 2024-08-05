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
              className="h-[100px] object-cover"
              src="../images/nav/hackclub_logo.png"
            ></img>
          </div>
          <div className="flex">
            <a href="#about" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/about_pillow.png"
              ></img>
              <h3 className="absolute text-xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                about
              </h3>
            </a>
            <a href="#faq" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/faq_pillow.png"
              ></img>
              <h3 className="absolute text-xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                faq
              </h3>
            </a>
            <a href="#sponsors" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/sponsors_pillow.png"
              ></img>
              <h3 className="absolute text-xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                sponsors
              </h3>
            </a>
            <a href="#socials" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/socials_pillow.png"
              ></img>
              <h3 className="absolute text-xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                socials
              </h3>
            </a>
            <a href="#apply" className="relative group">
              <img
                className="h-[100px] w-[200px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/apply_pillow.png"
              ></img>
              <h3 className="absolute text-xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                apply!
              </h3>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <div className="flex flex-col items-center text-center justify-center h-[85vh]">
          <h1 className="row font-body text-2xl text-welcome-text">
            welcome to...
            <img className="w-[30rem] my-5" src="../images/sloth_logo_welcome_800x300.png" alt="LazyHacks logo" />
          </h1>
          <h2 className="font-body text-xl text-welcome-text">
            December 7th, 2024 • 8:00 AM – 11:00 PM • In person at Shopify Ottawa
          </h2>
          <a href="#apply" className="relative group">
              <img
                className="h-[120px] w-[240px] object-cover transition-transform duration-300 transform group-hover:scale-110"
                src="../images/nav/apply_pillow.png"
              ></img>
              <h3 className="absolute text-2xl font-display text-nav-brown top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                apply!
              </h3>
            </a>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-auto py-8">
        <p className="mb-4 text-lg">made with love</p>
        <div className="grid grid-cols-2">
          <a
            href="https://www.linkedin.com/in/vickie-chen0728/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/footer/footer-vickie.png"
              alt="Vickie"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ariel-liu-056500297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/footer/footer-ariel.png"
              alt="Ariel"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/skyler-ma-3372892a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/footer/footer-skyler.png"
              alt="Skyler"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/karan-chawla-dora/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/footer/footer-karan.png"
              alt="Karan"
              className="h-16 w-16 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
