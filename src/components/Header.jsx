import { assets } from "../assets/assets";

function Header() {
  return (
    <header className="bg-primary flex flex-col md:flex-row justify-center items-center px-6 md:px-10 lg:px-20 gap-5 rounded-lg ">
      {/* ------------ left side ------------ */}
      <div className="md:w-1/2  flex flex-col justify-center items-center md:items-start text-white py-6 md:py-[9vw] mb-[-30px] gap-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <img src={assets.group_profiles} alt="" />
        <p>
          Simply browse through our extensive list of trusted doctors, <br />
          schedule your appointment hassle-free
        </p>
        <a
          href="#specialityMenu"
          className="w-[220px] bg-white text-black text-center rounded-full flex justify-center item-center gap-5 py-3 transition-all duration-300 hover:scale-110"
        >
          <p>Book appointment</p>
          <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ------------ right side ------------ */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          className="w-full md:absolute -top-17.75 h-auto"
        />
      </div>
    </header>
  );
}

export default Header;
