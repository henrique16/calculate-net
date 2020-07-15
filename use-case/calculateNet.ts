import { FA } from "../domain/fa"
import { FI } from "../domain/fi"
import { FT } from "../domain/ft"
import { FactorSum } from "./factorSum"
import { CalculateTmb } from "./calculateTmb"
import { Patient } from "../domain/patient"

export class CalculateNet {
    private patient: Patient
    private fa: FA
    private fi: FI
    private ft: FT
    private calculateTmb: CalculateTmb

    public constructor(patient: Patient, fa: FA, fi: FI, ft: FT) {
        this.patient = patient
        this.fa = fa
        this.fi = fi
        this.ft = ft
        this.calculateTmb = new CalculateTmb(this.patient)
    }

    public async calculate(): Promise<number> {
        try {
            const tmb: number = await this.calculateTmb.calculate()
            const fa: number = new FactorSum<FA>(this.fa).sum()
            const fi: number = new FactorSum<FI>(this.fi).sum()
            const ft: number = new FactorSum<FT>(this.ft).sum()
            var net: number = tmb * (fa ? fa : 1) * (fi ? fi : 1) * (ft ? ft : 1)
            net = parseFloat(net.toFixed(2))
            return net
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}