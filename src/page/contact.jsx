export function Contact() {
  return (
    <div id="contact" className="h-[100Vh] flex bg-[#f9f9f9] mt-4 drop-shadow-md pt-[50px]">
      <div className="w-[33%] bg-[#f9f9f9] flex justify-center items-center p-10">
        <div className="w-[100%] h-[100%] bg-[#ffe11bc8] dropCon flex justify-center items-center flex-col text-8xl font-extrabold gap-10">
          <p>T</p>
          <p>H</p>
          <p>A</p>
          <p>N</p>
          <p>K</p>
        </div>
      </div>

      <div className="w-[33%] bg-[#ffe11bc8] flex justify-center items-center p-10">
        <div className="w-[100%] h-[100%] bg-[#f9f9f9] flex flex-col justify-center items-center gap-16 dropCon">
          <span className="flex flex-col justify-center items-center w-[300px]">
            <img src="/img/phone.ico" alt="phone icon" className="w-[100px]" />
            <p>tel 064-202-7847</p>
          </span>
          <span className="flex flex-col justify-center items-center w-[300px]">
            <img src="/img/gmail.ico" alt="gmail icon" className="w-[100px]" />
            <ul className="flex flex-col gap-2">
              <li className="text-center">gmail</li>
              <li className="text-center">totsapol.piluk@gmail.com</li>
              <li className="text-center">totsapol1123@gmail.com</li>
            </ul>
          </span>
          <span className="flex flex-col justify-center items-center w-[300px]">
            <img src="/img/github.ico" alt="github icon" className="w-[100px]" />
            <a
              href="https://github.com/Totsapol-Piluk"
              target="_blank"
              className="text-blue-800 underline"
            >
              https://github.com/Totsapol-Piluk
            </a>
          </span>
          <span className="flex flex-col justify-center items-center w-[300px]">
            <img src="/img/linkedin.ico" alt="linkedin icon" className="w-[100px]" />
            <a
              href="https://www.linkedin.com/in/totsapol-piluk/"
              target="_blank"
              className="text-blue-800 underline"
            >
              www.linkedin.com/in/totsapol-piluk
            </a>
          </span>
        </div>
      </div>

      <div className="w-[33%] bg-[#f9f9f9] flex justify-center items-center p-10">
        <div className="w-[100%] h-[100%] bg-[#ffe11bc8] dropCon flex justify-center items-center flex-col text-8xl font-extrabold gap-10">
          <p>Y</p>
          <p>O</p>
          <p>U</p>
        </div>
      </div>
    </div>
  );
}
