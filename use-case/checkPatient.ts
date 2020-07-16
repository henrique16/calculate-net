import { Patient } from "../domain/patient"
import { Factor } from "../interface/factor"

export class CheckPatient {
    private patient: any

    public constructor(patient: Patient) {
        this.patient = patient
    }

    public check(): Promise<void> {
        try {
            for (let key in this.patient) {
                let property: Factor = this.patient[key]
                let value: number | undefined = property.value
                if (!value) throw `propriedade ${property.name} está indefinida`
            }
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}