import { Factor } from "./factor"

export class FA {
    public bedridden: Factor
    public movingBedridden: Factor
    public movingWandering: Factor

    public constructor() {
        this.bedridden = { name: "Acamado", value: 1.2 }
        this.movingBedridden = { name: "Móvel Acamado", value: 1.25 }
        this.movingWandering = { name: "Móvel Deambulando", value: 1.3 }
    }
}