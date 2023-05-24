function search(form) {
    console.log(form.word.value);
    $.ajax({
        url: '/search',
        method: 'GET',
        data: { word: form.word.value },
        success: function (response) {
            console.log("RESPONSE: ");
            console.log(response);
            var dataContainer = $('#result');

            $.each(response, function(index, data) {
                var div = $('<div>');
                div.text((index + 1) + " (" + data.wordtype + ") :: " + data.definition);
                dataContainer.append(div);
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
}