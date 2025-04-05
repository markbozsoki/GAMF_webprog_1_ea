function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let element_id = event.dataTransfer.getData("id");
    dragged_answer = document.getElementById(element_id)

    let selected_answer = document.getElementById("selectedAnswer");
    if (selected_answer.innerHTML != "") {
        selected_answer.innerHTML = "";
    }
    event.target.innerHTML = dragged_answer.innerHTML;
}

let checker_button = document.getElementById("check");
checker_button.addEventListener("click", () => {
    let selected_answer = document.getElementById("selectedAnswer").innerHTML;
    if (selected_answer == "Ayrton&nbsp;Senna") {
        alert("Helyes válasz!");
    }
    else {
        alert("A megadott válasz helyetelen!");
    }
});