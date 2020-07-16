import { Factor } from "../interface/factor"

export class FT {
    public thermic38: Factor
    public thermic39: Factor
    public thermic40: Factor
    public thermic41: Factor

    public constructor() {
        this.thermic38 = { name: "38ºC", value:1.1 }
        this.thermic39 = { name: "39ºC", value:1.2 }
        this.thermic40 = { name: "40ºC", value:1.3 }
        this.thermic41 = { name: "41ºC", value:1.4 }
    }
}