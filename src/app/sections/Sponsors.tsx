const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center text-center justify-center"
    >
      <div className="flex justify-between items-center w-full">
        <img className="w-1/3" src="./images/sections/dogprints.png"></img>
        <h2 className="text-4xl md:text-7xl font-display text-section-brown">sponsors</h2>
        <img className="w-1/3" src="./images/sections/dogprints.png"></img>
      </div>  
      <div className="font-body md:text-xl lg:text-2xl text-nav-brown w-5/6 xl:w-3/4">
        <p>
          Sponsorships are what make LazyHacks happen! Sponsors have various opportunities to build meaningful
          connections with hackers.
        </p>
        <p className="mt-8">
          Interested in sponsoring? Email us at
          <a href="mailto:sponsor@lazyhacks.ca" className="text-welcome-text hover:text-nav-brown">
            <span className="font-black"> sponsor@lazyhacks.ca</span>.
          </a>
        </p>
      </div>
    </section>
  )
}

export default Sponsors;
