import { Patient } from "../domain/patient"
import { CheckPatient } from "./checkPatient"
import { EnumGender } from "../domain/enumGender"

export class CalculateTmb {
    private patient: Patient

    public constructor(patient: Patient) {
        this.patient = patient
    }

    public async calculate(): Promise<number> {
        try {
            await new CheckPatient(this.patient).check()
            const weight: number = this.patient.weight.value ? this.patient.weight.value : 0
            const height: number = this.patient.height.value ? this.patient.height.value : 0  
            const age: number = this.patient.age.value ? this.patient.age.value : 0
            const gender: number = this.patient.gender.value ? this.patient.gender.value : 0 
            var tmb: number = 0
            if (gender === EnumGender.male) {
                tmb = 66 + 13.7 * weight + 5 * height  - 6.8 * age
            }
            else {
                tmb = 655 + 9.6 * weight + 1.8 * height - 4.7 * age
            }
            tmb = parseFloat(tmb.toFixed(2))
            return Promise.resolve(tmb)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}