
export class Hello {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hi, ${this.name}!`);
    }
}