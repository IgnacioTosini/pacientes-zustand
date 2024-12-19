export type PatientP = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    symptoms: string
}

export type DraftPatient = Omit<PatientP, 'id'>