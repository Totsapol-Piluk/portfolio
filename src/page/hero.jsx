function HeroPage() {
  return (
    <>
      <Logo />
      <section className="flex justify-center items-center w-[100%] h-[1000px]">
        <article className="flex  flex-col  gap-10 pl-16">
          <h1 className="text-base-100 text-3xl font-extrabold">
            I'M TOTSAPOL PILUK
            <br />
            FRONTEND DEVELOPER{" "}
          </h1>
          <p className="text-base-100 text-lg">
            “I'm a <span className="text-rose-500">Frontend</span> developer who{" "}
            <span className="text-green-400">loves</span> creating beautiful,
            <br /> <span className="text-[#FFB400]">easy-to-use</span>
            interfaces.
            <br /> Aim to create a website with simple navigation and an
            attractive design.
          </p>
        </article>
      </section>
    </>
  );
}

function Logo() {
  const logo = "</>";
  return (
    <>
      {/* <span class="material-symbols-sharp fixed top-0 left-0 text-base-100 text-8xl">code</span> */}
      <span className=" fixed top-10 left-8 text-base-100 text-6xl">
        {logo}
      </span>
    </>
  );
}

export default HeroPage;
