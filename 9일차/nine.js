function mv(title,year){
    this.title=title;
    this.year=year;
}

function mv1(){
    var one=new mv("라푼젤","2010");
    var title=document.getElementById("title");
    var year=document.getElementById("year");
    title.innerHTML=one.title;
    year.innerHTML=one.year;
}

function mv2(){
    var one=new mv("가디언즈","2012");
    var title=document.getElementById("title");
    var year=document.getElementById("year");
    title.innerHTML=one.title;
    year.innerHTML=one.year;
}

function mv3(){
    var one=new mv("겨울왕국","2014");
    var title=document.getElementById("title");
    var year=document.getElementById("year");
    title.innerHTML=one.title;
    year.innerHTML=one.year;
}