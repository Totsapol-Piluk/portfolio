const text = "<br/>"
const text2 = ")"

function HeroPage() {
  return (
    <main id="hero" className="bg-[#f9f9f9] pt-[100px]">
      <nav className="w-[50px]">
        {/* <Logo /> */}
      </nav>
      <section className="flex justify-center items-center w-[100%] h-[80vh]">
        <article className="flex  flex-col  gap-10 pl-16">
          <h1 className="text-[#312b2b] text-3xl font-extrabold">
            I'M TOTSAPOL PILUK
            <br />
            <span className="text-[#FFE01B] test">WEB </span>DEVELOPER
          </h1>
          <p className="text-[#312b2b] text-lg font-medium">
          <span className="font-bold text-indigo-500">Calling all explorers!</span> This is Totsapol, your friendly neighborhood dev <span className="text-rose-400">{text}</span>
          <br/> Let's map exciting possibilities, line by line <span className="text-rose-400">{text}</span>
          <br/> Together, we can build a digital world that's as vast and awe-inspiring as the universe itself   
          <span className=" text-yellow-400"> {text2}</span>
          <span className=" text-indigo-500">{text2}</span>
          <span className=" text-green-500">;</span>
          </p>
          <span className="flex items-center gap-4">
            <h4>Tech Stack |  </h4>
            <TechStack />
          </span>
        </article>
      </section>
    </main>
  );
}

function TechStack () {
  return(
    <span className="w-[350px] h-[30px] flex gap-5 justify-center">
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-3628838-3030115.png" alt="HTML icon" />
      <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256" alt="CSS icon" />
      <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256" alt="JavaScript icon" />
      <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256" alt="React icon" />
      <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind CSS icon"/>
      <img src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="Node.js icon"/>
      <img src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=webp&w=256" alt="MongoDB icon"/>
    </span>
  );
}

function Logo() {
  const logo = "</>";
  return (
    <>
      {/* <span class="material-symbols-sharp fixed top-0 left-0 text-base-100 text-8xl">code</span> */}
      <span className="text-[#312b2b] text-6xl w-[50px]">
        {/* {logo} */}
        <img src="https://cdn3.iconfinder.com/data/icons/ikooni-outline-seo-web/128/free-35-512.png" alt="logo" />
      </span>
    </>
  );
}

export default HeroPage;
