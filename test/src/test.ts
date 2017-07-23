class BootCampTest {

    readonly BANNER: string = "Typescript Bootcamp Ready to go";

    constructor() {}

    private name: string;

    hello() {
        console.log(`${this.BANNER} - ${this.name}`);
    }

    setName(name: string):void {

    }
}

let bootcamp = new BootCampTest();

bootcamp.setName('Larry');
bootcamp.hello();