let fizz_buzz_counter_result = document.getElementById("fizzBuzzCounter").querySelector("div label");

let index = 1;
fizz_buzz_counter_result.innerHTML = index;
while (true) {
    await sleep(1500);

    let current_result = fizz_buzz_counter_result.innerHTML;
    index++;

    let fizz_buzz_value = getFizzBuzzValue(index);
    fizz_buzz_counter_result.innerHTML = current_result + ", " + fizz_buzz_value;
}

function sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}