const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center text-center justify-center"
    >
      <div className="flex justify-between items-center w-full mt-24 mb-8 md:mt-30 md:mb-20">
      <img className="w-1/3 h-[150px] object-cover animate-bounce" src="./images/sections/dogprints.png"></img>
        <h2 className="text-4xl md:text-7xl font-display text-section-brown">sponsors</h2>
        <img className="w-1/3 h-[150px] object-cover animate-bounce" src="./images/sections/dogprints.png"></img>
      </div>  
      <div className="font-body md:text-2xl lg:text-3xl text-nav-brown w-5/6 xl:w-3/4">
        <p className="mb-10">
          Thank you to our wonderful sponsors!
        </p>
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 mb-12" src="./images/sponsors/nokia_logo.png"></img>
          <img className="w-2/5 mb-12" src="./images/sponsors/dorahacks_logo.svg"></img>
        </div>
      </div>
      <div className="mt-8 font-body md:text-xl lg:text-2xl text-nav-brown w-5/6 xl:w-3/4">
        <p>
          Sponsorships are what make LazyHacks happen! Sponsors have various opportunities to build meaningful
          connections with hackers.
        </p>
        <p className="mt-8">
          Interested in sponsoring? Email us at&nbsp;
          <a href="mailto:team@lazyhacks.ca" className="text-body-link hover:text-body-link-hover hover:underline">
            <span>team@lazyhacks.ca</span>
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Sponsors;
