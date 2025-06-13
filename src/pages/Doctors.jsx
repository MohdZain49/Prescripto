import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import useAppContext from "../context/AppContext";
import Footer from "../components/Footer";

function Doctors() {
  const navigate = useNavigate();
  const { specialityParams } = useParams();
  const { doctors } = useAppContext();
  const [filteredDoctor, setFilteredDoctor] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  const filterDoctor = () => {
    if (specialityParams) {
      setFilteredDoctor(
        doctors.filter((doctor) => doctor.speciality == specialityParams)
      );
    } else {
      setFilteredDoctor(doctors);
    }
  };

  useEffect(() => {
    filterDoctor();
  }, [specialityParams]);

  const specialityLinks = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div>
      <p className="text-gray-600 font-base">
        Browse through the doctors specialist.
      </p>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="sm:hidden  border border-gray-300 px-4 py-1 mt-5 rounded-sm cursor-pointer text-sm text-gray-600 "
      >
        Filters
      </button>
      <div className={`flex flex-col sm:flex-row mt-5 gap-5`}>
        <div
          className={`${openMenu ? "flex" : "hidden"} sm:flex flex-col gap-5`}
        >
          {specialityLinks.map((speciality) => (
            <NavLink
              to={`/doctors/${speciality}`}
              className={({ isActive }) => `
            border border-gray-300 rounded-md min-w-[200px] px-3 py-1.5 
            text-sm text-gray-600 text-start 
            ${isActive ? "bg-indigo-100 text-black" : ""}
          `}
            >
              {speciality}
            </NavLink>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDoctor.map((doctor) => (
            <div
              key={doctor._id}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={doctor.image}
                alt="doctor_image"
                className="bg-blue-50"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="size-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium">{doctor.name}</p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doctors;
