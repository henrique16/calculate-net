import { Patient } from "../domain/patient"
import { FA } from "../domain/fa"
import { FI } from "../domain/fi"
import { FT } from "../domain/ft"
import { CheckPatient } from "./checkPatient"
import { FactorSum } from "./factorSum"
import { CalculateTmb } from "./calculateTmb"
import { CalculateNet } from "./calculateNet"

export class GetCalories {
    private calculateNet: CalculateNet
    

    public constructor(calculateNet: CalculateNet) {
        this.calculateNet = calculateNet
    }

    public get(): Promise<number> {
        return this.calculateNet.calculate()
    }
}