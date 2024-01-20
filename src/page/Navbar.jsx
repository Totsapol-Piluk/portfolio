function Navbar() {
  return (
    <>
      <section className="flex flex-col justify-evenly fixed right-6 top-[25%] h-[50%]">
        <Menubar icon='home'/>
        <Menubar icon='person'/>
        <Menubar icon='business_center'/>
        <Menubar icon='mail'/>
      </section>
    </>
  );
}

function Menubar({icon}) {
  return (
    <>
      <label className="flex justify-center items-center rounded-full w-[50px] h-[50px] bg-[#F78888] hover:bg-[#90CCF4] hover:text-[#39A056]">
        <button class="material-symbols-sharp text-[#ffffff] text-2xl hover:text-[#ffffff]">{icon}</button>
      </label>
    </>
  );
}
export default Navbar;
