class BootCampTest {
    readonly BANNER: string = "Typescript Bootcamp Ready to go!";

    constructor() {}

    hello() {
        console.log(this.BANNER);
    }
}

let bootcamp = new BootCampTest();
bootcamp.hello();