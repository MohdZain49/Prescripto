import { Link } from "react-router-dom";
import useAppContext from "../context/AppContext";

function SpecialityMenu() {
  const { specialityData } = useAppContext();

  return (
    <section
      id="specialityMenu"
      className="flex flex-col justify-center items-center my-20 gap-5 text-gray-800"
    >
      <h1 className="text-3xl font-semibold">Find by Speciality</h1>
      <p className="w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col justify-center items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] duration-500"
            onClick={() => scrollTo(0, 0)}
          >
            <img src={item.image} className="w-25" alt="" />
            <p className="text-sm">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SpecialityMenu;
