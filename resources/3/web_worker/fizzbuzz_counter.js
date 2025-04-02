var index = 1;

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

function FizzBuzz() {
    let fizz_buzz_value = getFizzBuzzValue(index);
    postMessage(fizz_buzz_value);
    index++;
    setTimeout("FizzBuzz()", 150);
}

FizzBuzz();