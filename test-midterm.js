function incrementItem() {
    var val = $("#btn").parent().first("span");
    console.log(val.html());
    val.html(parseInt(val.html()) + 1);
}