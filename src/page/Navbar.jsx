function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 border-2 items-center bg-whiteborder-4 border-[#f9f9f9] w-[100%]">
        <div>
          <MenuBar />
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </>
  );
}

function MenuBar() {
  return (
    <>
      <ul className="flex gap-4">
        <li className="border-4 border-[#f9f9f9] hover:border-4 hover:border-[#f9f9f9] hover:border-b-indigo-500">
          <a href="#">Home</a>
        </li>
        <li className="border-4 border-[#f9f9f9] hover:border-4 hover:border-[#f9f9f9] hover:border-b-indigo-500">
          <a href="#">About</a>
        </li>
        <li className="border-4 border-[#f9f9f9] hover:border-4 hover:border-[#f9f9f9] hover:border-b-indigo-500">
          <a href="#">Project</a>
        </li>
        <li className="border-4 border-[#f9f9f9] hover:border-4 hover:border-[#f9f9f9] hover:border-b-indigo-500">
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
}

function RightBar() {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <p>Tel-064-202-7847</p>
        </li>
        <li>
          <CVdowloadButton />
        </li>
      </ul>
    </>
  );
}

function CVdowloadButton() {
  return (
    <>
      <a href="/fileDowload/cv.pdf" download="cv.pdf">
        <div className="w-[125px] p-2 rounded-full bg-[#FFE01B] border-[1px] border-[#292929] dropSD">
          <p className=" text-center">CV dowload</p>
        </div>
      </a>
    </>
  );
}

export default Navbar;
