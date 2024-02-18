export function AboutMe() {
    return(
        <section id="aboutme" className="h-[80vh] flex flex-col items-center justify-center bg-[#f9f9f9] pb-10">
            <div className="flex flex-col justify-center items-center">
                <article className="m-[70px]"><h2 className="font-extrabold text-5xl">ABOUT <span className="text-[#FFE01B]">ME</span></h2></article>
                <article className="flex flex-col justify-center">
                 <div>
                     <div className="flex flex-col gap-1">
                          <h3 className=" font-bold text-lg text-zinc-800">PERSONAL INFOS</h3>
                          <span className="flex gap-2">
                            <p className="w-[200px]"><span className=" font-semibold text-gray-500 text-[0.8rem]">First Name:</span> <span className=" font-medium text-gray-800">Totsapol</span></p>
                            <p><span className=" font-semibold text-gray-500 text-[0.8rem]">Address:</span> <span className=" font-medium text-gray-800">Prachinburi</span></p>
                          </span>

                          <span className="flex gap-2">
                            <p className="w-[200px]"><span className=" font-semibold text-gray-500 text-[0.8rem]">Last Name:</span> <span className=" font-medium text-gray-800">Piluk</span></p>
                            <p><span className=" font-semibold text-gray-500 text-[0.8rem]">Phone:</span> <span className=" font-medium text-gray-800">064-202-7847</span></p>
                          </span>

                          <span className="flex gap-2">
                            <p className="w-[200px]"><span className=" font-semibold text-gray-500 text-[0.8rem]">Age:</span> <span className=" font-medium text-gray-800">22</span></p>
                            <p><span className=" font-semibold text-gray-500 text-[0.8rem]">Email:</span> <span className=" font-medium text-gray-800">totsapol.piluk@gmail.com</span></p>
                          </span>

                          <span className="flex gap-2">
                            <p className="w-[200px]"><span className=" font-semibold text-gray-500 text-[0.8rem]">Nationality:</span> <span className=" font-medium text-gray-800">Thai</span></p>
                            <p><span className=" font-semibold text-gray-500 text-[0.8rem]">GitHub:</span> <span className=" font-medium text-gray-800">totsapol.piluk</span></p>
                          </span>

                          <span className="flex gap-2">
                            <p className="w-[200px]"><span className=" font-semibold text-gray-500 text-[0.8rem]">Gender:</span> <span className=" font-medium text-gray-800">Male</span></p>
                            <p><span className=" font-semibold text-gray-500 text-[0.8rem]">linked:</span> <span className=" font-medium text-gray-800">Totsapol Piluk</span></p>
                          </span>

                          </div>
                     <div></div>
                  </div>
                 <div></div>
                </article>
            </div>
        </section>
    )
}