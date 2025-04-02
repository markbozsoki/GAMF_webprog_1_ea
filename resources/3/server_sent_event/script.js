var source = new EventSource("event_source.php");
let ping_result = document.getElementById("result");
let separator = "<br>"
let line_counter = 0;

source.onmessage = function (event) {
    line_counter++;
    let current_ping_result = ping_result.innerHTML;
    
    let log_line = composeLogLine(line_counter, event.data)
    current_ping_result += log_line
    if (line_counter > 7) {
        // remove the oldest row from the ping logs
        ping_result.innerHTML = "";
        let visible_lines = current_ping_result.split(separator);
        let new_ping_result = "";
        for (let i = 1; i < visible_lines.length; i++) {
            new_ping_result += visible_lines[i] + separator;
        }
        ping_result.innerHTML = new_ping_result;
    }
    else {
        ping_result.innerHTML = current_ping_result + separator;
    }
};

function composeLogLine(line_counter, event_data) {
    let datas = event_data.split("-");
    let log_level = datas[0];
    let message = datas[1];
    let timestamp = datas[2].substring(5, 25);

    return "[ " + line_counter + " - " + timestamp + " " + log_level + " ]  " + message;
}