export function AboutMe() {
    return(
        <section className="h-[60vh] flex flex-col items-center justify-center bg-[#f9f9f9] border-2">
            <div className="flex flex-col justify-center items-center border-2">
                <article className="m-[70px]"><h2 className="font-extrabold text-5xl">ABOUT ME</h2></article>
                <article className="flex flex-col justify-center">
                 <div>
                     <div className="flex flex-col gap-1">
                          <h3 className=" font-bold text-lg text-zinc-800">PERSONAL INFOS</h3>
                          <span className="flex gap-2"><p className="w-[200px]">First Name: Totsapol</p><p>Address: Prachinburi</p></span>
                          <span className="flex gap-2"><p className="w-[200px]">Last Name: Piluk</p><p>Phone: 064-202-7847</p></span>
                          <span className="flex gap-2"><p className="w-[200px]">Age: Totsapol</p><p>Email: totsapol.piluk@gmail.com</p></span>
                          <span className="flex gap-2"><p className="w-[200px]">Nationality: Totsapol</p><p>GitHub: totsapol.piluk</p></span>
                          <span className="flex gap-2"><p className="w-[200px]">Freelance: Totsapol</p><p>linked: Totsapol Piluk</p></span>
                          </div>
                     <div></div>
                  </div>
                 <div></div>
                </article>
            </div>
        </section>
    )
}