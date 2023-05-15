
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
    textarea.style.fontSize = "24pt";
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
    if(checkBox.checked){
       textArea.style.fontWeight = 'bold';
       textArea.style.color = "green";
       textArea.style.textDecoration = 'underline';
       document.body.style.backgroundImage = "url('/images/hundred-dollar-bill.jpg')"
    }else{
        textArea.style.fontWeight = 'normal'
        textArea.style.color = '';
       textArea.style.textDecoration = 'none';
       document.body.style.backgroundImage = '';
    }
   
}
