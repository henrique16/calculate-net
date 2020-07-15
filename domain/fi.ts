import { Factor } from "./factor"

export class FI {
    public uncomplicatedPatient: Factor
    public lightFast: Factor
    public diabetesMelittus: Factor
    public neurological : Factor
    public poLight : Factor
    public poMedium: Factor
    public poLarge: Factor
    public dii: Factor
    public pancreatitis: Factor
    public transplant: Factor
    public liverDiseases: Factor
    public kidneyDisease: Factor
    public kidneyDialysis: Factor
    public cancerAndSIDA: Factor
    public peritonitis: Factor
    public sepsis: Factor
    public smallInfection: Factor
    public cardiacSurgery: Factor
    public dpoc: Factor
    public longBoneFracture: Factor
    public polytraumaInRehabilitation: Factor
    public polytraumaAndSepsis: Factor
    public burnedLessThan20: Factor
    public barned2140: Factor
    public burnedHigherThan40: Factor

    public constructor() {
        this.uncomplicatedPatient = { name: "Paciente não complicado", value: 1 }
        this.lightFast = { name: "Jejum leve" }
        this.diabetesMelittus = { name: "Diabetes melittus", value: 1.1 }
        this.neurological = { name: "Neurológicos" }
        this.poLight = { name: "PO leve" }
        this.poMedium = { name: "PO médio" }
        this.poLarge = { name: "PO grande" }
        this.dii = { name: "DII: Crohn ativo", value: 1.3 }
        this.pancreatitis = { name: "Pancreatite", value: 1.3 }
        this.transplant = { name: "Transplante", value: 1.3 }
        this.liverDiseases = { name: "Hepatopatias", value: 1.2 }
        this.kidneyDisease = { name: "Renal", value: 1.15 }
        this.kidneyDialysis = { name: "Renal diálise", value: 1.2 }
        this.cancerAndSIDA = { name: "Câncer e SIDA" }
        this.peritonitis = { name: "Peritonite", value: 1.4 }
        this.sepsis = { name: "Sepse", value: 1.3 }
        this.smallInfection = { name: "Pequena infecção", value: 1.2 }
        this.cardiacSurgery = { name: "Cirurgia cardíaca", value: 1.2 }
        this.dpoc = { name: "DPOC", value: 1.2 }
        this.longBoneFracture = { name: "Fratura de osso longo" }
        this.polytraumaInRehabilitation = { name: "Politrauma em reabilitação", value: 1.5 }
        this.polytraumaAndSepsis = { name: "Politrauma e Sepse", value: 1.6 }
        this.burnedLessThan20 = { name: "Queimados < 20% ASQ" }
        this.barned2140 = { name: "Queimados 21-40% ASQ" }
        this.burnedHigherThan40 = { name: "Queimados > 40% ASQ" }
    }
}