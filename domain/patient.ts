import { Factor } from "./factor"
import { EnumGender } from "./enumGender"

export class Patient {
    public weight: Factor
    public height: Factor
    public age: Factor
    public gender: Factor

    public constructor() {
        this.weight = { name: "Peso" }
        this.height = { name: "Altura" }
        this.age = { name: "Idade" }
        this.gender = { name: "Sexo", value: EnumGender.undefined }
    }
}