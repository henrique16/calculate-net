import { CalculateNet } from "./calculateNet"
import { Patient } from "../domain/patient"
import { FA } from "../domain/fa"
import { FI } from "../domain/fi"
import { FT } from "../domain/ft"

export class GetCalories {
    private calculateNet: CalculateNet

    public constructor(patient: Patient, fa: FA, fi: FI, ft: FT) {
        this.calculateNet = new CalculateNet(patient, fa, fi, ft)
    }

    public get(): Promise<number> {
        return this.calculateNet.calculate()
    }
}