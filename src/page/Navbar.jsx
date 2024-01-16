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
      <label className="flex justify-center items-center rounded-lg w-[70px] h-[50px] bg-info hover:bg-[#FFB400] hover:text-[#39A056]">
        <button class="material-symbols-sharp text-base-100 text-2xl hover:text-[#ffffff]">{icon}</button>
      </label>
    </>
  );
}
export default Navbar;
