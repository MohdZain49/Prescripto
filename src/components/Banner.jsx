import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center bg-primary rounded-lg mb-15 gap-5 px-15">
      {/*--------- left side ---------------- */}
      <div className=" md:w-1/2  flex flex-col justify-start gap-5 py-10 md:py-[10vh]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">
          Book Appointment
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">
          With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="w-fit px-8 py-2 bg-white mt-4 text-gray-800 rounded-full hover:scale-105 transition-all duration-200"
        >
          Create account
        </button>
      </div>

      {/*--------- left side ---------------- */}
      <div className="w-0 md:w-1/2 lg:w-[370px] flex items-end">
        <img src={assets.appointment_img} alt="" />
      </div>
    </section>
  );
}

export default Banner;
