import { GetCalories } from "../use-case/getCalories"
import { Patient } from "../domain/patient"
import { FA } from "../domain/fa"
import { FI } from "../domain/fi"
import { FT } from "../domain/ft"

export function getCalories(patient: Patient, fa: FA, fi: FI, ft: FT) {
    return new GetCalories(patient, fa, fi ,ft).get()
}