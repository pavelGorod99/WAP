var start = false;
$( document ).ready(function() {
        $(".boundary").on("mouseover", function() {
            if (start) {
                $(".boundary").css("background-color", "red")
                $("#status").html("You lose!");
                setTimeout(() => {
                    start = false;
                    alert("You lost!")
                }, 500)
            }
        })
    $("#start").on("click", function() {
        $(".boundary").css("background-color", "#eeeeee")
        start = true;
    })
    $("#end").on("mouseover", function() {
        alert("You won!")
        $("#status").html("You won!");
        start = false;
    })
});