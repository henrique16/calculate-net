import { Factor } from "../domain/factor"

export class FactorSum<T> {
    private factor: any
    private array: number[] = []

    public constructor(factor: T) {
        this.factor = factor
        this.setValues()
    }

    private setValues(): void {
        for (let key in this.factor) {
            let property: Factor = this.factor[key]
            if (property.value && property.include) {
                this.array.push(property.value)
            }
        }
    }

    public sum(): number {
        var sum = 0
        for (let value of this.array) {
            sum += value
        }
        return sum
    }
}