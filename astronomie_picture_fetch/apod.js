$(document).ready(
    function () {
        $("#view_button").click(getPicture);
    });

function getPicture() {

    fetch("https://api.nasa.gov/planetary/apod", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            api_key: "DEMO_KEY",
            date: document.getElementById("date").value
        })
    })
    .then(response => response.json())
    .then(showPicture)
    .catch(noPicture);

};

function showPicture(data) {
    $("#pic").attr("src", data.url);
    $(".title").text(data.title);
};

function noPicture(error) {
    alert(error.responseText);
};