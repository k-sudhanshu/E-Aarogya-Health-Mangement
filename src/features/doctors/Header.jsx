import { useSelector } from "react-redux";
import PatientInfoBox from "../../UI/PatientInfoBox";

function Header() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { name, email, phoneNumber, role, gender, _id: patientID,specialization ,timing} = user;
  return (
    <>
      <div className="p-4 grid grid-cols-2 grid-rows-2 capitalize gap-3 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 col-span-2">
          Doctor Information
        </h1>
        <PatientInfoBox name="name" value={name} />
        <PatientInfoBox name="email" value={email} />
        <PatientInfoBox name="phoneNumber" value={phoneNumber} />
        <PatientInfoBox name="role" value={role} />
        <PatientInfoBox name="gender" value={gender} />
        <PatientInfoBox name="DoctorID" value={patientID} />
        <PatientInfoBox name="Speciliazation" value={specialization} />
        <PatientInfoBox name="Timing" value={timing.open +" " +timing.close} />
      </div>
    </>
  );
}

export default Header;
