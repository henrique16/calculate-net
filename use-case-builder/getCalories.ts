import { GetCalories } from "../use-case/getCalories"
import { CalculateNet } from "../use-case/calculateNet"
import { Patient } from "../domain/patient"
import { FA } from "../domain/fa"
import { FI } from "../domain/fi"
import { FT } from "../domain/ft"

export function getCalories(patient: Patient, fa: FA, fi: FI, ft: FT) {
    const calculateNet: CalculateNet = new CalculateNet(patient, fa, fi, ft)
    return new GetCalories(calculateNet).get()
}