export class Factor {
    public name: string
    public value?: number
    public include?: boolean

    public constructor(name: string, value?: number, include?: boolean) {
        this.value = value
        this.name = name
        this.include = include
    }
}