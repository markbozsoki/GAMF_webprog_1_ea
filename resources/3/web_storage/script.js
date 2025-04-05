let destination_input = document.getElementById("destinationInput");
destination_input.addEventListener("input", () => {
    localStorage.destination = destination_input.value;
});

let message_text = document.getElementById("messageText");
message_text.addEventListener("input", () => {
    sessionStorage.message = message_text.value;
});

window.onload = () => {
    if (sessionStorage.message) {
        message_text.value = sessionStorage.message;
    }
    if (localStorage.destination) {
        destination_input.value = localStorage.destination;
    }
}

let send_button = document.getElementById("sendButton");
send_button.addEventListener("click", () => {
    if (destination_input.value == "") {
        alert("Adjon meg egy címzettet!");
        return;
    }

    if (message_text.value == "") {
        alert("Üres üzenet nem küldhető!");
        return;
    }

    if (confirm("El szeretné küldeni az üzenetet?")) {
        clear();
    };
});

let clear_button = document.getElementById("clearButton");
clear_button.addEventListener("click", clear);

function clear() {
    destination_input.value = "";
    message_text.value = "";

    sessionStorage.clear();
    localStorage.clear();
}