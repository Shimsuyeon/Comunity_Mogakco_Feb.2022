function onClick(){
    setTimeout(function(){
        document.getElementsByClassName("name")[0].innerHTML="설화";
        document.getElementsByClassName("num")[0].innerHTML="010-xxxx-xxxx";
    },2000);
}


document.getElementsByClassName('call')[0].addEventListener('click', onClick);