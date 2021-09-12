let count = 3;
let flag = 0;

//pin generator

var genPin = document.getElementById('gPin');
let seq = "";
genPin.addEventListener('click', function () {
    seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    //seq = parseFloat(seq);
    //console.log(seq);
    //console.log(typeof seq);

    let display = document.getElementById('showPin');
    //console.log(display);
    display.value = seq;
})


const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', pinMatcher);


buttons.forEach(function (button) {
    button.addEventListener('click', pinMatcher);
});


// pinmatcher function
function pinMatcher(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.innerText;
    //const submitButtonValue = event.target.value;

    if (clickedButtonValue === 'Submit') {
        matcher();
    }
    else if (clickedButtonValue === 'C') {
        document.getElementById("inputPin").value = "";

    }

    else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }
}



function matcher() {
    //const inputpin = getInputNumber("inputPin");
    const inputpin = document.getElementById("inputPin").value;
    //console.log(inputpin);
    const successPin = document.getElementById("success");
    const failedPin = document.getElementById("failed");

    if (count <= 4 ) {
        if (inputpin == seq && flag == 0) {
            successPin.style.display = "block";
            failedPin.style.display = "none";
        }
        else {
            successPin.style.display = "none";
            failedPin.style.display = "block";

            count--;
            const tarMsg = (count) + " " + "try left";
            //console.log(tarMsg);
            failedMsg = document.getElementById("message").innerText = tarMsg;
            if (count < 1) {
                flag = 1;
                failedMsg = document.getElementById("message").innerText = "Please wait for 30 min";
                const currentTime = new Date();
                setTimeout(function () {
                    count=4;
                    flag=0;
                    matcher();
                    
                }, 10000)

            }

        }

    }
    //document.getElementById("inputPin").value="";

}
