
let textArea = document.getElementById('text-area');
textArea.style.textAlign = "right";
textArea.innerHTML = "Simple Item 1"
+ "\n" + "Simple Item 2";

window.onload = function(){
    let btClick = document.getElementById('click');
    btClick.onclick = interval;
}

// function okClick(){
//    reeSizeFont();
// }

function reSizeFont(){
    var textarea = document.getElementById("area");
    var size = textarea.style.fontSize;
    if (size == "") {
        textarea.style.fontSize = "24pt";
        console.log(1);
    }
    else {
        textarea.style.fontSize = (parseInt(size) + 2) + "pt";
        console.log(2);
    }
    console.log("size: " + size);
    // let size = parseInt(textArea.style.fontSize);
    // size += 2;
    // textArea.style.fontSize = size + "pt";
    // textArea.style.width = "100%";
}

function interval(){
    setInterval(reSizeFont, 500);
}

function onChange(){
    let checkBox = document.getElementById('checked');
    var textarea = document.getElementById("area");
    if(checkBox.checked){
        textarea.style.fontWeight = 'bold';
        textarea.style.color = "green";
        textarea.style.textDecoration = 'underline';
    //    document.body.style.backgroundImage = "url('/images/rotten.gif')"
    }else{
        textarea.style.fontWeight = 'normal'
        textarea.style.color = '';
        textarea.style.textDecoration = 'none';
       document.body.style.backgroundImage = '';
    }
   
}
