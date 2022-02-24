var n=0;
var c=1;


var app = document.getElementsByClassName('type')[0];

var typewriter = new Typewriter(app, {
loop: true,
});

typewriter
	.typeString("지냥이에게 말을 걸어보자")
	.pauseFor(1300)
	.deleteAll()
	.typeString("지냥이는 당신을 기다리고 있다")
	.pauseFor(2500)
	.start();

function check_text() {
	var value = document.getElementById("console").value;
	
	
	console.log(n);
	
	console.log(value);
	if (value == "지냥아") {
		document.getElementsByClassName("cat_says")[0].innerHTML="지냥이 왜 불러~?";
	} 
	
	else if (value == "지냥이 손!") {
		document.getElementsByClassName("cat_says")[0].innerHTML="손 말고 츄르 달라옹!";
	} 
	
	else if (value == "불꺼줘") {
		
		if(n==0){
			document.getElementsByClassName("cat_says")[0].innerHTML="싫다 냥!";
			n++;
		}
		else if(n==1){
			n++;
			document.getElementsByClassName("cat_says")[0].innerHTML="냥냥~";
		}
		else{
		document.getElementsByClassName("cat_says")[0].innerHTML="캄캄해져라! 냥";
		document.body.style.backgroundColor="gray";
		}
	}

	else if (value == "불켜줘") {
		document.getElementsByClassName("cat_says")[0].innerHTML="밝아져라! 냥";
		document.body.style.backgroundColor="white";
	}
	else if (value == "따라해봐") {
		c=1;
		document.getElementsByClassName("cat_says")[0].innerHTML="따라하기 냥!";
	}
	else if (value == "따라하기 그만") {
		c=2;
		document.getElementsByClassName("cat_says")[0].innerHTML="알았다 냥";
	}
	else if (c!=2) {
		value = value + " 냥!";
		document.getElementsByClassName("cat_says")[0].innerHTML =value;
	}

	else {
	  alert("지냥이는 지금 사료 먹는 중! 말 걸어줄거야?");
	}
  }
  