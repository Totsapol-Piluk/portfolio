export function Myproject() {
  return (
    <div id="project" className="flex items-center justify-center flex-col h-[100vh] pb-[100px] gap-4 bg-[#f9f9f9] drop-shadow-md" >
      <h2 className="text-4xl font-extrabold">MY <span className="text-[#FFE01B]">PROJECT</span></h2>
      <div className="w-[50%] h-[70%] rounded-3xl drop-shadow-2xl flex gap-2 justify-center items-center">
        <span className="w-[280px] h-[380px] flex flex-col items-center">
          <a href="https://loglife.guru/" target="_blank" className="dropCSD">
            <img
              src="/img/LOGLIFE.png"
              alt="loglife website"
              className=" rounded-t-lg"
            />
            <p className="py-4 px-[1px] text-md font-semibold bg-white rounded-b-lg border-t-2 text-start pl-4">
              <span className="text-indigo-500 font-extrabold">PROJECT:</span> Loglife (team project)<br/> 
              <span className="text-indigo-500 font-extrabold">TOOL:</span> react<span className="text-green-500"> • </span> node js<span className="text-rose-500"> • </span> mongoDB
            </p>
          </a>
        </span>
      </div>
    </div>
  );
}
