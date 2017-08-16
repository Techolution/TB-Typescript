
//1.  Fix messageOne so that the message outputs correctly in the browser.
function messageOne() {
    let adjective = "cool";
    let output: any = document.getElementById('message1');
    let message: string = `I am a ${adjective} message`;

    output.innerHTML = message;
}

