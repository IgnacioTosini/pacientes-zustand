import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, PatientP } from "../types";

type PatientsState = {
    patients: PatientP[]
    activeId: PatientP['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: string) => void
    getPatientById: (id: PatientP['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): PatientP => {
    return { ...patient, id: uuidv4() }
}
export const usePatientStore = create<PatientsState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeId: '',
            addPatient: (data) => {
                const newPatient = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data }
                        : patient),
                    activeId: ''
                }))
            }
        }), {
            name: 'patientStorage'
        })
    )
)

