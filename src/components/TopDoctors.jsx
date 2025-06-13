import { useNavigate } from "react-router-dom";
import useAppContext from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useAppContext();

  return (
    <section className="flex flex-col items-center gap-8 my-16 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="w-1/3 text-sm text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={doctor.image} alt="doctor_image" className="bg-blue-50" />
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
      <button
        onClick={() => {
          navigate("doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer transition-all duration-300 hover:scale-110"
      >
        more
      </button>
    </section>
  );
}

export default TopDoctors;
