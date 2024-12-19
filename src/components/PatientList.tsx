import { usePatientStore } from "../store/store"
import { PatientDetails } from "./PatientDetails"

export const PatientList = () => {
  const patients = usePatientStore(state => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen- overflow-y-scroll">
      {patients.length ?
        (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">
                Pacientes y citas
              </span>
            </p>
            {patients.map(patient => (
              <PatientDetails key={patient.id} patient={patient}></PatientDetails>
            ))}
          </>
        ) :
        (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando Pacientes {''}
              <span className="text-indigo-600 font-bold">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
    </div>
  )
}
