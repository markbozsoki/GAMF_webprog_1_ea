let where_am_i_botton = document.getElementById("whereAmIBotton");
let jump_to_location_botton = document.getElementById("jumpToPositionBotton");
let latitude_input = document.getElementById("latitudeInput").querySelector("input");
let longitude_input = document.getElementById("longitudeInput").querySelector("input");
let map_container = document.getElementById("mapContainer");

const MAP_RENDER_EMPTY_INPUTS_INSTRUCTION_MSG = map_container.querySelector("label").innerHTML;

where_am_i_botton.addEventListener("click", updatePageWithUserPosition);
jump_to_location_botton.addEventListener("click", updateMapWithInputPosition);

function updatePageWithUserPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePageWithCoordinates);
    }
    else {
        alert("Pozíció meghatározás nem támogatott ebben a böngészőben!");
    }
}

function updatePageWithCoordinates(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    latitude_input.value = latitude;
    longitude_input.value = longitude;
    updateMapWithCoordinates(latitude, longitude);
}

function updateMapWithInputPosition() {
    if (latitude_input.value == "" || longitude_input.value == "") {
        map_container.innerHTML = "<label>" + MAP_RENDER_EMPTY_INPUTS_INSTRUCTION_MSG + "</label>";
        return;
    }
    updateMapWithCoordinates(latitude_input.value, longitude_input.value);
}

function updateMapWithCoordinates(latitude, longitude) {
    let base_url = "https://maps.google.com/maps";
    let coordinates = latitude + "," + longitude;
    let map_source_url = base_url + "?q=" + coordinates + "&hl=es;z=14&amp;output=embed";

    let map_container_bounding_client_rectangle = map_container.getBoundingClientRect();
    let frame_size = 'width="' + map_container_bounding_client_rectangle.width + '" height="' + map_container_bounding_client_rectangle.height + '"';
    map_container.innerHTML = "<iframe src=" + map_source_url + " " + frame_size + "></iframe>";
}
