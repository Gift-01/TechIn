import Image from "next/image";
function Navbar() {
  return (
    <div className="w-full  flex border-2 border-rose-600 ...">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={222}
        height={35}
        className=" my-[10px]"
      />
      <input placeholder="Search Course Name" className="rounded-md drop-shadow-[]"  />
    </div>
  );
}

export default Navbar;
