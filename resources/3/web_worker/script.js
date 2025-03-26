var fizz_buzz_worker = null;

let start_fizz_buzz_counter_button = document.getElementById("startFizzBuzzCounter");
start_fizz_buzz_counter_button.addEventListener("click", () => {
    let fizz_buzz_counter_result = document.getElementById("fizzBuzzCounter").querySelector("div label");
    fizz_buzz_counter_result.innerHTML = "";
    if (typeof(Worker) !== "undefined") {
        fizz_buzz_worker = new Worker("fizzbuzz_counter.js");
    }
    else {
        console.log("Web Worker cannot be started");
    }
});

let stop_fizz_buzz_counter_button = document.getElementById("stopFizzBuzzCounter");
stop_fizz_buzz_counter_button.addEventListener("click", () => {
    if (fizz_buzz_worker == null) {
        return;
    }

    fizz_buzz_worker.terminate();
    fizz_buzz_worker = null;
});


let fizz_buzz_inspector = document.getElementById("fizzBuzzInspector");
let which_fizz_buzz_button = fizz_buzz_inspector.querySelector("button");
which_fizz_buzz_button.addEventListener("click", whichFizzBuzz);

function whichFizzBuzz() {
    let inspector_input = fizz_buzz_inspector.querySelector("input");
    let fizz_buzz_value = getFizzBuzzValue(inspector_input.value);

    let inspector_result = document.getElementById("fizzBuzzInspectorResult");
    inspector_result.innerHTML = "Ez egy " + fizz_buzz_value;
}

function getFizzBuzzValue(index) {
    // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...

    if (index % 15 == 0) { // index is divisable by 15 (3 and 5)
        return "FizzBuzz";
    }
    else if (index % 3 == 0) { // index is divisable by 3
        return "Fizz";
    }
    else if (index % 5 == 0) { // index is divisable by 5
        return "Buzz";
    }
    else {
        return index;
    }
}