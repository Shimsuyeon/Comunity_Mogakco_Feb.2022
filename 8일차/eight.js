var h1 = document.getElementsByTagName('h1');
var i = 0;
var text = "모두각자코딩";
var textcopy = "";
var check = 0;


function change(){
    if( i < text.length){
        colorchange();
        textcopy[i]=text[i];
        if(check != 1){
            check = 1;
            h1[0].innerHTML = "";
        }
        h1[0].innerHTML += text[i];
        i++;
    }
}


function colorchange(){
    randcolor="#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
    h1[0].style.color=randcolor;
}